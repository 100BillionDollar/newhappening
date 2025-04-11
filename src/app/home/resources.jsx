// pages/index.js
"use client";
import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import banner_img from "/public/assets/images/resources_img1.jpg";

export default function Home() {
  useEffect(() => {
    // Load Bootstrap JS on client-side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
     

      <main className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="page_heading mb-0">Latest Resources</h2>
          <Link href="#" className="text-decoration-none fw-medium view_all_btn">
            View All
          </Link>
        </div>

        {/* Category Filter Buttons */}
        <div className="mb-4">
          
          <div className='button_box'>
          <button className="btn btn-burgundy me-2 px-4 py-2 active_button">All</button>
          <button className="btn btn-outline-burgundy me-2 px-4 py-2">Lung health</button>
          <button className="btn btn-outline-burgundy px-4 py-2">Knee Pain</button>
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
            <div className="resources_card_box overflow-hidden shadow-sm">
              <div className="position-relative">
            
                 <Image className="w-100" src={banner_img} alt="banner" width={"250"} height={"175"}/>

                <button className="btn btn-light rounded-circle position-absolute top-3 end-3 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>
              </div>
              <div className="card-body">
                <h5 className="resources_title mb-2">Neque porro quisquam est qui</h5>
                <p className="card-text text-muted mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                <p className="card-text small text-muted">March 17, 2025 | 4 min read</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="resources_card_box overflow-hidden shadow-sm">
              <div className="position-relative">
              <Image className="w-100" src={banner_img} alt="banner" width={"250"} height={"175"}/>
                <button className="btn btn-light rounded-circle position-absolute top-3 end-3 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>
              </div>
              <div className="card-body">
                <h5 className="resources_title mb-2">Neque porro quisquam est</h5>
                <p className="card-text text-muted mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                <p className="card-text small text-muted">March 17, 2025 | 3 min read</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="resources_card_box overflow-hidden shadow-sm">
              <div className="position-relative">
              <Image className="w-100" src={banner_img} alt="banner" width={"250"} height={"175"}/>
                <button className="btn btn-light rounded-circle position-absolute top-3 end-3 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>
              </div>
              <div className="card-body">
                <h5 className="resources_title mb-2">Neque porro quisquam est qui</h5>
                <p className="card-text text-muted mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                <p className="card-text small text-muted">March 17, 2025 | 5 min read</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="resources_card_box overflow-hidden shadow-sm">
              <div className="position-relative">
              <Image className="w-100" src={banner_img} alt="banner" width={"250"} height={"175"}/>
                <button className="btn btn-light rounded-circle position-absolute top-3 end-3 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>
              </div>
              <div className="card-body">
                <h5 className="resources_title mb-2">Neque porro quisquam est</h5>
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