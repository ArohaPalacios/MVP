import { useState } from "react";

export default function({gallery, deleteFromGallery}) {

    function deleteImage (id) {
        deleteFromGallery(id)
    }

    return (
        <div className="gallery_container">
        {gallery.map((image)=> (
            <div 
            key= {image.id}
            className="img_container">
                <img
                    className='optionImages'
                    src={image.contentUrl}/>
            <i 
                onClick={()=>deleteImage(image.id)}
                className="fa-regular fa-trash-can"></i>
            </div>
        )) 
        }
        </div>
    )
}

