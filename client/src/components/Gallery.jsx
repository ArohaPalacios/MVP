import React from "react";

export default function({gallery, deleteFromGallery, handleClearGallery, handleAddToFavorites}) {

    function deleteImage (id) {
        deleteFromGallery(id)
    }

    function clearGallery() {
        handleClearGallery()
    }

    function addToFavorites() {
        handleAddToFavorites()
    }

    return (
        <>
        <div className="gallery_container">
        {gallery.map((image)=> (
            <div 
            key= {image.id}
            className="img_container">
                <img
                    className='galleryImages'
                    src={image.contentUrl}/>
            <i 
                onClick={()=>deleteImage(image.id)}
                className="fa-regular fa-trash-can"></i>
            </div>
           
        )) 
        }
        </div>
        <button 
            className= "btn btn-light btn-outline-dark custom-button gallery-button"
            onClick={clearGallery}>Clear Gallery</button>
        <button 
            className= "btn btn-light btn-outline-dark custom-button"
            onClick={addToFavorites}>Add to favorites</button>
            </>
    )
}

