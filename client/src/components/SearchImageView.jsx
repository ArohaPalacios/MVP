import { useState } from "react";


export default function SearchImageView({populateImage, setPromptInput, promptInput}) {
    //Hold the input data so that I can manipulate it later.
    // const [promptInput, setPromptInput] = useState("")
    
    //URL of the API, I send the input as params.
    const url = `https://images-search1.p.rapidapi.com/search?q=${promptInput}`;
    
    //Fetch second argument. The API proposed this syntaxis, separated from the fetch, and it looks cleaner.
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8352e5b3a5msh8b1b653715e9095p1e8357jsncb4ca27a0aa8',
        "Content-Type": "application/json",
        'X-RapidAPI-Host': 'images-search1.p.rapidapi.com'
      }}
    
    //populate input variable with the text the user enters in input field.
    function handleInputChange(event)  {
      setPromptInput(event.target.value)
      }
    
    //prevent from refreshing when submit is clicked.
    //call getImage function
    //send the input content as argument.
      function handleSubmit(event) {
        event.preventDefault()
        getImage()
      }
       //retrieve image data and populate image state variable.
   const getImage = () => {
    //contact api
    fetch(url, options)
      //parse api response to js
      .then(response => response.json())
      //populate students state variable with the retrieved data.
      .then(json => {
        populateImage(json);
      })
      .catch(error => {
        console.log(error);
      });
  };
    return (
      <>
        <form onSubmit={handleSubmit}>
        <input
          value={promptInput}
          onChange={handleInputChange}></input>
        <button >search</button>
      </form>
      </>
    )
  }