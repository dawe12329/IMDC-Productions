import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Home from './Home';
import Services from './Services/Services';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Home />
        </>
      } />

      <Route path= "services" element = {<Services></Services>}></Route>
    </Routes></BrowserRouter>


  </React.StrictMode>
);
