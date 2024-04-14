// import { useState } from 'react';
import './SettingsPage.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';
import pexels6 from '../assets/images/pexels6.jpg';
import { Link } from 'react-router-dom';


function SettingsPage() {
    const handleEmailChange = (event) => {
        event.preventDefault();
        // Handle email change
    };

    const handlePasswordChange = (event) => {
        event.preventDefault();
        // Handle password change
    };

    const handleAccountDeletion = (event) => {
        event.preventDefault();
        // Handle account deletion
    };

    return (
        <>
            <HeaderNav />
            <div className="grid_container">
                <div className="settings_page_img">
                    <img src={pexels6} alt="Couple playing tug of war" className='tug_of_war_image' />
                </div>
                <div className="settings_page_form">
                    <h2>Settings Page</h2>
                    <div className='form_container'>
                        <form onSubmit={handleEmailChange}>
                            <label>
                                New Email:
                                <input type="email" name="newEmail" />
                            </label>
                            <input type="submit" value="Change Email" />
                        </form>
                        <form onSubmit={handlePasswordChange}>
                            <label>
                                New Password:
                                <input type="password" name="newPassword" />
                            </label>
                            <input type="submit" value="Change Password" />
                        </form>
                        <form onSubmit={handleAccountDeletion}>
                            <input type="submit" value="Delete Account" />
                        </form>
                    </div>
                </div>
            </div>
            <FooterNav />
        </>
    );
}

export default SettingsPage;