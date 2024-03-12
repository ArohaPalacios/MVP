import { useState } from 'react'
import './App.css'
import SearchImageView from "./SearchImageView.jsx"

function App() {
  const [image, setImage] = useState(null)
  const [selectedImage, setSelectedImage] = useState([])
  const [index, setIndex] = useState(0)

  //populate the state variable that holds the pictures shown as options to choose.
  //the data comes from the SearchImageView component.
  //This function is sent to it as props.
  function populateImage(json) {
    setImage(json)
  }
 
  //In the return statement I'm showing the url of the element that matches the index.
  //When "next" button clicked, increase index by 1. The limit is the length of the array that holds my data.
  function handleIndex(action) {
    if (action === "next") {
      if (index < image.value.length) {
        setIndex(index + 1)
      }
        //When "prev" button clicked, decrease index by 1. The limit is 0.
    } else if (action === "prev") {
      if (index > 0) {
        setIndex(index - 1)
      }
  }
}



  return (
    <>
   
    <SearchImageView populateImage={(json)=>populateImage(json)}/>
    {image ? 
      (<>
      <button onClick={()=>handleIndex("prev")}>‹‹</button>
      <img
        className='optionImages'
        src=  {image.value[index].contentUrl}/>
      <button onClick={()=>handleIndex("next")}>››</button>
      </>
      ): null}
    </>
  )
}

export default App

