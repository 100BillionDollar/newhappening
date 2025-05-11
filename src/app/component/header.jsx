"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faClose, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname(); // Get current pathname using Next.js hook

  // Add scroll event listener to detect when header should become sticky
  useEffect(() => {
    const handleScroll = () => {
      // Make the header sticky after scrolling 100px
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add click outside listener to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && menuOpen) {
        setMenuOpen(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Function to close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Function to check if current path matches the link
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <>
      <header className={`${isSticky ? 'sticky-header' : ''}`}>
        <nav className={`navbar ${isSticky ? 'navbar-sticky' : ''}`}>
          <div className="container d-flex justify-content-between align-items-center">
            <Link href="/" className="navbar-brand fw-bold">
              <Image 
                src="/assets/images/logo.png" 
                className="img-fluid" 
                alt="Logo" 
                width={220} 
                height={50}
              />
            </Link>
            <button
              className="btn menu_icon border-0"
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Image 
                src="/assets/images/humberger_menu.png" 
                alt="menu" 
                width={55} 
                height={55} 
              />
            </button>
          </div>
        </nav>

        {/* Overlay Slide Menu */}
        <div className={`menu-overlay ${menuOpen ? 'show' : ''}`} ref={menuRef}>
          {/* Left Sidebar */}
          <div className="menu-sidebar">
            <ul className="list-unstyled">
              <li>
                <Link 
                  href="/about" 
                  className={isActive('/about') ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className={isActive('/services') ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio-ads" 
                  className={isActive('/portfolio-ads') ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="/career" 
                  className={isActive('/career') ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  Career
                </Link>
              </li>
              <li>
                <Link 
                  href="/contactus" 
                  className={isActive('/contactus') ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="menu-content position-relative">
          
            {/* Content Section */}
            <div className="right_menu_cntr">
              <div className="mb-3">
                <Image className="img-fluid"
                  src="/assets/images/logo.png" 
                  alt="Ahmar" 
                  width={200} 
                  height={45} 
                />
              </div>
              
              <div className="d-flex align-items-start mb-2">
                <p className="mb-0">
                <span className="contact_icon"><FontAwesomeIcon icon={faLocationDot} /></span> K-20, 2nd Floor, Sector 18,<br />
                  Noida-201301 (U.P)
                </p>
              </div>
              

              <div className="pt-4">
              <p className="text-warning fw-semibold my-3">We'd love to hear from you</p>
              
              <div className="d-flex align-items-center mb-2">
                <p className="mb-0"><span className="contact_icon"><FontAwesomeIcon icon={faEnvelope} /></span> Info@happeningads.com</p>
              </div>
              
              <div className="d-flex align-items-center mb-4">
                <p className="mb-0"><span className="contact_icon"><FontAwesomeIcon icon={faPhone} /></span>+91 99994 53999</p>
              </div>
              </div>

              {/* Social Links */}
              <div className="menu-social d-flex mt-5">
                <a href="#" className="me-3"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="me-3"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#" className="me-3"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" className="me-3"><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="#" className="me-3"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="#" className="me-3"><FontAwesomeIcon icon={faBehance} /></a>
              </div>
            </div>

            <span className="pattern_logo"> <Image className="img-fluid" src="/assets/images/pattern_logo.png" alt="Ahmar" width={200} height={45} /></span>
          </div>
            {/* Close button */}
            <div className="text-end">
              <button
                className="btn fs-2 nav_close_btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
               <FontAwesomeIcon icon={faClose} />
              </button>
            </div>

        </div>
      </header>

      {/* Add CSS for sticky header */}
      <style jsx>{`
        .sticky-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
          padding:3px 0;
        }
        
        .navbar-sticky {
          padding:0;
        }
      `}</style>
    </>
  );
}