import React from "react";
import{useState, useEffect} from "react";
import{useParams} from "react-router-dom"

export default function FavGallery () {
    const [favoriteImages, setFavoriteImages] = useState([])
    const [selectedSentence, setSelectedSentence] = useState ()
    const {sentenceId} = useParams ()


    function getSentenceImages () {
        // const id = sentenceId
           //contact api
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

    useEffect(() => {
        getSentenceImages();
        
      }, [sentenceId]);
return (
<>


<div className="gallery_container">
    {favoriteImages.length ? (favoriteImages.map((image)=> {
     return <img 
         key= {image.id}
         className='galleryImages'
         src={image.URL}/>
    })) : null
    } 
</div>
</>
)
}