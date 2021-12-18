import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import CardView from "./CardView";
import BannerImage from "../assets/pizza.jpeg";

// user can Search here for food
function Home() {
  const [recipes, setrecipes] = useState([]);
  const [search, setsearch] = useState("");
  const [displayData, setdisplayData] = useState(false);
  const [buttonClicked, setbuttonClicked] = useState(true);

  const getRecipes = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await response.json();
    setrecipes(data.meals);
    console.log(data.meals);
    setdisplayData(true);
    setsearch("");
    setbuttonClicked(false);
  };
  useEffect(() => {}, []);

  const updateSearch = (event: any) => {
    setsearch(event.target.value);
    console.log(search);
  };
  useEffect(() => {
    const data1:any = window.localStorage.getItem("The-MealDb");
      setrecipes(JSON.parse(data1));
  },[]);

  useEffect(() => {
    window.localStorage.setItem("The-MealDb", JSON.stringify(recipes));
  });

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <input
          type="text"
          onChange={updateSearch}
          value={search}
          placeholder="Search food"
        />
        <br />
        
        <button onClick={getRecipes} className="btn btn-danger">
          Search
        </button>
        
        {buttonClicked ? 
        <div className="show">
          {displayData
            ? recipes.map((recipe: any) => {
                return (
                  <CardView
                    title={recipe.strMeal}
                    image={recipe.strMealThumb}
                  />
                );
              })
             
              :null}
       </div> : null }
        
        
        </div>
        
      <div className="show">
  
      {recipes.map((recipe: any) => {
                return (
                  <CardView
                    title={recipe.strMeal}
                    image={recipe.strMealThumb}
                  />
                );
              })}
      </div>
      
    </div>
  );
}

export default Home;
