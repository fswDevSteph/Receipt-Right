// import { useState } from 'react';
import React from 'react';
// import './HomePage.css ';
import logo from '../assets/icons/receipt_right_logo.png';

import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';

// import { Link } from 'react-router-dom';


function HomePage() {


    return (
        <div>
            <HeaderNav />

            {/* Code here */}
            <h2>Home Page</h2>
            <img src={logo} alt="logo" />


            <FooterNav />
        </div>
    )
}

export default HomePage;