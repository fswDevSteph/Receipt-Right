import './HeaderNav.css';

import addIcon from '../assets/icons/addIcon2.png'; //@importing icon variable from icons path
import exportIcon from '../assets/icons/exportIcon.png';
import home from '../assets/icons/homeIcon.png';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

function HeaderNav() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary nav__border">
                <Container>
                    <Navbar.Brand as="div" >
                        <div className='nav__bar__left'>
                            <Link to="/CreateReceipt">
                                <img src={addIcon} alt="add image icon" width="30" height="24" />
                                <p className='small_font'>Add Receipt</p>
                            </Link>
                        </div>
                        <div className='nav__bar__right'>
                            <Link to="/Export">
                                <img className='' src={exportIcon} alt="export image icon" width="30" height="24" />
                                <p className='small_font'>Download Receipt</p>
                            </Link>
                        </div>
                        <div >
                            <Link to="/HomePage">
                                <img src={home} alt="add image icon" width="30" height="24" />
                                <p className='small_font'>Home</p>
                            </Link>
                        </div>


                    </Navbar.Brand>

                </Container >
            </Navbar >
        </>
    );
}

export default HeaderNav;

