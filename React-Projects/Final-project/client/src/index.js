import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import MovieDetailsPage from './pages/MovieDetailsPage';
import LoginPage from './pages/LoginPage';

// import Nav from './Routes/Nav'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <Nav/> */}
  <Routes>
    <Route path ='/' element={<LoginPage />}></Route>
  <Route path ='home' element={<App />}></Route>
    <Route path ='movie/:movieId' element={<MovieDetailsPage />}></Route>
  
      {/* <Route path ='/users/:id' element={<User  />}></Route>
    <Route path ='/users/edit/:id' element={<EditUser/>}></Route> */}
   
    
    <Route extract path ='*' element={<><div className='container fs-1 text-center'>PAGE NOT FOUND </div><Link to="/users"><p className='container fs-5 text-center'>Home</p></Link></>}></Route>
  </Routes>
  </BrowserRouter>
    
);
