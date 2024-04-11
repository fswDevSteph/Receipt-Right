import { Link } from 'react-router-dom';
import './Profile.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';

function Profile() {
    return (
        <>
            <HeaderNav />
            <h2>Profile Page</h2>
            <li>change email</li>
            <li>change password</li >
            <li>delete account</li>
            <FooterNav />
        </>
    );
}

export default Profile;


