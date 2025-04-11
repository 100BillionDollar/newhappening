// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footerlogo from "/public/assets/images/footer_logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Logo Section */}
        <div className="d-flex justify-content-start mb-4">
          <div className="d-flex flex-column align-items-start">
            <Image src={Footerlogo} width={154} height={99}/>
          </div>
        </div>
        
        {/* Links Section */}
        <div className="row">
          <div className="col-md-6 col-6 mb-4 mb-md-0">
            <h5 className="footer_headinmg mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/about-microsite" className="text-white text-decoration-none">About Microsite</Link></li>
              <li className="mb-2"><Link href="/resources-tips" className="text-white text-decoration-none">Resource & Tips</Link></li>
              <li className="mb-2"><Link href="/events-webminars" className="text-white text-decoration-none">Events & Webminars</Link></li>
            </ul>
          </div>
          
          <div className="col-md-6 col-6">
            <h5 className="footer_headinmg mb-3">Get in Touch</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/contact" className="text-white text-decoration-none">Write to us</Link></li>
              <li className="mb-2"><a href="tel:+91989XX989XX" className="text-white text-decoration-none">+91 989XX-989XX</a></li>
              <li className="mb-2"><a href="mailto:Help@antara.com" className="text-white text-decoration-none">Help@antara.com</a></li>
            </ul>
            
            <div className="mt-4">
              <ul className="list-unstyled">
                <li className="mb-2"><Link href="/terms-conditions" className="text-white text-decoration-none">Terms and Conditions</Link></li>
                <li className="mb-2"><Link href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Social Media Section */}
        <div className="mt-4">
          <h5 className="footer_headinmg mb-3">Follow us on</h5>
          <div className="d-flex gap-3 mt-2">
            {/* Simple styled boxes instead of icons */}
            <a href="https://instagram.com" className="text-white text-decoration-none" aria-label="Instagram">
              <div style={{ width: '25px', height: '25px', backgroundColor: 'white', color: '#4a1942', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }}>IG</div>
            </a>
            <a href="https://linkedin.com" className="text-white text-decoration-none" aria-label="LinkedIn">
              <div style={{ width: '25px', height: '25px', backgroundColor: 'white', color: '#4a1942', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }}>LI</div>
            </a>
            <a href="https://facebook.com" className="text-white text-decoration-none" aria-label="Facebook">
              <div style={{ width: '25px', height: '25px', backgroundColor: 'white', color: '#4a1942', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }}>FB</div>
            </a>
            <a href="https://twitter.com" className="text-white text-decoration-none" aria-label="X Twitter">
              <div style={{ width: '25px', height: '25px', backgroundColor: 'white', color: '#4a1942', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }}>X</div>
            </a>
            <a href="https://youtube.com" className="text-white text-decoration-none" aria-label="YouTube">
              <div style={{ width: '25px', height: '25px', backgroundColor: 'white', color: '#4a1942', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }}>YT</div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;