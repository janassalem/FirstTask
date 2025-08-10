import React from 'react';
import './NavBar.css';
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    return(
        <nav className="navbar">
            <div className="hamburger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </div>
            <div className="brand-logo">
                <img src={"./src/assets/Group 3476.png"} alt="logo"  />

            </div>

            <div className={`container-fluid ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="list-inline">
                    <li>Overview</li>
                    <li>Reports</li>
                    <li>Diseases</li>
                    <li>User Management</li>
                    <li>Log Activity</li>
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

    ) ;

}


export default Navbar;