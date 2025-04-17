import Link from 'next/link';


export default function Videos() {


  return (
    <>
     
      <section className="videos_section">
        <div className="container">
          <div className="events-header mb-4">
            <h2 className="page_heading">Latest Videos</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>

    

         <div className="row">
        <div className="col-lg-4">
        <div className="videos_box mb-3">

        
<iframe 
  src="https://www.youtube.com/embed/1IkY0_qONRk?si=GlbMrxVLAjtgv6gq" 
  title="YouTube video player" 
  frameborder="0" 
  width="100%"
  height="200"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
</div>
</div>
<div className="col-lg-4">
<div className="videos_box  mb-3">     
<iframe 
src="https://www.youtube.com/embed/1IkY0_qONRk?si=GlbMrxVLAjtgv6gq" 
title="YouTube video player" 
frameborder="0" 
width="100%"
height="200"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen>
</iframe>
</div>
</div>
<div className="col-lg-4  mb-3">
<div className="videos_box">

      
<iframe 
src="https://www.youtube.com/embed/1IkY0_qONRk?si=GlbMrxVLAjtgv6gq" 
title="YouTube video player" 
frameborder="0" 
width="100%"
height="200"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen>
</iframe>
</div>
</div>
<div className="col-lg-12  mt-2 mb-3">
          <div className="text-center">
            <Link href="/about" className="global_btn">
              Know More
            </Link>
          </div>
          </div>


        </div>

      </div>
      </section>


    </>
  );
}