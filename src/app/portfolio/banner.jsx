// components/AboutBanner.js
import Link from 'next/link';
import Image from 'next/image';
import Aboutbanner from "/public/assets/images/service_banner.jpg";
import { useEffect, useState} from 'react';


export default function PortfolioBanner() {
   const [position, setPosition] = useState(0);
      
    useEffect(() => {
      let animationFrame;
      let startTime = null;
      const duration = 2000; // 2 seconds for full animation cycle
      const maxTranslation = 10; // Maximum translation in pixels
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        
        // Calculate position using sine wave for smooth, continuous motion
        // This creates a smooth up and down animation that loops seamlessly
        const progress = (elapsed % duration) / duration;
        const newPosition = Math.sin(progress * Math.PI * 2) * maxTranslation;
        
        setPosition(newPosition);
        animationFrame = requestAnimationFrame(animate);
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }, []);
  return (
    <div className="banner-wrapper position-relative text-white">
       <Image className='img-fluid' src={Aboutbanner} width={1920} height={400}/> 
      <div className="container h-100 position-absolute caption_box">
        <div className="row h-100">
          <div className="col-12 portfolio_heading d-flex flex-column justify-content-center"  data-aos="fade-up" data-aos-delay="200">
            <h1 className="title_heading">
             Portfolio
            </h1>
            <p>Design is so simple and relevant <br></br> Works. That's why it's so complicated</p>
          </div>
        </div>
      </div>

      <div className="scroll-indicator position-absolute start-50 translate-middle-x" style={{ bottom: '60px' }}>
      <div 
        className="text-center text-white transition-all duration-300"
        style={{ transform: `translateY(${position}px)` }}
      >
         <a href="#middlecontent" className="text-white">
        <div className="mb-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            fill="currentColor" 
            className="bi bi-chevron-down" 
            viewBox="0 0 16 16"
          >
            <path 
              fillRule="evenodd" 
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <span className="text-sm">Scroll Down</span>
        </a>
      </div>
    </div>

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