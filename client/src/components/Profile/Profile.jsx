import { Link } from 'react-router-dom';
import './Profile.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';

function Profile() {
    return (
        <>
            <HeaderNav />
            <p>Profile Body</p>
            <FooterNav />
        </>
    );
}

export default Profile;


