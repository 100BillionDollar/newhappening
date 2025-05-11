// components/AboutBanner.js
import Link from 'next/link';
import Image from 'next/image';
import Aboutbanner from "/public/assets/images/homepageimage.jpg";

export default function AboutBanner() {
  return (
    <div className="home_banner_section banner-wrapper position-relative text-white">
       <Image className='img-fluid' src={Aboutbanner} width={1920} height={719}/> 
   

      {/* Contact Button */}
      <div className="position-absolute" style={{ bottom: '20px', right: '20px' }}>
        <Link href="/contact" className="d-flex align-items-center">
          <div className="me-2 bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
          </div>
          <span className="px-3 py-2 bg-warning text-dark fw-bold rounded-3">Get In Touch</span>
        </Link>
      </div>
      
    </div>

    
  );
}