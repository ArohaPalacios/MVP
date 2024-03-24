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
                    className='galleryImages mb-1'
                    src={image.contentUrl}/>
            <i 
                onClick={()=>deleteImage(image.id)}
                className="fa-regular fa-trash-can"></i>
            </div>
        )) 
        }
        </div>
        <div className= "gallery-buttons-div">
        <button 
            className= "btn btn-light btn-outline-dark btn-sm custom-button gallery-button custom-color"
            onClick={clearGallery}>Clear Gallery</button>
        <button 
            className= "btn btn-light btn-outline-dark btn-sm custom-button custom-color"
            onClick={addToFavorites}>Add to favorites</button>
        </div>
    </>
    )
}

