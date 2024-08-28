
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import AppsIcon from '@mui/icons-material/Apps';

const NavBar = () => {
    return (
        <div className='header'>
            <div className="headerLeft">
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <span> Home </span>
                </Link>
                <Link to="/movies" style={{ textDecoration: "none" }}>
                    <span> Movies </span>
                </Link>
                <Link to="/tv-shows" style={{ textDecoration: "none" }}>
                    <span> TVShows </span>
                </Link>
                <Link to="/premium" style={{ textDecoration: "none" }}>
                    <span> Premium </span>
                </Link>
                <Link to="/news" style={{ textDecoration: "none" }}>
                    <span> News </span>
                </Link>
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <span>
                        <AppsIcon
                            style={{
                                height: '24px', // Adjusted for better visibility
                                margin: '0 15px', // Adjust spacing around icon
                                cursor: 'pointer',
                            }}

                        />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
