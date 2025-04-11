"use client";

// pages/index.js
import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';

// Import Swiper and modules
import { register } from 'swiper/element/bundle';

export default function Home() {
  useEffect(() => {
    // Register Swiper web components
    register();
  }, []);

  const events = [
    {
      id: 1,
      title: 'Lorem Ipsum is simply',
      date: 'Tue, May 13',
      time: '6:00 PM',
      location: 'Gurugram',
      isOnline: true,
      image: '../assets/images/events_img1.png',
      isNew: true
    },
    {
      id: 2,
      title: 'Lorem Ipsum dolor',
      date: 'Tue, May 15',
      time: '7:00 PM',
      location: 'Gurugram',
      isOnline: false,
      image: '../assets/images/events_img1.png',
      isNew: false
    },
    {
      id: 3,
      title: 'Sit Amet Consectetur',
      date: 'Wed, May 20',
      time: '5:30 PM',
      location: 'Delhi',
      isOnline: true,
      image: '../assets/images/events_img1.png',
      isNew: false
    }
  ];

  return (
    <>
     
      <section className="event_section">
        <div className="container">
          <div className="events-header d-flex justify-content-between align-items-center mb-3">
            <h2 className="text-white m-0">Upcoming Events</h2>
            <Link href="/events" className="text-white text-decoration-none">View All</Link>
          </div>

          <swiper-container 
            slides-per-view="auto" 
            space-between="15" 
            navigation="true"
            pagination="false"
            className="events-swiper"
          >
            {events.map(event => (
              <swiper-slide key={event.id} className="event-slide" style={{ width: '280px' }}>
                <div className="card border-0 rounded-4 overflow-hidden">
                  <div className="position-relative">
                    <img 
                      src={event.image} 
                      className="card-img-top" 
                      alt={event.title} 
                      style={{ height: '180px', objectFit: 'cover' }}
                    />
                    {event.isNew && (
                      <div className="position-absolute top-0 start-0 m-3">
                        <span className="badge rounded-pill" style={{ backgroundColor: '#ff8c00', color: 'white', padding: '8px 16px' }}>
                          Just Added
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="card-body" style={{ backgroundColor: 'white' }}>
                    <h5 className="card-title" style={{ color: '#6a0dad' }}>{event.title}</h5>
                    <p className="card-text mb-2">
                      {event.date} • {event.time}
                    </p>
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                      </div>
                      <span>{event.location}</span>
                      {event.isOnline && (
                        <>
                          <div className="mx-2">•</div>
                          <div className="d-flex align-items-center">
                            <div className="me-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                              </svg>
                            </div>
                            <span>Online Event</span>
                          </div>
                        </>
                      )}
                    </div>
                    <Link href="#" className="global_btn">
                      Join Now
                    </Link>
                  </div>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </section>


    </>
  );
}