import { Link } from "react-router-dom";
import Property from "../components/Property";
import { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8088/api/v1'

function Welcome() {
  const [propertyList, setPropertyList] = useState([]);
  
const fetchProperties = async ( )=>{
  const response = await axios.get('/properties');
  setPropertyList(response.data)
}

useEffect(()=>{
  fetchProperties();
}, [])
    return ( 
        <>
             <div className="container">
              <div className="topImg">
              {propertyList.length > 0 && <div className="listofpropertiesLink"><Link to="properties">List of Properties</Link></div>  }
             
              </div>
             
    <div className="property-grid">

{propertyList.length > 0 ? propertyList.slice(-6).reverse().map(property=>{
  return <Property key={property.id} property={property}/>
}) : <p><b>No Properties Yet</b></p>}
      
      

    </div>
  </div>
        </>
     );
}

export default Welcome;