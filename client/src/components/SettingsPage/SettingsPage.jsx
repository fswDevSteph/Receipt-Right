// import { useState } from 'react';
import './SettingsPage.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';


function SettingsPage() {


    return (
        <div>
            <HeaderNav />
            <h2>Settings Page</h2>
            {/* Code here */}
            <p>SettingsPage Body</p>
            <p>change email </p>
            <p>change password</p>
            <p>delete account</p>

            <FooterNav />
        </div>
    )
}

export default SettingsPage;