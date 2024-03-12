import { useState } from "react";

export default function({gallery}) {

    return (
        <div className="gallery_container">
        {gallery.map((image, index)=> (
            <div className="img_container">
                <img
                    className='optionImages'
                    key= {index}
                    src={image.contentUrl}/>
            <button 
                key= {index + "btn"}
                className="dlt_btn">DLT</button>
            </div>
        )) 
        }
        </div>
    )
}

