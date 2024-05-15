// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Head.css';

const Head = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="head">
                <div className="logo">
                    <h1>VS TRADERs</h1>
                    
                </div>
                {/* <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button> */}
                <nav className={`nav-menu ${isSidebarOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link className='li' to={'/'}><span>Home</span></Link></li>
                        <li><Link className='li' to={'/Fish_seafoods'}><span>SeaMeats</span></Link></li>
                        <li><Link className='li' to={'/Mutton'}><span>Mutton</span></Link></li>
                        <li><Link className='li' to={'/Poultry'}><span>chicken</span></Link></li>
                        <li><Link className='li' to={'/Contact'}><span>Contact</span></Link></li>
                        <li><Link className='li' to={'/Admin'}><span>Admin</span></Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Head;
