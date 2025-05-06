import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <div className="header_social">
          <a
            href="https://www.instagram.com/imdcproductions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
      <div className='header_center'><h1>IMDC Productions</h1>
        <div className='routes'>
          <Link to="">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="">About</Link>
          <Link to="">Book a consultation</Link>
          <Link to="">Contacts</Link></div>

      </div>
      <div className="header_actions">
        <button className="icon_btn" aria-label="Login">
          <FaUserCircle />
          <span>Login</span>
        </button>

        <button className="icon_btn" aria-label="Cart">
          <span>Work with us</span>
        </button>
      </div>
    </div>
  );
}