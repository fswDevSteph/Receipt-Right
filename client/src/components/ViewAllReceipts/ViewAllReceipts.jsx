
import React, { useEffect, useState } from 'react';
import HeaderNav from '../HeaderNav/HeaderNav.jsx';
import FooterNav from '../FooterNav/FooterNav.jsx';
import FilterButton from '../FilterButton/FilterButton.jsx'; // Import the FilterButton component
import './ViewAllReceipts.css';
import axios from 'axios';
import { Cloudinary } from 'cloudinary-core';
// import { set } from 'mongoose';


function ViewAllReceipts() {

    let publicId;
    const [images, setImages] = useState([]);
    const [tag, setTag] = useState('receipt');

    const cloudinary = new Cloudinary({
        cloud_name: 'dohtfj5zs',
    });

    const exportPhoto = (e) => {
        e.preventDefault()
        // console.log(this)
        console.log(e.target.previousElementSibling.id)
        publicId = e.target.id;
        // const publicId = 'my-photo-public-id';
        const url = cloudinary.url(publicId);

        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                // Save the blob to a file
                const newBlob = new Blob([blob]);

                // Create a link element
                const link = document.createElement('a');

                // Create a URL for the link
                link.href = URL.createObjectURL(newBlob);

                // Set the download attribute of the link
                link.setAttribute('download', 'image.jpg');

                // Append the link to the body
                document.body.appendChild(link);

                // Programmatically click the link to trigger the download
                link.click();

                // Remove the link when done
                document.body.removeChild(link);
            });
    };
    // function getImages() {
    //     useEffect(() => {
    //         axios.get(`http://localhost:3001/api/images`)
    //             .then(response => {
    //                 // url = response.public_id
    //                 console.log(response);
    //                 console.log(response.data);
    //                 const imageElements = response.data
    //                     .map(resource => ([
    //                         <img onClick={exportPhoto} className="receipt_img" height="400em" width="200em" src={resource.secure_url} alt={resource.public_id} key={resource.public_id} />,
    //                         // <button className="export_button" onClick={exportPhoto} id={resource.public_id}>Export</button>
    //                     ]
    //                     ));
    //                 setImages(imageElements);
    //             })
    //             .catch(error => {
    //                 console.log('Error fetching images', error);
    //             });
    //     }, []);
    // }
    // getImages();
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen); // Toggle the state to show/hide the dropdown
    };

    // Function to handle item click in the dropdown
    const handleItemClick = (choice) => {
        console.log(`${choice}`);
        setTag(`${choice}`);
        setIsOpen(false); // Close the dropdown after selecting a choice
        document.querySelector('.view_all_receipts_title').textContent = `${choice} Receipts`; // Change the title to the selected choice "____ receipts"
    };
    // function getImagesByTag() {
    // setTag('Groceries');
    useEffect(() => {
        console.log(tag)
        axios.get(`http://localhost:3001/api/images/${tag}`)
            .then(response => {
                // url = response.public_id
                console.log(response);
                console.log(response.data);
                const imageElements = response.data
                    .map(resource => ([
                        <img onClick={exportPhoto} className="receipt_img" height="400em" width="200em" src={resource.secure_url} alt={resource.public_id} key={resource.public_id} />,
                        // <button className="export_button" onClick={exportPhoto} id={resource.public_id}>Export</button>
                    ]
                    ));
                setImages(imageElements);
            })
            .catch(error => {
                console.log('Error fetching images', error);
            });
    }, [tag]);
    // }
    // getImagesByTag('Groceries');

    return (
        <div>




            <section>
                <div>
                    <h1 className='view_all_receipts_title'>All Receipts</h1>
                    <h3 ><span className='required'>(</span>Click the receipt to download<span className='required'>)</span></h3>
                    <div style={{ display: "flex" }}>

                        {/* <FilterButton style={{ marginLeft: "auto" }} /> */}
                        <div style={{ margin: "auto" }}>
                            {/* Button to toggle dropdown */}
                            <button onClick={toggleDropdown} >Filter</button>

                            {/* Dropdown menu for filter button */}
                            {isOpen && (
                                <div className="dropdown ">
                                    <button onClick={() => window.location.reload()}>View All Receipts</button>
                                    <button onClick={() => handleItemClick('Groceries')}>Groceries</button>
                                    <button onClick={() => handleItemClick('Education')}>Education</button>
                                    <button onClick={() => handleItemClick('Medical')}>Medical</button>
                                    <button onClick={() => handleItemClick('Business')}>Business</button>
                                </div>
                            )
                            }
                        </div >
                    </div>
                    {images}


                </div>
            </section >
            {/* {loading ? <h1>Loading...</h1> : <ReceiptsTable receipts={receipts} />} */}

        </div >
    );
}
export default ViewAllReceipts;
