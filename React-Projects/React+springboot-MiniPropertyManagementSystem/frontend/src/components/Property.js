import Moment from "react-moment";
import './Property.css'
import { useNavigate } from "react-router-dom";
function Property({property}) {
    const {price, description, numberOfBeds, numberOfBathrooms,size, createdAt } = property;
    const {street, city, state, zipcode} = property.address
    
    const navigate = useNavigate()
    return ( 
        <>
        <div className="property" onClick={()=>navigate(`/propertydetails/${property.id}`, {state:property})}>
            <div className="topimg">
                {createdAt && <div className="daysAgo"><b>{<Moment fromNow>{createdAt}</Moment>}</b></div>}
                <div className="heart"><span className="material-symbols-outlined">favorite</span></div>

            </div>
            
            <img src="/images/properties/2.jpg" alt="Property 2"/>
            <h4> <b>{price.toLocaleString('en-US',{style:'currency', currency:'USD'})}</b></h4>
            <b>{numberOfBeds}</b>  bds |  <b>{numberOfBathrooms}</b> ba | <b>{size}</b> sqft - House for sale
            {street && <p> <b>{street}</b>,  <b>{city}</b>,  <b>{state}</b>, <b>{zipcode}</b></p>}
           
        </div>
        
        </>
     );
}

export default Property;