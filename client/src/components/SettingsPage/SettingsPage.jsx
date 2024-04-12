// import { useState } from 'react';
import './SettingsPage.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';
import ContactUs from '../ContactUs/ContactUs';


function SettingsPage() {


    return (
        <div>
            <HeaderNav />
            <h1>Settings Page</h1>

            <ContactUs />

            <FooterNav />
        </div>
    )
}

export default SettingsPage;