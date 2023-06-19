import Homepage from './pages/Homepage'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';

function App() {
  return (
    <>
    <Routes>
      <Route path='/'  default element={<Homepage/>}>
          <Route index  element={<Welcome/>}/>
      </Route>
    </Routes>
    
    </>
  );
}

export default App;
