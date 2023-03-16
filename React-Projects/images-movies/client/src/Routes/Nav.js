
import {Link} from 'react-router-dom'
function Nav() {
    return ( 
       


<> 




        <section className="ftco-section">
		
		
		
		<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container-fluid">
	    
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="fa fa-bars"></span> Menu
	      </button>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav m-auto">
	        	<li className="nav-item "><Link to='/users' className="nav-link">Home</Link></li>
	    
	        	<li className="nav-item"><Link to='/courses' className="nav-link">Courses</Link></li>
				
	          
	        </ul>
	      </div>
	    </div>
	  </nav>
   

	</section>
</>
     );
}

export default Nav;