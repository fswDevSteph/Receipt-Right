// import { useState } from 'react';
import React from 'react';
import './HomePage.css';
import pexels2 from '../assets/icons/pexels2.jpg';
// import logo from '../assets/icons/receipt_right_logo.png';

import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';

// import { Link } from 'react-router-dom';


function HomePage() {


    return (
        <div>
            <HeaderNav />
            <section className='hero'>
                <h1>Receipt Right,</h1>
                <h2>Save your time, not your receipts.</h2>



                <img src={pexels2} alt="Happy Friends" className='happy_friends_image' />

            </section>


            <FooterNav />
        </div>
    )
}

export default HomePage;