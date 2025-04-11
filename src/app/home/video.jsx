"use client";

// pages/index.js
import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';


export default function Videos() {


  return (
    <>
     
      <section className="videos_section">
        <div className="container">
          <div className="events-header d-flex justify-content-between align-items-center mb-3">
            <h2 className="page_heading">Latest Videos</h2>
            <Link href="#" className="text-decoration-none view_all_btn">View All</Link>
          </div>

          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="YouTube video player" 
            frameborder="0" 
            width="100%"
            height="200"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>

        </div>
      </section>


    </>
  );
}