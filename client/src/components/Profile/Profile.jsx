import { Link } from 'react-router-dom';
import './Profile.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';

function Profile() {
    return (
        <>
            <HeaderNav />
            <h2>Settings Page</h2>
            <p>change email</p>
            <p>change password</p>
            <p>delete account</p>
            <FooterNav />
        </>
    );
}

export default Profile;


