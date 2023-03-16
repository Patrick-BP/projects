import React from 'react';
import {Container} from '@material-ui/core'
import Home from './Components/Home/Home'
import './App.css';

import NavBar from './Components/NavBar/NavBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import {GoogleOAuthProvider} from '@react-oauth/google'

function App() {
 
  return (
    <GoogleOAuthProvider clientId='127530739313-p0f9hrdvk6bl4h64imvohlc8og852k1u.apps.googleusercontent.com'>
    <BrowserRouter>
    <Container maxidth='lg'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
     
   </Container>
    </BrowserRouter>
   </GoogleOAuthProvider>
  );
}

export default App;
