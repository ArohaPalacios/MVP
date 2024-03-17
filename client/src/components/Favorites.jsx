import { useEffect, useState } from "react";

export default function Favorites() {

    const [sentences, setSentences] = useState([])
    const [showFAvorite, setShowFavorite] = useState(false)
    const [favoriteImages, setFavoriteImages] = useState([])

     //trigger getStudents when loading the page
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

    function getSentenceImages (sentenceId) {
     const id = sentenceId
        //contact api
        fetch(`/api/images/${id}`)
        //parse api response to js
        .then(response => response.json())
        //populate favoriteImages state variable with the retrieved data.
        .then(sentenceImages => {
            setFavoriteImages(sentenceImages);
        })
        .catch(error => {
        console.log(error);
        });
    }


    return (
        <>
        <h4>My favorite sentences</h4>
        <ul>
        {sentences.length? sentences.map((sentence)=> {
           return( 
           <li key={sentence.id}>{sentence.sentence}
           <button onClick={()=>getSentenceImages(sentence.id)}>show</button>
            </li>)  
        }): null}
        </ul>
        <div>
               {favoriteImages.length ? (favoriteImages.map((image)=> {
                return <img 
                    key= {image.id}
                    src={image.URL}/>
               })) : null
               } 
        </div>
        </>
    )
}