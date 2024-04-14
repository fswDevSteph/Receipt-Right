// import { useState } from 'react';
import './ContactUs.css';
import HeaderNav from '../HeaderNav/HeaderNav.jsx';
import FooterNav from '../FooterNav/FooterNav.jsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    }

    return (
        <div className="contactus">
            <HeaderNav />

            <h2>Contact:</h2>
            <h2>Stephanie Perroni</h2>

            <p><a href='https://github.com/fswDevSteph' target='_blank' rel="noopener noreferrer">GitHub</a></p>

            <p><a href='https://stephanie-perroni-colorful-portfolio.netlify.app/' target='_blank' rel="noopener noreferrer">Portfolio</a></p>


            <h2>Send a Message</h2>
            <div className="form_container ">
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <FooterNav />
        </div >
    )
}
// comment for commit
export default ContactUs;