import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const back = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
      const forward = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };

    return(
        <div className="main">
        <ArrowBackIosIcon onClick={back} style={{ color: "white" }} className="button"/>
        <h1  className="title">{images[currentImageIndex].title} </h1>
        <img src={images[currentImageIndex].img} alt="" />
        <h2  className="subtitle">{images[currentImageIndex].subtitle}</h2>
        <ArrowForwardIosIcon onClick={forward} style={{ color: "white" }} className="button"/>
        </div>
        )
}

export default Carousel;