import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
import SearchImageView from "./SearchImageView.jsx"
import OptionImages from "./OptionImages.jsx"
import Gallery from "./Gallery.jsx"

export default function() {
    const [optionImages, setOptionImages] = useState(null)
    const [gallery, setGallery] = useState([])
    const [sentenceInput, setSentenceInput] = useState("")
  
    //populate the state variable that holds the pictures shown as options to choose.
    //the data comes from the SearchImageView component.
    //This function is sent to it as props.
    function populateOptionImages(json) {
      setOptionImages(json)
    }
  
    function handleAddToGallery(newImage) {
      setGallery((state) => [...state, {...newImage,  id: uuidv4()}])
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
  
  
    return (
      <>
      <textarea
          value={sentenceInput}
          onChange={handleSentenceInputChange}
          placeholder='Write here the message you want to create.'></textarea>
      <SearchImageView populateImage={(json)=>populateOptionImages(json)}/>
      {optionImages ? 
        <OptionImages 
          addToGallery= {(newImage)=> handleAddToGallery(newImage)}
          images= {optionImages}/>: null}
      {gallery.length ? 
      <Gallery 
        gallery = {gallery} 
        handleClearGallery= {handleClearGallery}
        deleteFromGallery={(id)=>handleDeleteFromGallery(id)}/> 
        : null}

      </>
    )
}