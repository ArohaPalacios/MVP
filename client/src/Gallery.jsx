import { useState } from "react";

export default function({gallery}) {

    return (
        <div className="gallery_container">
        {gallery.map((image, index)=> (
            <div 
            key= {index}
            className="img_container">
                <img
                    className='optionImages'
                    src={image.contentUrl}/>
            <i className="fa-regular fa-trash-can"></i>
            </div>
        )) 
        }
        </div>
    )
}

