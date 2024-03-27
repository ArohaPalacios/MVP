import React from "react";
import{useState, useEffect} from "react";
import{useParams} from "react-router-dom"

export default function FavGallery () {
    const [favoriteImages, setFavoriteImages] = useState([])
    const {sentenceId} = useParams ()

    function getSentenceImages () {
        //contact DB
        fetch(`/api/images/${sentenceId}`)
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

    //Thanks to front end routes, when I click a message the URL changes to the corresponding sentences_id. 
    //trigger getSentenceImages every time this clicked id changes.
    //If I let it as an empty array, it works only the first time you click a sentence, but not anymore.
    useEffect(() => {
        getSentenceImages(); 
      }, [sentenceId]);
return (
<div className="gallery_container">
    {favoriteImages.length ? (favoriteImages.map((image)=> {
     return <img 
         key= {image.id}
         className='galleryImages'
         src={image.URL}/>
    })) : null
    } 
</div>
)
}