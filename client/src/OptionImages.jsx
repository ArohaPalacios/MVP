import { useState } from "react";

export default function OptionImages({image}){

const [index, setIndex] = useState(0)

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

    return(
      <>
        <button onClick={()=>handleIndex("prev")}>‹‹</button>
        <img
          className='optionImages'
          src=  {image.value[index].contentUrl}/>
        <button onClick={()=>handleIndex("next")}>››</button>
        </>
    )
  }