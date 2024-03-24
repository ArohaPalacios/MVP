
import React from "react";


export default function SearchImageView({populateImage, setPromptInput, promptInput, setError}) {
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

  const getImage = async () => {
    try {
      // Contact API and parse response to JSON
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Failed to fetch image data");
      }
      const json = await response.json();
      // Populate image
      if (json.value && json.value[0].contentUrl) {
        
        populateImage(json);
      setError(null); // Reset error state if successful
    } else {
      setError("Image not found, please try again");
    }
    } catch (error) {
      console.log(error);
    }
  };
    return (
      <>
        <form onSubmit={handleSubmit}>
        <div class="input-group mb-3"> 
        <input
          type="text" 
          placeholder= "What image are you looking for?"
          className="form-control small-text"
          value={promptInput}
          onChange={handleInputChange}></input>
        <button className="input-group-text custom-color">search</button>
        </div>
      </form>
      </>
    )
  }