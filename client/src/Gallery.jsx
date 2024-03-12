import { useState } from "react";

export default function({gallery}) {

    return (
        <>
        {gallery.map((image, index)=> (
                <img
                    className='optionImages'
                    key= {index}
                    src={image.contentUrl}/> 
        )) 
        }
        </>
    )
}

