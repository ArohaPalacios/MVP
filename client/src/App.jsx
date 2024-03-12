import { useState } from 'react'
import './App.css'
import SearchImageView from "./SearchImageView.jsx"
import OptionImages from "./OptionImages.jsx"

function App() {
  const [image, setImage] = useState(null)
  const [selectedImage, setSelectedImage] = useState([])

  //populate the state variable that holds the pictures shown as options to choose.
  //the data comes from the SearchImageView component.
  //This function is sent to it as props.
  function populateImage(json) {
    setImage(json)
  }

  return (
    <>
    <SearchImageView populateImage={(json)=>populateImage(json)}/>
    {image ? 
      <OptionImages image= {image}/>: null}
    </>
  )
}

export default App

