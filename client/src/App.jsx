import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from "uuid";
import Home from './components/Home.jsx';
import Favorites from './components/Favorites.jsx';



function App() {



  return (
    <>
    <Home/>
    <Favorites/>
    </>
  )
}

export default App

