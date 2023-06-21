import Property from "../components/Property";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
axios.defaults.baseURL = 'http://localhost:8088/api/v1';

function PropertiesList() {
    const [propertyList, setPropertyList] = useState([]);
    const [visibleItems, setVisibleItems] = useState(6);

    const loadMoreItems = () => {
        // Increment the number of visible items
        setVisibleItems(prevVisibleItems => prevVisibleItems + 6);
      };

    const fetchProperties = async ( )=>{
      const response = await axios.get('/properties');
      setPropertyList(response.data)
    }
    
    useEffect(()=>{
      fetchProperties();
    }, [])
    return ( 
        <>
        
<div class="inside-banner">
  <div class="container"> 
    
    <h2>More Properties</h2>
</div>
</div>

          <div className="container">
              <div className="topImg">
             
              </div>
             
    <div className="property-grid">

{propertyList.length > 0 ? propertyList.slice(0, visibleItems).map(property=>{
  return <Property key={property.id} property={property}/>
}) : <p><b>No Properties Yet</b></p>}
      
      

    </div>
    
  </div>
  <div className="loadmore">
    {visibleItems < propertyList.length && (
        <button className="btn btn-primary" onClick={loadMoreItems}>Load More Properties</button>
      )}
</div>
        </>
     );
}

export default PropertiesList;