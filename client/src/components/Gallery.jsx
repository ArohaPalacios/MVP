import React from "react";

//display Home gallery. 
//Hold the "trash" button, "clear gallery" button and "Add to favorites" button, that will trigger the action in parent Home page.
export default function({gallery, deleteFromGallery, handleClearGallery, handleAddToFavorites}) {
    //"Trash" button will trigger the parent's (Home) deleteFromGallery. Deletes one image from gallery.
    function deleteImage (id) {
        deleteFromGallery(id)
    }
    //"clear gallery" button triggers the parent's (Home) handleClearGallery. Deletes all gallery.
    function clearGallery() {
        handleClearGallery()
    }
    //"Add to favorites" button triggers the parent's handleAddToFavorites at Home component.
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

