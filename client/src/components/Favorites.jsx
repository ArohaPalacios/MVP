import { useEffect, useState } from "react";
import React from "react";
import{Link} from "react-router-dom"
import{useParams, Outlet} from "react-router-dom"

export default function Favorites() {

    const [sentences, setSentences] = useState([])
    const [sentenceId, setSentenceId] = useState (null)
    // const [favoriteImages, setFavoriteImages] = useState([])

     //trigger getSentences whenever sentences change
  useEffect(() => {
    getSentences();
  }, []);

    function getSentences() {
   //contact api
   fetch("/api/sentences")
   //parse api response to js
   .then(response => response.json())
   //populate students state variable with the retrieved data.
   .then(sentences => {
     setSentences(sentences);
   })
   .catch(error => {
     console.log(error);
   });
    }


    return (
        <>
        <h4>My favorite sentences</h4>
        <hr/>
        {sentences.length? sentences.map((sentence)=> {
           return( 
           <div key={sentence.id}>
            <Link to={`/favorites/${sentence.id}`}>
              {sentence.sentence}
            </Link>
            </div>)  
        }): null}
        <hr/>
        <Outlet/>
        </>
    )
}