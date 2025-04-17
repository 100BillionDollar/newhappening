

import Image from 'next/image';
import Maxlife_logo from "/public/assets/images/maxlife_logo1.png";


const Offers = () => {
    return (
        <section className="max_logo_section pt-5 pb-5">
      <div className="container">
        <div className="row">
        <div className="col-lg-12">
            <h2 className="page_heading">The Max Group's Legacy<br/> Behind Care</h2>
            </div>
        </div>

        <div className="row">
        <div className="col-lg-6 col-6 pt-4">
        <div className="offer_box max_logo">
        <Image className="img-fluid" src={Maxlife_logo} alt="banner" width={"400"} height={"400"}/>       
        </div>
        </div>
        <div className="col-lg-6 col-6 pt-4">
        <div className="offer_box max_logo">
        <Image className="img-fluid" src={Maxlife_logo} alt="banner" width={"400"} height={"400"}/>       
        </div>
        </div>
        <div className="col-lg-6 col-6 pt-4">
        <div className="offer_box max_logo">
        <Image className="img-fluid" src={Maxlife_logo} alt="banner" width={"400"} height={"400"}/>       
        </div>
        </div>
        <div className="col-lg-6 col-6 pt-4">
        <div className="offer_box max_logo">
        <Image className="img-fluid" src={Maxlife_logo} alt="banner" width={"400"} height={"400"}/>       
        </div>
        </div>

        <div className="col-lg-6 col-6 pt-4">
        <div className="offer_box max_logo">
        <Image className="img-fluid" src={Maxlife_logo} alt="banner" width={"400"} height={"400"}/>       
        </div>
        </div>
        </div>

      </div>
      </section>
    );
  };
  
  export default Offers;