
import { useState } from 'react';
import './ContactUs.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import FooterNav from '../FooterNav/FooterNav';

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
            <h1>Contact Us</h1><br /><br /><br />

            <h2>Stephanie Perroni</h2>
            li<a href='https://github.com/fswDevSteph' target='_blank'>GitHub</a>      |       <a href='https://stephanie-perroni-colorful-portfolio.netlify.app/' target='_blank'  >Portfolio</a></p>

            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <FooterNav />
        </div >
    )
}
// comment for commit
export default ContactUs;