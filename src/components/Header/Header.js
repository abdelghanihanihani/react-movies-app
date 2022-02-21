import React from 'react';
import './Header.css'
import profile from '../../assets/profile.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">MovieApp</div>
            </Link>
            <div className="profile-img">
                <img src={profile} alt="profile"/>
            </div>
        </div>
    );
};

export default Header;
