import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import LatestMeals from './components/latestMeals';
import PopularMeals from './components/PopularMeals';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <LatestMeals/>
     <PopularMeals/>
     <Footer/>
     <Test/>
     
    </div>
  );
}

export default App;
