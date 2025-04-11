// pages/index.js
"use client";
import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Whoweareimg from "/public/assets/images/whoweare_img.png";

export default function Home() {
  useEffect(() => {
    // Load Bootstrap JS on client-side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
     

      <main className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fw-bold text-burgundy">Latest Resources</h1>
          <Link href="/all-resources" className="text-decoration-none fw-medium">
            View All
          </Link>
        </div>

        {/* Category Filter Buttons */}
        <div className="mb-4">
          
          <div className='button_box'>
          <button className="btn btn-burgundy me-2 px-4 py-2 rounded-pill">All</button>
          <button className="btn btn-outline-burgundy me-2 px-4 py-2 rounded-pill">Lung health</button>
          <button className="btn btn-outline-burgundy px-4 py-2 rounded-pill">Knee Pain</button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={1.3}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          }}
          className="resource-swiper"
        >
          <SwiperSlide>
            <div className="card border-0 rounded-4 overflow-hidden shadow-sm">
              <div className="position-relative">
                <img 
                  src="/images/health-resource-1.jpg" 
                  className="card-img-top" 
                  alt="Health Resource"
                  style={{ height: '260px', objectFit: 'cover' }}
                />
                <button className="btn btn-light rounded-circle position-absolute top-3 end-3 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>
              </div>
              <div className="card-body p-3">
                <h5 className="card-title text-burgundy fw-bold mb-2">Neque porro quisquam est qui</h5>
                <p className="card-text text-muted mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                <p className="card-text small text-muted">March 17, 2025 | 4 min read</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="card border-0 rounded-4 overflow-hidden shadow-sm">
              <div className="position-relative">
                <img 
                  src="/images/health-resource-2.jpg" 
                  className="card-img-top" 
                  alt="Health Resource"
                  style={{ height: '260px', objectFit: 'cover' }}
                />
                <button className="btn btn-light rounded-circle position-absolute top-3 end-3 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>
              </div>
              <div className="card-body p-3">
                <h5 className="card-title text-burgundy fw-bold mb-2">Neque porro quisquam est</h5>
                <p className="card-text text-muted mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                <p className="card-text small text-muted">March 17, 2025 | 3 min read</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="card border-0 rounded-4 overflow-hidden shadow-sm">
              <div className="position-relative">
                <img 
                  src="/images/health-resource-3.jpg" 
                  className="card-img-top" 
                  alt="Health Resource"
                  style={{ height: '260px', objectFit: 'cover' }}
                />
                <button className="btn btn-light rounded-circle position-absolute top-3 end-3 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>
              </div>
              <div className="card-body p-3">
                <h5 className="card-title text-burgundy fw-bold mb-2">Neque porro quisquam est qui</h5>
                <p className="card-text text-muted mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                <p className="card-text small text-muted">March 17, 2025 | 5 min read</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="card border-0 rounded-4 overflow-hidden shadow-sm">
              <div className="position-relative">
                <img 
                  src="/images/health-resource-4.jpg" 
                  className="card-img-top" 
                  alt="Health Resource"
                  style={{ height: '260px', objectFit: 'cover' }}
                />
                <button className="btn btn-light rounded-circle position-absolute top-3 end-3 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>
              </div>
              <div className="card-body p-3">
                <h5 className="card-title text-burgundy fw-bold mb-2">Neque porro quisquam est</h5>
                <p className="card-text text-muted mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                <p className="card-text small text-muted">March 17, 2025 | 4 min read</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>

     
    </>
  );
}