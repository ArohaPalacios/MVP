import { useState } from 'react'
import './App.css'
//const fetch = require('node-fetch');

function App() {
  const [image, setImage] = useState(null)
  const [input, setInput] = useState("")
  const [selectedImage, setSelectedImage] = useState([])
  const [index, setIndex] = useState(0)
  const url = `https://images-search1.p.rapidapi.com/search?q=${input}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8352e5b3a5msh8b1b653715e9095p1e8357jsncb4ca27a0aa8',
      "Content-Type": "application/json",
      'X-RapidAPI-Host': 'images-search1.p.rapidapi.com'
    }}

    function handleInputChange(event)  {
      setInput(event.target.value)
    }

    function handleSubmit(event) {
      event.preventDefault()
      getImage(event.target.value)
    }

   //retrieve image data and populate image state variable.
   const getImage = () => {
    //contact api
    fetch(url, options)
      //parse api response to js
      .then(response => response.json())
      //populate students state variable with the retrieved data.
      .then(json => {
        setImage(json);
      })
      .catch(error => {
        console.log(error);
      });
  };
 
  function handleIndex(action) {
    if (action === "next") {
      if (index < image.value.length) {
        setIndex(index + 1)
      }
    } else if (action === "prev") {
      if (index > 0) {
        setIndex(index - 1)
      }
  }
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={handleInputChange}></input>
      <button >show</button>
    </form>
    {image ? 
      (<>
      <img
        className='optionImages'
        src=  {image.value[index].contentUrl}/>
      <button onClick={()=>handleIndex("prev")}>prev</button>
      <button onClick={()=>handleIndex("next")}>next</button>
      </>
      ): null}
    </>
  )
}

export default App
