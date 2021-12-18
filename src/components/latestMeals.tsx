import { useState, useEffect } from "react";
import CardView from "./CardView";
import Loader from "react-loader-spinner";
import "../styles/LatestMeals.css";
import img from '../assets/img1.jpg';

// Fetching only Latest Meals Here.

function LatestMeals() {
  const [isLoading, setisLoading] = useState(true);
  const [mealData, setmealData] = useState([]);
  
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setisLoading(false);
        setmealData(data.meals);
      });
  }, []);

  //If Loading is true ---> Loading bar appears

  if (isLoading) {
    <div>
     <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>;
  }

  return (
    <div className="menu" style={{backgroundImage:`url(${img})`,

     }}>
      <h1 className="menuTitle">Latest Meals</h1>
      <div className="menuList" >
        {mealData.map((element: any) => {
          return (
            <CardView
              key={element.idMeal}
              image={element.strMealThumb}
              title={element.strMeal}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LatestMeals;
