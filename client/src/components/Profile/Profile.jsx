import { Link } from 'react-router-dom';
import './ContactUs.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';

function ContactUs() {
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
            <FooterNav />
        </>
    );
}

export default ContactUs;


