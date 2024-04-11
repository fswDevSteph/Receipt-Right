
import React, { useEffect, useState } from 'react';
import HeaderNav from '../HeaderNav/HeaderNav.jsx';
import FooterNav from '../FooterNav/FooterNav.jsx';
import FilterButton from '../FilterButton/FilterButton.jsx'; // Import the FilterButton component
import './ViewAllReceipts.css';
import axios from 'axios';
function ViewAllReceipts() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/api/images`)
            .then(response => {
                console.log(response);
                console.log(response.data);
                const imageElements = response.data
                    .map(resource => (
                        <img className="receipt_img" height="400em" width="200em" src={resource.secure_url} alt={resource.public_id} key={resource.public_id} />
                    ));
                setImages(imageElements);
            })
            .catch(error => {
                console.log('Error fetching images', error);
            });
    }, [])
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
                    liView all Receipts Page</p>
                {images}
        </div>
            </section >
        {/* {loading ? <h1>Loading...</h1> : <ReceiptsTable receipts={receipts} />} */ }
        < FooterNav />
        </div >
    );
}
export default ViewAllReceipts;
