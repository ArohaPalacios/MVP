import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from "uuid";
import SearchImageView from "./SearchImageView.jsx"
import OptionImages from "./OptionImages.jsx"
import Gallery from "./Gallery.jsx"


function App() {
  const [optionImages, setOptionImages] = useState(null)
  const [gallery, setGallery] = useState([])

  //populate the state variable that holds the pictures shown as options to choose.
  //the data comes from the SearchImageView component.
  //This function is sent to it as props.
  function populateImage(json) {
    setOptionImages(json)
  }

  function handleAddToGallery(newImage) {
    setGallery((state) => [...state, {...newImage, id: uuidv4()}])
  }

  function handleDeleteFromGallery(idx) {
    setGallery(currentGallery=> {
      return currentGallery.filter(image=> image.index !== idx)
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos=> {
    return currentTodos.filter(todo => todo.id !== id)
  })
  }


  return (
    <>
    
    <SearchImageView populateImage={(json)=>populateImage(json)}/>
    {optionImages ? 
      <OptionImages 
        addToGallery= {(newImage)=> handleAddToGallery(newImage)}
        images= {optionImages}/>: null}
    {gallery ? 
    <Gallery gallery = {gallery} deleteFromGallery={(idx)=>handleDeleteFromGallery(idx)}/> : null}
    </>
  )
}

export default App

