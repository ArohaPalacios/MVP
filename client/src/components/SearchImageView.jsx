import React from "react";

//Get the user's input and send it to parent(Home) to handle it.
//Get images from external API and send to parent (Home) to handle it.
export default function SearchImageView({populateImage, setPromptInput, promptInput, setError}) {
  
    //URL of the API, I send the input as params.
    const url = `https://images-search1.p.rapidapi.com/search?q=${promptInput}`;
    const apiKey = '8352e5b3a5msh8b1b653715e9095p1e8357jsncb4ca27a0aa8'
    
    //Fetch's second argument. The API proposed this syntaxis in the web: it creates a variable with the second argument we need to pass to the fetch method, so that the code looks cleaner.
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        "Content-Type": "application/json",
        'X-RapidAPI-Host': 'images-search1.p.rapidapi.com'
      }}
    
    //populate input variable with the prompt the user enters in input field.
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
       
  //retrieve image data and call the function populateImage. This sends the image to the parent (Home) so that it can populate the optionImages state variable.
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
        <div className="input-group mb-3"> 
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