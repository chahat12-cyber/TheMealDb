import React, {useState, useEffect} from "react";
import Card from '@mui/material/Card';
import '../styles/CardView.css';
// import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";


type MealData = {
  image: any;
  title: string;
};

function CardView(props: MealData) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }; 
  const [width, setWidth] = useState(window.innerWidth);
  
   useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
});

const updateWidth= () => {
    setWidth(window.innerWidth);
};
  
  
   return (
     <div>
       {width > 460 ?
    <Card style={{backgroundColor: "#FFFFF"}}>
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${props.image})` }}> </div>
      <h1> {props.title} </h1>
    </div>
    </Card>
   : null}
    {width< 460 ?
        <Slider {...settings}>
        <Card style={{backgroundColor: "#FFFFF"}}>
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${props.image})` }}> </div>
      <h1> {props.title} </h1>
      </div>
      </Card>
    
      </Slider>
: null}
    </div>
       
  );
}

export default CardView;
