function Footer() {

    return ( 
        <>
        <div className="footer">

<div className="container">
<div className="row">
            <div className="col-lg-3 col-sm-3">
                   <h4>Information</h4>
                   <ul className="row">
                <li className="col-lg-12 col-sm-12 col-xs-3"><a href="about.php">About</a></li>
                <li className="col-lg-12 col-sm-12 col-xs-3"><a href="agents.php">Agents</a></li>         
                <li className="col-lg-12 col-sm-12 col-xs-3"><a href="blog.php">Blog</a></li>
                <li className="col-lg-12 col-sm-12 col-xs-3"><a href="contact.php">Contact</a></li>
              </ul>
            </div>
            
            <div className="col-lg-3 col-sm-3">
                    <h4>Newsletter</h4>
                    <p>Get notified about the latest properties in our marketplace.</p>
                    <form className="form-inline" role="form">
                            <input type="text" placeholder="Enter Your email address" className="form-control"/>
                                <button className="btn btn-success" type="button">Notify Me!</button></form>
            </div>
            
            <div className="col-lg-3 col-sm-3">
                    <h4>Follow us</h4>
                    <a href="#"><img src="images/facebook.png" alt="facebook"/></a>
                    <a href="#"><img src="images/twitter.png" alt="twitter"/></a>
                    <a href="#"><img src="images/linkedin.png" alt="linkedin"/></a>
                    <a href="#"><img src="images/instagram.png" alt="instagram"/></a>
            </div>

             <div className="col-lg-3 col-sm-3">
                    <h4>Contact us</h4>
                    <p><b>Bootstrap Realestate Inc.</b><br/>
<span className="glyphicon glyphicon-map-marker"></span> 8290 Walk Street, Australia <br/>
<span className="glyphicon glyphicon-envelope"></span> hello@bootstrapreal.com<br/>
<span className="glyphicon glyphicon-earphone"></span> (123) 456-7890</p>
            </div>
        </div>
<p className="copyright">Copyright 2013. All rights reserved.	</p>

</div></div>

<div id="loginpop" className="modal fade">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="row">
        <div className="col-sm-6 login">
        <h4>Login</h4>
          <form className="" role="form">
        <div className="form-group">
          <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox"/> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-success">Sign in</button>
      </form>          
        </div>
        <div className="col-sm-6">
          <h4>New User Sign Up</h4>
          <p>Join today and get updated with all the properties deal happening around.</p>
          <button type="submit" className="btn btn-info"  >Join Now</button>
        </div>

      </div>
    </div>
  </div>
</div>

        </>
     );
}

export default Footer;