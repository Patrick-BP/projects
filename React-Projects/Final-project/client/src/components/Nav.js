import { Link,useNavigate } from "react-router-dom";
function Nav() {
const navigate = useNavigate()
  function logoutFunc(){
    localStorage.removeItem('accessToken')
    navigate('/')
  }
    return ( 
        <>
        <div className="menu-wrppr">
            <div className="menu-title">Menu</div>
            <ul>
              <li><Link to="/" className="sideitem"><i class="fa-solid fa-house-chimney css-vubbuv icon"></i><span>Home</span></Link></li>
              <li><a href="#" className="sideitem"><i class="fa-solid fa-magnifying-glass css-vubbuv icon"></i><span>Search</span></a></li>
              <li><a href="#" className="sideitem"><i class="fa-solid fa-heart css-vubbuv icon" ></i><span>Favorite</span></a></li>
            </ul>
          </div>
          <div className="menu-wrppr">
            <div className="menu-title">Other</div>
            <ul>
              <li><a href="#" className="sideitem"><i class="fa-solid fa-rectangle-list css-vubbuv icon"></i><span>PlayList</span></a></li>
              <li><a href="#" className="sideitem"><i class="fa-solid fa-gear css-vubbuv icon"></i><span>Setting</span></a></li>
              <li><span onClick={logoutFunc} className="sideitem"><i class="fa-solid fa-right-from-bracket css-vubbuv icon"></i><span>LogOut</span></span></li>
            </ul>
          </div>
        </>
     );
}

export default Nav;