import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Trending from './components/Trending';
import Popular from './components/Popular';
import Search from './components/Search';
import MovieDetails from './components/MovieDetails';
import { Navbar } from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="popular" element={<Popular />} />
          <Route path="trending" element={<Trending />} />
          <Route path="search" element={<Search />} />  
        </Route>        
        <Route path="/movies/:movieId" element={<MovieDetails />} />  
      </Routes>      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
