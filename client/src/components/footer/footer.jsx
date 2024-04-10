import './footer.css';

import dashboardIcon from '../assets/icons/dashboardIcon.png';
import exportIcon from '../assets/icons/exportIcon.png';
import settingsIcon from '../assets/icons/settingsIcon.png';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Footernav() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary nav__border">
                <Container>
                    <Navbar.Brand href="#home" >
                        <div className='nav__bar__left'>
                            <img className='' src={exportIcon} alt="export image icon" width="30" height="24" />
                        </div>
                        <div className='nav__bar__right'>
                            <img src={settingsIcon} alt="export image icon" width="30" height="24" />
                        </div>
                        <div className='nav__bar__mid'>
                            <img src={dashboardIcon} alt="dashboard image icon" width="30" height="24" />
                        </div>
                    </Navbar.Brand>

                </Container >
            </Navbar >
        </>
    );
}

export default Footernav;

