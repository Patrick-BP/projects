

export default function Header(){
    return(
        <>
        <header className="d-flex space-between flex-center flex-middle">
            <div className="nav-links d-flex flex-center flex-middle">
              <a href="/">
                <h2 className="logo logo-text red-color f-s-28 m-r-25">NETFLIX</h2>
                <h2 className="second-logo-text red-color f-s-28">N</h2>
              </a>
              <a href="browse.html" className="nav-item home">Home</a>
              <a href="tvshow.html" className="nav-item">TV Show</a>
              <a href="movies.html" className="nav-item">Movies</a>
              <a href="latest.html" className="nav-item latest">Latest</a>
              <a href="mylist.html" className="nav-item">My List</a>
            </div>
            <div className="righticons d-flex flex-end flex-middle">
              <a href="search.html"><img src="/images/icons/search.svg" alt="search icon" /></a>
              <div className="dropdown notification">
                <img src="/images/icons/notification.svg" alt="notificatio icon" />
                <div className="dropdown-content">
                  <a href="/" className="profile-item d-flex flex-middle">
                    <img src="/images/icons/user2.png" alt="user profile icon" className="user-icon" />
                    <span>You have new notification from <span>User 123</span></span>
                  </a>
                  <a href="/" className="profile-item d-flex flex-middle">
                    <img src="/images/icons/user1.png" alt="user profile icon" className="user-icon" />
                    <span>You have new notification from <span>User 123</span></span>
                  </a>
                  <a href="/" className="profile-item d-flex flex-middle">
                    <img src="/images/icons/user4.png" alt="user profile icon" className="user-icon" />
                    <span>You have new notification from <span>User 123</span></span>
                  </a>
                  <a href="/" className="profile-item d-flex flex-middle">
                    <img src="/images/icons/user3.png" alt="user profile icon" className="user-icon" />
                    <span>You have new notification from <span>User 123</span></span>
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <img src="/images/icons/user-image-green.png" alt="user profile icon" className="user-icon" /> <span className="profile-arrow"></span>

                <div className="dropdown-content">
                  <div className="profile-links">
                    <a href="/" className="profile-item d-flex flex-middle">
                      <img src="/images/icons/user1.png" alt="user profile icon" className="user-icon" />
                      <span>Rajesh</span>
                    </a>
                    <a href="/" className="profile-item d-flex flex-middle">
                      <img src="/images/icons/user2.png" alt="user profile icon" className="user-icon" />
                      <span>Karan</span>
                    </a>
                    <a href="/" className="profile-item d-flex flex-middle">
                      <img src="/images/icons/user3.png" alt="user profile icon" className="user-icon" />
                      <span>Pappy</span>
                    </a>
                    <a href="/" className="profile-item d-flex flex-middle" style={{marginBottom: "13px"}}>
                      <img src="/images/icons/user4.png" alt="user profile icon" className="user-icon" />
                      <span>Denny</span>
                    </a>
                    <a href="/" className="profile-item last" >Manage Profiles</a>
                  </div>
                  <div className="line"></div>
                  <div className="links d-flex direction-column">
                    <a href="user-profile/home.html">Account</a>
                    <a href="/">Help Center</a>
                    <a href="/">Sign Out of Netflix</a>
                  </div>

                </div>
              </div>

            </div>
          </header>
        </>
    )
}