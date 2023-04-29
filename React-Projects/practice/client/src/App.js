
import './App.css';
import CrypoDetails from './pages/CrypoDetails';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
 
    <Router>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='coindetails' element={<CrypoDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
