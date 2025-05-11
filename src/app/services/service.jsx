import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Service Card Component
const ServiceCard = ({ title, imageSrc, altText }) => {
  return (
    <div className="col-md-4 p-4 pt-0 pb-2">
      <div className="service_box h-100 border-0 text-center">
        <div className="service_inner_box p-0">
          <Image 
            src={imageSrc} 
            alt={altText}
            width={450}
            height={450}
            className="img-fluid mb-3"  data-aos="fade-up" data-aos-delay="200"
          />
          <h5 className="card-title"  data-aos="fade-up" data-aos-delay="400">{title}</h5>
          <Link href="#" className="btn btn-link text-danger px-0"  data-aos="fade-up" data-aos-delay="600">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

// Main Services Page Component
export default function ServicePage() {
  // Branding Services
  const brandingServices = [
    {
      id: 'brand-management',
      title: 'Brand Management',
      imageSrc: '/assets/images/branding.jpg',
      altText: 'Paper clips arranged in pyramid shape'
    },
    {
      id: 'creative-services',
      title: 'Creative Services',
      imageSrc: '/assets/images/creative.jpg',
      altText: 'Colorful paper craft brain'
    }
  ];

  // Digital Services
  const digitalServices = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      imageSrc: '/assets/images/digital-marketing.jpg',
      altText: 'Robot hand and human hand on laptop'
    },
    {
      id: 'seo-services',
      title: 'SEO Services',
      imageSrc: '/assets/images/seo-service.jpg',
      altText: 'Man climbing steps with light bulb'
    },
    {
      id: 'ppc',
      title: 'PPC',
      imageSrc: '/assets/images/ppc.jpg',
      altText: 'Hand pressing paid ads button'
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing',
      imageSrc: '/assets/images/social-media.jpg',
      altText: 'Woman with social media icons'
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing',
      imageSrc: '/assets/images/email-marketing.jpg',
      altText: 'Mailbox with flying letters'
    },
    {
      id: 'influencer-marketing',
      title: 'Influencer Marketing',
      imageSrc: '/assets/images/influencer.jpg',
      altText: 'Woman jumping with social media interface'
    }
  ];
  
  return (
    <>
          <section className="light_grey_bg mb-5 pb-2" id="middlecontent">

      <div className="container">
        {/* Branding Services Section */}
          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase"  data-aos="fade-up" data-aos-delay="200">BRANDING SERVICES</h2>
            <p className="text-center"  data-aos="fade-up" data-aos-delay="400">Define Your Brand Story in Style!</p>
          </div>
          
          <div className="row justify-content-center">
            {brandingServices.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                imageSrc={service.imageSrc}
                altText={service.altText}
              />
            ))}
          </div>
          </div>

        </section>
        
        {/* Digital Services Section */}
        <section className="digital_section pt-2 pb-3">
        <div className="container">

          <div className="heading_box text-center mb-5">
            <h2 className="page_heading text-uppercase"  data-aos="fade-up" data-aos-delay="400">DIGITAL SERVICES</h2>
            <p className="text-center"  data-aos="fade-up" data-aos-delay="600">Let's Rock The Digital World, Together!</p>
          </div>
          
          <div className="row">
            {digitalServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                imageSrc={service.imageSrc}
                altText={service.altText}
              />
            ))}
          </div>
          </div>
        </section>
    </>
  );
}