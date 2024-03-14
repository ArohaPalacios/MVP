import { useState } from "react";

export default function({gallery, deleteFromGallery}) {

    function deleteImage (idx) {
        deleteFromGallery(idx)
    }

    return (
        <div className="gallery_container">
        {gallery.map((image, idx)=> (
            <div 
            key= {idx}
            className="img_container">
                <img
                    className='optionImages'
                    src={image.contentUrl}/>
            <i 
                onClick={()=>deleteImage(idx)}
                className="fa-regular fa-trash-can"></i>
            </div>
        )) 
        }
        </div>
    )
}

