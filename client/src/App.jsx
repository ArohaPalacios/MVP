import { useState } from 'react'
import './App.css'
//const fetch = require('node-fetch');

function App() {
  const [image, setImage] = useState(null)
  const url = 'https://images-search1.p.rapidapi.com/search?q=punto%20muerto%20economia';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8352e5b3a5msh8b1b653715e9095p1e8357jsncb4ca27a0aa8',
      "Content-Type": "application/json",
      'X-RapidAPI-Host': 'images-search1.p.rapidapi.com'
    }}

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
 

  return (
    <button onClick={getImage}>send</button>
  )
}

export default App
