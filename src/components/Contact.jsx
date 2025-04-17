import React from "react";
import './Contact.css';

// ✅ Import icons from assets
import instaIcon from '../assets/insta.png';
import emailIcon from '../assets/insta.png';
import linkedinIcon from '../assets/insta.png';
import githubIcon from '../assets/insta.png';
// import instaIcon from '../assets/insta.png';
import facebookIcon from '../assets/insta.png';
import twitterIcon from '../assets/insta.png';

const socials = [
    {
        name: "Email",
        url: "mailto:your@email.com",
        icon: emailIcon
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourprofile",
        icon: linkedinIcon
    },
    {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: githubIcon
    },
    {
        name: "Instagram",
        url: "https://instagram.com/yourusername",
        icon: instaIcon
    },
    {
        name: "Facebook",
        url: "https://facebook.com/yourusername",
        icon: facebookIcon
    },
    {
        name: "Twitter",
        url: "https://twitter.com/yourusername",
        icon: twitterIcon
    }
];

const Contact = () => {
    return (
        <div className="contact-section">
            <h2 className="contact-title">Get in Touch</h2>

            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>

            <div className="contact-socials">
                {socials.map((social, index) => (
                    <a href={social.url} target="_blank" rel="noreferrer" key={index} title={social.name}>
                        <img src={social.icon} alt={social.name} className="social-icon" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Contact;
