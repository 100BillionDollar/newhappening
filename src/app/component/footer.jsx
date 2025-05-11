// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="container">
      
        {/* Links Section */}
        <div className="row">
        <div className="col-md-4 col-6 mb-4 mb-md-0">

        <div className="footer_logo">
    <Image src={logo} alt="Logo" width={180} height={32} />
            <p className="text-start mt-4">Lorem ipsum dolor sit amet, Magna vero consectetur et. Dolor volum et iaculis ut facilisi, est ollamcorper. Dolores primumque ius suspendere ut.  Dolor volum et iaculis ut facilisi, est ollamcorper. Dolores primumque ius suspendere ut.  Dolor volum et iaculis ut facilisi, est ollamcorper. </p> 
          </div>
        </div>
          <div className="col-md-3 col-6 mb-4 mb-md-0 pd_left">
            <h5 className="footer_headinmg mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="#" className="text-decoration-none">About</Link></li>
              <li className="mb-2"><Link href="#" className="text-decoration-none">Services</Link></li>
              <li className="mb-2"><Link href="#" className="text-decoration-none">
              Portfolio</Link></li>
              <li className="mb-2"><Link href="#" className="text-decoration-none">
              Career</Link></li>
              <li className="mb-2"><Link href="#" className="text-decoration-none">
              Contact</Link></li>
            </ul>
          </div>
          
      
          <div className="col-md-3 col-6">
            <h5 className="footer_headinmg mb-3">Get in Touch</h5>
            <ul className="list-unstyled">
            
              <li className="mb-2"><a href="tel:+919999453999" className="text-decoration-none">+91 9999453999</a></li>
              <li className="mb-2"><a href="mailto:Info@happeningads.com" className="text-decoration-none">Info@happeningads.com</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none">K-20, Sector 18, Noida-201301 (U.P)
              </a></li>
            </ul>
            
       
          </div>

            <div className="col-md-2 col-6">
          <div className="social_box">
            <h5 className="footer_headinmg mb-3">Follow us on</h5>

          <div className="d-flex social_icon gap-3 mt-2">
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#"><FontAwesomeIcon icon={faBehance} /></a>
            </div>
          </div>
        </div>
        </div>
        
      
      </div>
    </footer>
  );
};

export default Footer;