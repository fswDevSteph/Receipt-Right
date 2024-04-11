// import { useState } from 'react';
import './HomePage.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';

// import { Link } from 'react-router-dom';


function HomePage() {


    return (
        <div>
            <HeaderNav />

            {/* Code here */}
            <h2>Settings Page</h2>
            <ul>Should Have:
                <li>How to use diagram </li>
                <li>Icon = Page for navigation</li>

            </ul>

            <FooterNav />
        </div>
    )
}

export default HomePage;