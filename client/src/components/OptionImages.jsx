import React from "react";
import { useState } from "react";


export default function OptionImages({images, addToGallery}){

const [index, setIndex] = useState(0)

//In the return statement I'm showing the url of the element that matches the index.
//When "next" button clicked, increase index by 1. The limit is the length of the array that holds my data.
  function handleIndex(action) {

        if (action === "next") {
            if (index < images.value.length) {
                setIndex(index + 1)
            }
        //When "prev" button clicked, decrease index by 1. The limit is 0.
        } else if (action === "prev") {
            if (index > 0) {
                setIndex(index - 1)
            }
        }
    }

    function sendToGallery(image) {
        addToGallery(image)
    }

    return(

       <>
        <div className="container col">
        <button 
            type="button" 
            className="btn btn-light btn-outline-dark custom-button prevNext-button custom-color"
            onClick={()=>handleIndex("prev")}>‹‹</button>
        {images ? (
        <img
          className='optionImages'
          src=  {images.value[index].contentUrl}/>) : null}
        <button 
            type="button" 
            class="btn btn-light btn-outline-dark custom-button prevNext-button custom-color"
            onClick={()=>handleIndex("next")}>››</button>
        </div>
        <button 
            type="button" 
            className="btn btn-light btn-outline-dark custom-button custom-color"
            onClick={()=> sendToGallery(images.value[index])}>I like it! </button>
        </>
    )
  }