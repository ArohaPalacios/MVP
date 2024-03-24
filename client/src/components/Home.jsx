import React from "react";
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
import SearchImageView from "./SearchImageView.jsx"
import OptionImages from "./OptionImages.jsx"
import Gallery from "./Gallery.jsx"

export default function() {
    const [optionImages, setOptionImages] = useState(null)
    const [gallery, setGallery] = useState([])
    const [sentenceInput, setSentenceInput] = useState("")
    const [promptInput, setPromptInput] = useState("")
    const [error, setError] = useState ("")
    const [sentencesId, setSentencesId]= useState(null)
  
    //populate the state variable that holds the pictures shown as options to choose.
    //the data comes from the SearchImageView component.
    //This function is sent to it as props.
    function populateOptionImages(json) {
        // if (!json) {
        //     setError("Image not found, please try again")
        // }
      setOptionImages(json)
    }
  
    function handleAddToGallery(newImage) {
      const { contentUrl } = newImage;
      setGallery((state) => [...state, {...newImage, URL: newImage.contentUrl , search_term: promptInput, id: uuidv4()}])
      setPromptInput("")
      setOptionImages(null)
    }
  
    function handleDeleteFromGallery(id) {
      setGallery(currentGallery=> {
        return currentGallery.filter(image=> image.id !== id)
      })
    }
  
    function handleClearGallery() {
      setGallery([])
    }

    function handleSentenceInputChange(event)  {
        setSentenceInput(event.target.value)
      }

    const handleAddToFavorites= async () =>{
      if (sentenceInput.length) {
        try {
          await addFavoriteSentence(); 
          console.log(gallery)// Wait for addFavoriteSentence to complete
          // Wait for addFavoriteImages to complete after addFavoriteSentence
            // Clear input
          setSentenceInput("");
         
        } catch (err) {
          //error that can be seen and investigated by other developers.
          res.status(500).send(err);
          //Error message for the user.
          setError("Something went wrong, please try again.");
        }
      } else {setError("Please, provide the meaning of your picto-message in the MESSAGE field.")}
    }


    const addFavoriteSentence = async () => {
      console.log(gallery)
      try {
        const result = await fetch("api/sentences", {
          method: "POST",
          //tell API we're sharing data in json, like when we select "raw" and "json" in Postman.
          headers: {
            "Content-Type": "application/json"
          },
          //Parse our js data to json, so that the API understands it.
          body: JSON.stringify({ sentence: sentenceInput }) 
        });
        if (!result.ok) {
          console.log(result.status);
          setError("Something went wrong, please try again.");
        }
        // Parse json to js, so that our app can understand it
        const json = await result.json();
        console.log("json: " , json)
        const sentenceId = json.id;
        //setSentencesId(sentenceId)
        const updatedGallery = gallery.map(image => ({ ...image, sentences_id: sentenceId }));
        //setGallery(updatedGallery);
        await addFavoriteImages(updatedGallery); 
       
        
      } catch (err) {
        //error that can be seen and investigated by other developers.
        console.error("Error adding favorite sentence:", err);
        //Error message for the user.
        setError("Something went wrong, please try again.");
      }
    };

    const addFavoriteImages = async (gallery) => {
      
      try {
          
        console.log("Gallery before request:", gallery); 
        const result = await fetch("/api/images", {
          method: "POST",
          //tell API we're sharing data in json, like when we select "raw" and "json" in Postman.
          headers: {
            "Content-Type": "application/json"
          },
          //Parse our js data to json, so that the API understands it.
          body: JSON.stringify(gallery) 
        });
        console.log("Request Result:", result);
        if (!result.ok) {
          console.log(result.status);
          setError("Something went wrong, please try again.");
        }
        // Parse json to js, so that our app can understand it
        const json = await result.json();
      
      } catch (err) {
        //error that can be seen and investigated by other developers.
        res.status(500).send(err);
        //Error message for the user.
        setError("Something went wrong, please try again.");
      }
    };
  
  
    return (
      <>
      <div className="row">
        <div className= "col col-md-6 col-12">
        
          <div className="input-group mb-3">
            <span className="input-group-text custom-color ">MESSAGE</span>
            <textarea
                className="form-control small-text" aria-label="With textarea"
                value={sentenceInput}
                onChange={handleSentenceInputChange}
                placeholder='Write here the picto-message you want to create.'>
            </textarea>
          </div>
        </div>
        <div className= "col col-md-6 col-12">
          <SearchImageView 
            setError = {setError}
            promptInput = {promptInput}
            setPromptInput={setPromptInput}
            populateImage={(json)=>populateOptionImages(json)}/>
          {error? <p>{error}</p> :(optionImages ? 
            <OptionImages 
              addToGallery= {(newImage)=> handleAddToGallery(newImage)}
              images= {optionImages}/>: null)}
        </div>
      </div>
      <div className= "gallery_area">
        <p className="small-text">Your picto-message will be shown here... </p>
      {gallery.length ? 
        <Gallery 
          handleAddToFavorites = {handleAddToFavorites}
          gallery = {gallery} 
          handleClearGallery= {handleClearGallery}
          deleteFromGallery={(id)=>handleDeleteFromGallery(id)}/> 
          : null}
      </div>
      </>
    )
}