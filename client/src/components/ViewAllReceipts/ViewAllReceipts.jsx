
import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav.jsx';
import FooterNav from '../FooterNav/FooterNav.jsx';
import FilterButton from '../FilterButton/FilterButton.jsx'; // Import the FilterButton component
import './ViewAllReceipts.css';
function ViewAllReceipts() {

    return (
        <div>
            <HeaderNav />

            <h1 >View All Receipts</h1>
            <div style={{ display: "flex" }}>
                <FilterButton style={{ marginLeft: "auto" }} />
            </div>
            <section>
                <div>
                    <h2>Receipts</h2>
                    <p>View all Receipts Page</p>

                </div>
            </section >
            {/* {loading ? <h1>Loading...</h1> : <ReceiptsTable receipts={receipts} />} */}
            < FooterNav />
        </div >
    );
}
export default ViewAllReceipts;
