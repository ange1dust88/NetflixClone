import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import avatar from '../assets/avatar.png';
import '../nav.css';

export default function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`nav ${show ? 'nav__black' : ''}`}>
            <img src={logo} 
                className='nav__logo' 
                alt='Logo' />
            <img src={avatar} 
                className='nav__avatar' 
                alt='Avatar' />
        </div>
    );
}
