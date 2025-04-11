
"use client";

// components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from "/public/assets/images/logo.svg";
import Search from "/public/assets/images/search_icon.svg";
import User from "/public/assets/images/user_icon.svg";

import Link from 'next/link';

const Navbar = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  
  // Toggle the offcanvas menu
  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  // Close the offcanvas menu
  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-2">
        <div className="container">
          {/* Hamburger Menu */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleOffcanvas}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Logo */}
          <Link href="/" className="navbar-brand mx-auto mx-lg-0">
            <div className="d-flex align-items-center">
              <div className="logo_box">
                <Image src={Logo} width={69} height={47}/>
            </div>
            </div>
          </Link>
          
          {/* Regular navbar (visible on large screens) */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item">
                <Link href="/about" className="nav-link" style={{ color: '#5a2152' }}>About</Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className="nav-link" style={{ color: '#5a2152' }}>Services</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link" style={{ color: '#5a2152' }}>Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Right-aligned icons */}
          <div className="d-flex align-items-center">
            <button className="btn btn-link">
            <Image src={Search} width={26} height={29}/>
            </button>
            <button className="btn btn-link text-dark">
            <Image src={User} width={26} height={29}/>
            </button>
          </div>
        </div>
      </nav>

      {/* Custom Sliding Menu Implementation */}
      <div 
        className={`offcanvas-menu ${isOffcanvasOpen ? 'show' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '300px',
          height: '100%',
          backgroundColor: 'white',
          boxShadow: '0 0 15px rgba(0,0,0,0.1)',
          transform: isOffcanvasOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 1050,
          overflowY: 'auto'
        }}
      >
        <div style={{ backgroundColor: '#5a2152', color: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h5 style={{ margin: 0 }}>Menu</h5>
          <button 
            type="button" 
            className="btn-close"
            onClick={closeOffcanvas}
            aria-label="Close"
            style={{ filter: 'invert(1)' }}
          ></button>
        </div>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item py-2 border-bottom">
              <Link 
                href="/" 
                className="nav-link px-3" 
                style={{ color: '#5a2152', fontWeight: '500' }}
                onClick={closeOffcanvas}
              >
                Home
              </Link>
            </li>
            <li className="nav-item py-2 border-bottom">
              <Link 
                href="/about" 
                className="nav-link px-3" 
                style={{ color: '#5a2152', fontWeight: '500' }}
                onClick={closeOffcanvas}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item py-2 border-bottom">
              <Link 
                href="/services" 
                className="nav-link px-3" 
                style={{ color: '#5a2152', fontWeight: '500' }}
                onClick={closeOffcanvas}
              >
                Our Services
              </Link>
            </li>
            <li className="nav-item py-2 border-bottom">
              <Link 
                href="/residences" 
                className="nav-link px-3" 
                style={{ color: '#5a2152', fontWeight: '500' }}
                onClick={closeOffcanvas}
              >
                Residences
              </Link>
            </li>
            <li className="nav-item py-2 border-bottom">
              <Link 
                href="/testimonials" 
                className="nav-link px-3" 
                style={{ color: '#5a2152', fontWeight: '500' }}
                onClick={closeOffcanvas}
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item py-2 border-bottom">
              <Link 
                href="/faq" 
                className="nav-link px-3" 
                style={{ color: '#5a2152', fontWeight: '500' }}
                onClick={closeOffcanvas}
              >
                FAQ
              </Link>
            </li>
            <li className="nav-item py-2">
              <Link 
                href="/contact" 
                className="nav-link px-3" 
                style={{ color: '#5a2152', fontWeight: '500' }}
                onClick={closeOffcanvas}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {isOffcanvasOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1040
          }}
          onClick={closeOffcanvas}
        />
      )}
    </>
  );
};

export default Navbar;