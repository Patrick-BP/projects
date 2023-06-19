function Header() {
    return ( 
        <>
      
<div className="navbar-wrapper">

        <div className="navbar-inverse" role="navigation">
          <div className="container">
            <div className="navbar-header">


              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

            </div>


            
            <div className="navbar-collapse  collapse">
              <ul className="nav navbar-nav navbar-right">
               <li className="active"><a href="index.php">Home</a></li>
                <li><a href="about.php">About</a></li>
                <li><a href="agents.php">Agents</a></li>         
                <li><a href="blog.php">Blog</a></li>
                <li><a href="contact.php">Contact</a></li>
              </ul>
            </div>
            

          </div>
        </div>

    </div>





<div className="container">


<div className="header">
<a href="index.php"><img src="images/logo.png" alt="Realestate"/></a>

              <ul className="pull-right">
                <li><a href="buysalerent.php">Buy</a></li>
                <li><a href="buysalerent.php">Sale</a></li>         
                <li><a href="buysalerent.php">Rent</a></li>
              </ul>
</div>

</div>
        </>
     );
}

export default Header;