import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import Main from './pages/Main';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Bookings from './pages/Admin/Bookings';
import Rooms from './pages/Admin/Rooms';
import AddRoom from './pages/Admin/AddRoom';
import Users from './pages/Admin/Users';

function App() {
  const [isLogin, setIsLogin] = useState(true)
  return (
   <Router>
      <Routes>

        <Route path='/' element={<Main/>}>
        <Route index element={isLogin ? <LandingPage/> : <Login/>}/>
        <Route path='landindpage' element={isLogin ?  <LandingPage/> : <Login/>}/>
        <Route path='login' element={isLogin ? <LandingPage/> : <Login/>}/>
        <Route path='home' element={isLogin ? <Home/> : <Login/>}/>
        <Route path='admin' element={isLogin ? <Admin/> : <Login/>}>
          <Route index element={<Bookings/>}/>
          <Route path='bookings' element={<Bookings/>}/>
          <Route path='rooms' element={ <Rooms/>}/>
          <Route path='addroom' element={<AddRoom/>}/>
          <Route path='Users' element={<Users/>}/>
        </Route>
        <Route path="*" element={isLogin ? <LandingPage/> : <Login/>}/>
        </Route>
       
      </Routes>
   </Router>
  );
}

export default App;
