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
      setGallery((state) => [...state, {...newImage, search_term: promptInput, id: uuidv4()}])
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

    function handleAddToFavorites() {

    }
  
  
    return (
      <>
      <textarea
          value={sentenceInput}
          onChange={handleSentenceInputChange}
          placeholder='Write here the message you want to create.'></textarea>
      <SearchImageView 
        setError = {setError}
        promptInput = {promptInput}
        setPromptInput={setPromptInput}
        populateImage={(json)=>populateOptionImages(json)}/>
      {error? <p>{error}</p> :(optionImages ? 
        <OptionImages 
          addToGallery= {(newImage)=> handleAddToGallery(newImage)}
          images= {optionImages}/>: null)}
      {gallery.length ? 
      <Gallery 
        handleAddToFavorites = {handleAddToFavorites}
        gallery = {gallery} 
        handleClearGallery= {handleClearGallery}
        deleteFromGallery={(id)=>handleDeleteFromGallery(id)}/> 
        : null}

      </>
    )
}