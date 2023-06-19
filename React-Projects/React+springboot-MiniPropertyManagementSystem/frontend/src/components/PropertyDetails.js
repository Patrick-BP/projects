function PropertyDetails() {
    return ( 
        <>
        <h1>Property Details</h1>

        <div className="container">
    <div className="property-details">
      <div className="property-images">
        <img src="property1.jpg" alt="Property Image 1"/>
        <img src="property2.jpg" alt="Property Image 2"/>
        <img src="property3.jpg" alt="Property Image 3" />
      </div>

      <div className="property-info">
        <h2>Beautiful Home</h2>
        <p>Price: $500,000</p>
        <p>Location: City, Country</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
        </>
     );
}

export default PropertyDetails;