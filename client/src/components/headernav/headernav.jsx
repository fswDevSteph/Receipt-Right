import './HeaderNav.css';

import addIcon from '../assets/icons/addIcon2.png'; //@importing icon variable from icons path
import personIcon from '../assets/icons/personIcon.png';
import home from '../assets/icons/homeIcon.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

function HeaderNav() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary nav__border">
                <Container>
                    <Navbar.Brand as="div" >

                        <div className='nav__bar__right'>
                            <Link to="/CreateReceipt">
                                <img src={addIcon} alt="add image icon" width="30" height="24" />
                            </Link>
                        </div>
                        <div className='nav__bar__left'>
                            <Link to="/Profile">
                                <img src={personIcon} alt="profile image icon" width="30" height="24" />
                            </Link>
                        </div>


                        {/* <div className='nav__bar__mid'>
                            <Link to="/CreateReceipt">
                                <h2 src={addIcon} alt="add image icon" width="30" height="24" >Receipt Right</h2>
                            </Link>
                        </div> */}

                        {/* <div className='nav__bar__mid'>
                            <Link to="/HomePage">
                                <img src={home} alt="add image icon" width="30" height="24" />
                                <h2>Receipt Right</h2>
                            </Link>
                        </div> */}
                        <div className='nav__bar__mid'>
                            <Link to="/HomePage">
                                <img src={home} alt="add image icon" width="30" height="24" />
                            </Link>
                        </div>


                    </Navbar.Brand>

                </Container >
            </Navbar >
        </>
    );
}

export default HeaderNav;

