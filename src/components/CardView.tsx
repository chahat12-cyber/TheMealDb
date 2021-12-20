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
 
   return (
     <div>
       <Card className="foodCard">
         <img src={props.image}/>
         <p>{props.title}</p>

       </Card>
    
  

    </div>
       
  );
}

export default CardView;
