import './Homepage.css'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Property from '../components/Property';
import { Outlet } from "react-router-dom";
function Homepage() {
    return ( 
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
     );
}

export default Homepage;