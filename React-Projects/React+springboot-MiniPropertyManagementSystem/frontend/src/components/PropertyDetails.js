import { Link, useLocation } from "react-router-dom";

function PropertyDetails() {
  const location = useLocation();
  const {state} = location;
  
  const address = `${state.address.street}, ${state.address.city}, ${state.address.state}, ${state.address.zipcode}`;

  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;


    return ( 
        <>

<div className="inside-banner">
  <div className="container"> 
    <span className="pull-right"><Link to='/'>Home</Link> / Buy</span>
    {state && <h2><b>{state.numberOfBeds}</b> rooms and <b>{state.numberOfBathrooms}</b> Bathrooms <b>{state.size}</b> sqft apartment</h2>}
</div>
</div>



<div className="container">
<div className="properties-listing spacer">

<div className="row">
<div className="col-lg-3 col-sm-4 hidden-xs">

<div className="hot-properties hidden-xs">
<h4>Hot Properties</h4>
<div className="row">
                <div className="col-lg-4 col-sm-5"><img src="images/properties/4.jpg" className="img-responsive img-circle" alt="properties"/></div>
                <div className="col-lg-8 col-sm-7">
                  <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                  <p className="price">$300,000</p> </div>
              </div>
<div className="row">
                <div className="col-lg-4 col-sm-5"><img src="images/properties/1.jpg" className="img-responsive img-circle" alt="properties"/></div>
                <div className="col-lg-8 col-sm-7">
                  <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                  <p className="price">$300,000</p> </div>
              </div>

<div className="row">
                <div className="col-lg-4 col-sm-5"><img src="images/properties/3.jpg" className="img-responsive img-circle" alt="properties"/></div>
                <div className="col-lg-8 col-sm-7">
                  <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                  <p className="price">$300,000</p> </div>
              </div>

<div className="row">
                <div className="col-lg-4 col-sm-5"><img src="images/properties/2.jpg" className="img-responsive img-circle" alt="properties"/></div>
                <div className="col-lg-8 col-sm-7">
                  <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                  <p className="price">$300,000</p> </div>
              </div>

</div>



<div className="advertisement">
  <h4>Advertisements</h4>
  <img src="/images/properties/2.jpg" className="img-responsive" alt="advertisement"/>

</div>

</div>

<div className="col-lg-9 col-sm-8 ">

<div className="row">
  <div className="col-lg-8">
  <div className="property-images">

  </div>
  
  <img src="/images/properties/2.jpg" className="img-responsive" alt="advertisement"/>
  <div className="spacer"><h4><span className="glyphicon glyphicon-th-list"></span> Properties Detail</h4>
  {state && <p>{state.description}</p>}

  </div>
  <div><h4><span className="glyphicon glyphicon-map-marker"></span> Location</h4>
<div className="well"><iframe width="100%" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={src}></iframe></div>
  </div>

  </div>
  <div className="col-lg-4">
  <div className="col-lg-12  col-sm-6">
<div className="property-info">
{state && <p className="price">{state.price.toLocaleString('en-US',{style:'currency', currency:'USD'})}</p>}
{state && <p className="area"><span className="glyphicon glyphicon-map-marker"></span>{state.address.street}  {state.address.city}  {state.address.state} {state.address.zipcode}</p>}
  
  <div className="profile">
  <span className="glyphicon glyphicon-user"></span> Agent Details
  <p>John Parker<br/>009 229 2929</p>
  </div>
</div>

    <h6><span className="glyphicon glyphicon-home"></span> Availabilty</h6>
    <div className="listing-detail">
    <span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>

</div>
<div className="col-lg-12 col-sm-6 ">
<div className="enquiry">
  <h6><span className="glyphicon glyphicon-envelope"></span> Post Enquiry</h6>
  <form role="form">
                <input type="text" className="form-control" placeholder="Full Name"/>
                <input type="text" className="form-control" placeholder="you@yourdomain.com"/>
                <input type="text" className="form-control" placeholder="your number"/>
                <textarea rows="6" className="form-control" placeholder="Whats on your mind?"></textarea>
      <button type="submit" className="btn btn-primary" name="Submit">Send Message</button>
      </form>
 </div>         
</div>
  </div>
</div>
</div>
</div>
</div>
</div>
        </>
     );
}

export default PropertyDetails;