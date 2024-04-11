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
            <p>Export Receipts body</p>
            <ul>Should have:
                <li>Receipts filter</li>
                <li>Export button</li>
                <li>Export to CVS function</li>
            </ul>
            <ViewAllReceipts />

            <FooterNav />
        </div >
    )
}

export default Export;