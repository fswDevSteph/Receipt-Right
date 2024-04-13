// import { useState } from 'react';
import React from 'react';
import './HomePage.css';
// import pexels1 from '../assets/images/pexels1.jpg';  friends around table
// import pexels2 from '../assets/images/pexels2.jpg'; family - chistmasy
// import pexels3 from '../assets/images/pexels3.jpg'; lady jumping in red sack
// import pexels4 from '../assets/images/pexels4.jpg'; tug of war black couple navy shirts
import pexels5 from '../assets/images/pexels5.jpg';
// import pexels6 from '../assets/images/pexels6.jpg'; interacial couple red shirts man in blackground
// import logo from '../assets/icons/receipt_right_logo.png';

import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';

import { Link } from 'react-router-dom';


function HomePage() {


    return (
        <div>
            <HeaderNav />
            <div className="grid_container">
                {/* <section> */}
                <div className="branding_message">
                    <h1>Receipt Right,</h1>
                    <h2>
                        Live a little more, worry a little less.
                    </h2>
                    <p>Save your time, not your receipts.</p>
                    <Link to="/CreateReceipt">
                        <button className='start_now_btn'>Start Free Now!</button>
                    </Link>
                </div>

                <div className="branding_section_image">
                    <img src={pexels5} alt="Happy Friends" className='happy_friends_image' />
                </div>

                {/* </section> */}
            </div>

            <div className="addRecSection">

            </div>


            <FooterNav />
        </div>
    )
}

export default HomePage;