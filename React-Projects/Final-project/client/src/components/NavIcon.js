import { Link } from "react-router-dom";
function Nav() {
    return ( 
        <>
        <div className="menu-wrppr icon-only">
            <div className="menu-title">Menu</div>
            <ul>
            <li><Link to="/" className="sideitem"><i class="fa-solid fa-house-chimney css-vubbuv icon"></i></Link></li>
              <li><a href="#" className="sideitem"><i className="fa-solid fa-magnifying-glass css-vubbuv icon"></i></a></li>
              <li><a href="#" className="sideitem"><i className="fa-solid fa-heart css-vubbuv icon" ></i></a></li>
            </ul>
          </div>
          <div className="menu-wrppr icon-only">
            <div className="menu-title">Other</div>
            <ul>
            <li><a href="#" className="sideitem"><i class="fa-solid fa-rectangle-list css-vubbuv icon"></i></a></li>
              <li><a href="#" className="sideitem"><i className="fa-solid fa-gear css-vubbuv icon"></i></a></li>
              <li><a href="#" className="sideitem"><i className="fa-solid fa-right-from-bracket css-vubbuv icon"></i></a></li>
            </ul>
          </div>
        </>
     );
}

export default Nav;