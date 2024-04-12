import { useState } from 'react';
import './Export.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';
import ViewAllReceipts from '../ViewAllReceipts/ViewAllReceipts';

// import { Link } from 'react-router-dom';


function Export() {


    return (
        <div>
            <HeaderNav />

            {/* <ul>NEEDS:
                <li>Receipts filter</li>

            </ul> */}
            <ViewAllReceipts />

            <FooterNav />
        </div >
    )
}

export default Export;