import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import Home from './components/Home';
import Favorites from './components/Favorites';
import Page404 from './components/Page404';
import Navbar from './components/Navbar';
import FavGallery from './components/FavGallery';




function App() {



  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favorites' element={<Favorites/>}>
      <Route path='/favorites/:sentenceId' element={<FavGallery/>}/>
      </Route>
      <Route path='*' element={<Page404/>}/>
    </Routes>
    </>
  )
}

export default App

