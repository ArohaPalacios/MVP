import { useState } from "react";


export default function({gallery, deleteFromGallery, handleClearGallery}) {

    function deleteImage (id) {
        deleteFromGallery(id)
    }

    function clearGallery() {
        handleClearGallery()
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
        <button onClick={clearGallery}>CLEAR GALLERY</button>
        {/* <button onClick={handleAddToFavorites}></button> */}
            </>
    )
}

