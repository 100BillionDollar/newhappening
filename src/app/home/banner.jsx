"use client"
import { useEffect, useState ,useContext} from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner_img from "/public/assets/images/home_banner.jpg";
import Link from 'next/link';

function Banner() {

  return (
    <div className='banner_section position-relative'>
   <Swiper
    slidesPerView={1}
    autoplay={{ delay: 10000 }}
    pagination={{ clickable: true }}
    modules={[Navigation, Pagination, Autoplay]}
    navigation={{
      prevEl: ".custom-swiper-button-prev",
      nextEl: ".custom-swiper-button-next",
    }}
    breakpoints={{
      320: { // Small screens (mobile)
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: { // Medium screens (tablet)
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: { // Large screens (desktop)
        slidesPerView: 1,
        spaceBetween: 0,
      },
    }}
  >


            <SwiperSlide className='position-relative'>
              <Image className="img-fluid" src={banner_img} alt="banner" width={"1920"} height={"467"}/>
               <div className='banner_caption'>
              <h1>Lorem Ipsum is simply dummy text</h1>
              <Link href="#" className="global_btn">Explore More</Link>
               </div>
            </SwiperSlide>
            <SwiperSlide className='position-relative'>
              <Image className="img-fluid" src={banner_img} alt="banner" width={"1920"} height={"467"}/>
              <div className='banner_caption'>
              <h1>Lorem Ipsum is simply dummy text</h1>
              <Link href="#" className="global_btn">Explore More</Link>
               </div>
            </SwiperSlide>
          
  
            <SwiperSlide>
              <Image className="img-fluid" src={banner_img} alt="banner" width={"1920"} height={"467"}/>
              <div className='banner_caption'>
              <h1>Lorem Ipsum is simply dummy text</h1>
              <Link href="#" className="global_btn">Explore More</Link>
               </div>
            </SwiperSlide>
        
    {/* })} */}
 
     </Swiper>
</div>
  );
}

export default Banner;