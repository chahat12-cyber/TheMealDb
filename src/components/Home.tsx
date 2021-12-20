import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import CardView from "./CardView";
import BannerImage from "../assets/pizza.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";

// user can Search here for food
function Home() {
  const [recipes, setrecipes] = useState([]);
  const [search, setsearch] = useState("");
  const [displayData, setdisplayData] = useState(false);
  const [buttonClicked, setbuttonClicked] = useState(true);
  //Fetching APIs from here
  const updateSearch = (event: any) => {
    setsearch(event.target.value);
    console.log(search);
  };
  const getRecipes = async (val: any) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
    );
    const meal = await response.json();
    console.log(meal);
    setrecipes(meal.meals);
  };
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  useEffect(() => {
    const urlParams: any = new URLSearchParams(window.location.search);
    for (const [key, value] of urlParams) {
      console.log(value);
      getRecipes(value);
    }
  }, []);

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="searchBar">
        <form method="GET">
          <TextField
            placeholder="Search Food"
            value={search}
            name="food"
            onChange={updateSearch}
          />
          <Button type="submit">
            <Search fontSize="small" />
          </Button>
        </form>
      </div>

      {width > 550 ? (
        <div className="showData">
          {recipes.map((e: any) => {
            return <CardView title={e.strMeal} image={e.strMealThumb} />;
          })}
        </div>
      ) : (
        <Carousel>
          {recipes.map((e: any) => {
            return <CardView title={e.strMeal} image={e.strMealThumb} />;
          })}
        </Carousel>
      )}
    </div>
  );
}

export default Home;
// useEffect(()=> {
//   const urlParams:any= new URLSearchParams(window.location.search);
//   for(const[key,value]of urlParams){
//     console.log(value);
//     setrecipes(value);
//   }
// },[])
// const getRecipes = async () => {

//   window.location.href = `?search=${search}`;
//   const urlParams:any= new URLSearchParams(window.location.search);
//  const params= Object.fromEntries(urlParams.entries());
//  console.log(params.search);
//  setsearch(params.search);

//   const response = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
//   );

//   setrecipes(data.meals);

//   console.log(data.meals);
//   setdisplayData(true);
//   setsearch("");
//   setbuttonClicked(false);
// };
