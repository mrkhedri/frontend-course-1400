import React, {useRef} from "react";

import "./style.scss"

function ShowImg(src) {
    const zoomoutRef = useRef();

    const zoomInImg = () => {
        zoomoutRef.current.style.display = "flex";
    }

    const zoomOutImg = () => {
        zoomoutRef.current.style.display = "none";
    }

    return (
        <div>
            <img className="pro-img" src={src.src} alt="product-image" onClick={zoomInImg}/>
            <div ref={zoomoutRef} className="zoom" onClick={zoomOutImg}>
                <img  className="zoomImg" src={src.src} alt="product-image"/>
            </div>
        </div>
    )
}

export default ShowImg;