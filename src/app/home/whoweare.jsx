// AboutSection.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Whoweareimg from "/public/assets/images/whoweare_img.png";
import whoweicon from "/public/assets/images/whoweare_icon.svg";


const AboutSection = () => {
  return (
    <div className="container pe-0 ps-0">
      <div className="card border-0">
        <div className="p-4">
          <h2 className="page_heading">Who we are?</h2>
          
          <p className="text-muted mb-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequi
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
          
          <div className="row mb-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="col-md-3 col-6 mb-3 mb-md-0">
                <div className="who_we_box">
                  <span className="whoweicon"><Image className="img-fluid" src={whoweicon} alt="banner" width={"36"} height={"36"}/></span>
                  <p className="mb-0">Sed ut perspiciatis ut perspiciatis</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-4">
            <Image 
              src={Whoweareimg} 
              alt="People enjoying outdoors" 
              width={500} 
              height={300}
              className="img-fluid rounded"
            />
          </div>
          
          <div className="text-center">
            <Link href="/about" className="global_btn">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;