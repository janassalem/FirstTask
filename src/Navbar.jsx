import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);


    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return(
        <nav className="navbar">
            <div className="hamburger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </div>
            <div className="brand-logo">

                <NavLink to="/" onClick={handleLinkClick}>
                    <img src={"./src/assets/Group 3476.png"} alt="logo" />
                </NavLink>
            </div>

            <div className={`container-fluid ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="list-inline">

                    <li><NavLink to="/overview" onClick={handleLinkClick}>Overview</NavLink></li>
                    <li><NavLink to="/reports" onClick={handleLinkClick}>Reports</NavLink></li>
                    <li><NavLink to="/diseases" onClick={handleLinkClick}>Diseases</NavLink></li>
                    <li><NavLink to="/users" onClick={handleLinkClick}>User Management</NavLink></li>
                    <li><NavLink to="/log-activity" onClick={handleLinkClick}>Log Activity</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end">
                <button>
                    <div className="setting">
                        <IoSettingsOutline className="icon" />
                        <span>setting</span>
                    </div>
                </button>

                <button>
                    <IoIosNotificationsOutline className="icon" />
                </button>

                <button>
                    <BsPerson className="icon" />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;