

import Image from 'next/image';
import Offerimg1 from "/public/assets/images/offer_img1.svg";
import Offerimg3 from "/public/assets/images/offer_img3.svg";
import Offerimg4 from "/public/assets/images/offer_img4.svg";
import Offerimg5 from "/public/assets/images/offer_img5.svg";

const Offers = () => {
    return (
        <section className="offer_section">
      <div className="container">
        <div className="row">
        <div className="col-lg-12">
            <h2 className="page_heading">Our Offerings</h2>
            </div>
        </div>

        <div className="row">
        <div className="col-lg-6 col-6 pt-4">
        <div className="offer_box">
        <Image className="img-fluid" src={Offerimg1} alt="banner" width={"400"} height={"400"}/>       
        </div>
        </div>
        <div className="col-lg-6 col-6 pt-4">
        <div className="offer_box">
        <Image className="img-fluid" src={Offerimg4} alt="banner" width={"400"} height={"400"}/>       
        </div>
        </div>
        <div className="col-lg-6 col-6 pt-4">
        <div className="offer_box">
        <Image className="img-fluid" src={Offerimg3} alt="banner" width={"400"} height={"400"}/>       
        </div>
        </div>
        <div className="col-lg-6 col-6 pt-4">
        <div className="offer_box">
        <Image className="img-fluid" src={Offerimg4} alt="banner" width={"400"} height={"400"}/>       
        </div>
        </div>

        <div className="col-lg-6 col-6 pt-4">
        <div className="offer_box">
        <Image className="img-fluid" src={Offerimg5} alt="banner" width={"400"} height={"400"}/>       
        </div>
        </div>
        </div>

      </div>
      </section>
    );
  };
  
  export default Offers;