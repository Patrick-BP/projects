import Homepage from './pages/Homepage'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import PropertyDetails from './components/PropertyDetails';
import PropertiesList from './components/PropertiesList';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path='/'  element={<Homepage/>}>
          <Route index  element={<Welcome/>}/>
          <Route path='/propertydetails/:id'  element={<PropertyDetails/>}/>
          <Route path='/properties'  element={<PropertiesList/>}/>
          
      </Route>
      <Route path='dashboard'  element={<Dashboard/>}>
          <Route index  element={<Welcome/>}/>
          
      </Route>
    </Routes>
    
    </>
  );
}

export default App;
