import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_RECEIPT } from '../../utils/mutations';
import './CreateReceipt.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';
import Camera from '../Camera/Camera';
import Upload from '../Upload/Upload';
import addIcon from '../assets/icons/addIcon2.png';
import cameraIcon from '../assets/icons/cameraIcon.png'
import { Link } from 'react-router-dom'
import ViewAllReceipts from '../ViewAllReceipts/ViewAllReceipts';

function CreateReceipt() {
    const [receiptName, setReceiptName] = useState('');
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
                    receiptName,
                    receiptDate,
                    receiptAmount,
                    receiptCategory,
                    receiptNotes
                },
            });

            setReceiptName('');
            setReceiptDate('');
            setReceiptAmount('');
            setReceiptCategory('');
            setReceiptNotes('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'receiptName') {
            setReceiptName(value);
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

    return (
        <div>
            <HeaderNav />
            <p>Create Receipt Body</p>
            <ViewAllReceipts />
            <Camera />

            <img className='camera__icon__align' src={cameraIcon} alt="camera image icon" width="300" height="240" />

            <Link to="/CreateReceipt">
                <img className='add__receipt__icon__align' src={addIcon} alt="add image icon" width="30" height="24" />
            </Link>

            <form onSubmit={handleFormSubmit}>
                <label>Receipt Name:</label>
                <input type="text" id="receiptName" name="receiptName" onChange={handleChange}></input>
                <label>Receipt Date:</label>
                <input type="date" id="receiptDate" name="receiptDate" onChange={handleChange}></input>
                <label>Receipt Amount:</label>
                <input type="number" id="receiptAmount" name="receiptAmount" onChange={handleChange}></input>
                <label>Receipt Category:</label>
                <input type="text" id="receiptCategory" name="receiptCategory" onChange={handleChange}></input>
                <label>Receipt Notes:</label>
                <textarea id="receiptNotes" name="receiptNotes" onChange={handleChange}></textarea>
                <input type="submit" value="Submit"></input>
            </form>

            <Upload />

            <FooterNav />
        </div >
    )
}

export default CreateReceipt;