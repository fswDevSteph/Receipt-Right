import './HeaderNav.css';
import addIcon from '../assets/icons/addIcon2.png'; //@importing icon variable from icons path
import personIcon from '../assets/icons/personIcon.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function HeaderNav() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary nav__border">
                <Container>
                    <Navbar.Brand href="#home" >

                        <div className='nav__bar__right'>
                            <img src={addIcon} alt="add image icon" width="30" height="24" />
                            <img src={personIcon} alt="profile image icon" width="30" height="24" />
                        </div>
                        <div className='nav__bar__mid'>
                            <h2 src={addIcon} alt="add image icon" width="30" height="24" >Receipt Right</h2>
                        </div>
                    </Navbar.Brand>

                </Container >
            </Navbar >
        </>
    );
}

export default HeaderNav;

