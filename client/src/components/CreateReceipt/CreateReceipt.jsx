import React, { useRef, useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_RECEIPT } from '../../utils/mutations';
import './CreateReceipt.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';
// import Camera from '../Camera/Camera';

import pexels7 from '../assets/images/pexels7.jpg';  /*friends around table*/
// import cameraIcon from '../assets/icons/cameraIcon.png';
import { Link } from 'react-router-dom';
// import ViewAllReceipts from '../ViewAllReceipts/ViewAllReceipts';
import CloudinaryUploader from '../CloudinaryUploader/CloudinaryUploader';

function CreateReceipt() {
    const [receiptEmail, setReceiptEmail] = useState('');
    const [receiptDate, setReceiptDate] = useState('');
    const [receiptAmount, setReceiptAmount] = useState('');
    const [receiptCategory, setReceiptCategory] = useState('');
    const [receiptNotes, setReceiptNotes] = useState('');

    const [addReceipt, { error }] = useMutation(ADD_RECEIPT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addReceipt({
                variables: {
                    receiptEmail,
                    receiptDate,
                    receiptAmount,
                    receiptCategory,
                    receiptNotes
                },
            });

            setReceiptEmail(document.querySelector('#receiptEmail')?.value || '');
            setReceiptDate('');
            setReceiptAmount('');
            setReceiptCategory(document.querySelector('#receiptEmail')?.value || '');
            setReceiptNotes('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'receiptEmail') {
            setReceiptEmail(value);
        }
        if (name === 'receiptDate') {
            setReceiptDate(value);
        }
        if (name === 'receiptAmount') {
            setReceiptAmount(value);
        }
        if (name === 'receiptCategory') {
            setReceiptCategory(value);
        }
        if (name === 'receiptNotes') {
            setReceiptNotes(value);
        }
    };
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dohtfj5zs',
            uploadPreset: 'fhblvqoq',
            apiKey: '588842527859546',
            apiSecret: '-WihU7kL-S4JYThwqLF_aGcWBKw',
            tags: [
                'receipt',
                receiptCategory, // Adding various tags to the cloudinary image uploads for the filter functionality
                receiptEmail,   // and this is for users to find only their uploaded receipts
            ],
            environmentVariable: 'CLOUDINARY_URL=cloudinary://588842527859546:-WihU7kL-S4JYThwqLF_aGcWBKw@dohtfj5zs'
        }, function (error, result) {
            if (error) {
                // The upload failed, you can show an error message
                alert('Failed to upload image: ' + error.message);
            } else if (result.event === 'success') {
                // The upload was successful, you can show a success message
                alert('Image uploaded successfully');
            };
        })
    }, [receiptCategory, receiptEmail]);
    return (

        <div>
            <HeaderNav />
            <CloudinaryUploader />
            <div className="grid_container">


                <div className="create_receipt_image">
                    <img src={pexels7} alt="uploading a receipt" className='create_receipt_img' />
                </div>

                <form className="create_receipt_form" onSubmit={handleFormSubmit}>

                    <label><span className="required" >*</span>Receipt Category:</label>
                    <select type="text" id="receiptCategory" name="receiptCategory" required onChange={handleChange}>
                        <option value="">Select a Category</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Education">Education</option>
                        <option value="Medical">Medical</option>
                        <option value="Business">Business</option>

                    </select>
                    <label><span className="required" >*</span>Your Email:</label>
                    <input type="email" id="receiptEmail" name="receiptEmail" required onChange={handleChange}></input>
                    <label>Receipt Notes:</label>
                    <textarea id="receiptNotes" name="receiptNotes" onChange={handleChange}></textarea>
                    <div>
                        <h1>Take or Upload Receipt Image</h1>

                        <button disabled={!receiptCategory || !receiptEmail} onClick={() => { // diabled={!receiptCategory} ,means the button is disabled if the receiptCategory is empty
                            widgetRef.current.open(); //
                        }}>Take or Upload Image</button>
                    </div>
                </form>


            </div>
            <FooterNav />
        </div >
    )
}

export default CreateReceipt;