"use client";

import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Image from 'next/image';
import portfolioimg1 from "/public/assets/images/portfolio_img1.jpg";
import portfolioimg2 from "/public/assets/images/portfolio_img2.jpg";
import portfolioimg3 from "/public/assets/images/portfolio_img3.jpg";
import portfolioimg4 from "/public/assets/images/portfolio_img4.jpg";
import portfolioimg5 from "/public/assets/images/portfolio_img5.jpg";
import portfolioimg6 from "/public/assets/images/portfolio_img6.jpg";

export default function portfolioPage() {
  // Bootstrap JS is client-side only, so we need to import it after mount
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  // Image mapping object to easily reference images by name
  const images = {
    portfolioimg1,
    portfolioimg2,
    portfolioimg3,
    portfolioimg4,
    portfolioimg5,
    portfolioimg6
  };

  // Sample project data with dynamic image properties
  const socialMediaProjects = [
    { id: 1, title: "Instagram Campaign", image: "portfolioimg1" },
    { id: 2, title: "Facebook Promotion", image: "portfolioimg2" },
    { id: 3, title: "Twitter Marketing", image: "portfolioimg3" }
  ];

  const brandingProjects = [
    { id: 1, title: "Corporate Identity", image: "portfolioimg4" },
    { id: 2, title: "Logo Design", image: "portfolioimg5" },
    { id: 3, title: "Brand Guidelines", image: "portfolioimg6" }
  ];

  return (
    <>
      {/* Social Media Campaign Section */}
      <section className="light_grey_bg" id="middlecontent">
        <div className="container">
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase"  data-aos="fade-up" data-aos-delay="200">Social Media Campaign</h2>
          </div>
          <div className="row">
            {socialMediaProjects.map(project => (
              <div key={project.id} className="col-md-4 mb-4">
                <div className="portfolio_box position-relative">
                  <div className="portfolio_img_box"  data-aos="fade-up" data-aos-delay="200">
                    <Image 
                      className='img-fluid' 
                      src={images[project.image]} 
                      width={600} 
                      height={600}
                      alt={project.title}
                    />
                  </div>
                  <div className="portfolio_details_box">
                    <h5  data-aos="fade-up" data-aos-delay="400">{project.title}</h5>
                    <a href="#" className="global_btn"  data-aos="fade-up" data-aos-delay="600">View Work</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Works Section */}
      <section className="py-5">
        <div className="container">
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase">Branding Works</h2>
          </div>
          <div className="row">
            {brandingProjects.map(project => (
              <div key={project.id} className="col-md-4 mb-4">
                <div className="portfolio_box position-relative">
                  <div className="portfolio_img_box"  data-aos="fade-up" data-aos-delay="200">
                    <Image 
                      className='img-fluid' 
                      src={images[project.image]} 
                      width={600} 
                      height={600}
                      alt={project.title}
                    />
                  </div>
                  <div className="portfolio_details_box">
                    <h5  data-aos="fade-up" data-aos-delay="400">{project.title}</h5>
                    <a href="#" className="global_btn"  data-aos="fade-up" data-aos-delay="600">View Work</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}