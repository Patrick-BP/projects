import Main from './pages/Main'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profil from './pages/Profil';
import Friends from './pages/Friends';
import Home from './pages/Home';
import Login from './pages/Login';
import {UserContextProvider} from './context/loginContext';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <UserContextProvider>
    <Toaster  position="top-center"  reverseOrder={false}/>
    <Router>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home/>} />
          <Route path='friends' element={<Friends/>} />
        </Route>
      </Routes>
    </Router>
    </UserContextProvider>
  );
}

export default App;
