import { useEffect, useState } from "react";
import React from "react";
import{Link} from "react-router-dom"
import{Outlet} from "react-router-dom"

export default function Favorites() {

    const [sentences, setSentences] = useState([])

  //trigger getSentences when loading page
  useEffect(() => {
    getSentences();
  }, []);

    function getSentences() {
   //contact DB
   fetch("/api/sentences")
   //parse DB response to js
   .then(response => response.json())
   //populate sentences state variable with the retrieved data.
   .then(sentences => {
     setSentences(sentences);
   })
   .catch(error => {
     console.log(error);
   });
    }


    return (
        <>
        <h4>My favorite picto-messages</h4>
        <div className="row">
          <div className="col col-12 col-md-4">
            {sentences.length? sentences.map((sentence)=> {
              return( 
              <div 
                className="sentences-container"
                key={sentence.id}>
                <Link 
                  className="small-text"
                  to={`/favorites/${sentence.id}`}>
                  {sentence.sentence}
                </Link>
                <hr/>
                </div>)  
            }): null}
          </div>
          <div className="col">
            <Outlet/>
          </div>
        </div>
        </>
    )
}