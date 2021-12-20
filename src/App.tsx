import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import LatestMeals from './components/latestMeals';
import PopularMeals from './components/PopularMeals';


function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <LatestMeals/>
     <PopularMeals/>
     <Footer/>
    </div>
  );
}

export default App;
