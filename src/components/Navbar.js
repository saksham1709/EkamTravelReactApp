import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleclick = () =>{
        setClick(!click);
    }
    return ( 
        <nav>
            <div className="navbar">
                <div className="nav-name">
                    <Link to="/"><h1>Ekam Travels</h1></Link>
                </div>
                <div className="nav-toggle">
                    <i className={ click?'fas fa-times':'fas fa-bars' } onClick={handleclick}></i>
                </div>
                <div className="nav-links">
                    <ul className={ click ? 'link-list active':'link-list'}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        {/* <li>
                            <Link to="/">Cards</Link>
                        </li> */}
                        <li className="list-button">
                            <Link to="/contact" className="link-button">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-button">
                    <Link to="/contact"> Contact Us</Link>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;