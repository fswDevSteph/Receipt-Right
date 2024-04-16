import { useState } from 'react';
import './Export.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';
import ViewAllReceipts from '../ViewAllReceipts/ViewAllReceipts';


function Export() {


    return (
        <div>
            <HeaderNav />

            <ViewAllReceipts />

            <FooterNav />
        </div >
    )
}

export default Export;