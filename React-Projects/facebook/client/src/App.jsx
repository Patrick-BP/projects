import Main from './pages/Main'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profil from './pages/Profil';
import Friends from './pages/Friends';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home/>} />
          <Route path='friends' element={<Friends/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
