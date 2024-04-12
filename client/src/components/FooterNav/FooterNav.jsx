import './FooterNav.css';
import addIcon from '../assets/icons/addIcon2.png'; //@importing icon variable from icons path
// import personIcon from '../assets/icons/personIcon.png';
import home from '../assets/icons/homeIcon.png';
import personIcon from '../assets/icons/personIcon.png';
import settingsIcon from '../assets/icons/settingsIcon.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

function FooterNav() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary nav__border">
                <Container>
                    <Navbar.Brand  >
                        <div className='nav__bar__left'>
                            <Link to="/ContactUs">
                                <img src={personIcon} alt="ContactUs image icon" width="30" height="24" />
                                <p className='small_font'>Contact Us</p>
                            </Link>
                        </div>

                        <div className='nav__bar__right'>
                            <Link to="/ContactUs">
                                <img src={settingsIcon} alt="add image icon" width="30" height="24" />
                                <p className='small_font'>Settings</p>
                            </Link>
                        </div>
                        <div >
                            <Link to="/HomePage">
                                <img src={home} alt="home icon" width="30" height="24" />
                                <p className='small_font'>Home</p>
                            </Link>
                        </div>

                    </Navbar.Brand>

                </Container >
            </Navbar >
        </>
    );
}

export default FooterNav;

