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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
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
                className="bi bi-trash"></i>
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

