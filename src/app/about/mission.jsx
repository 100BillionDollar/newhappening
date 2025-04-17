
import Image from 'next/image';
import Missionimg from "/public/assets/images/mission_img.jpg";


const Mission = () => {
  return (
    <div className="container">
      <div className="row">
        <div className='col-lg-6'>
       <Image className="img-fluid" src={Missionimg} alt="banner" width={"1920"} height={"467"}/>


        </div>
        <div className="col-lg-6  pt-4 pb-4">
          <h2 className="page_heading">Our Vision</h2>
          
          <p className="text-muted mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          <h2 className="page_heading">Our Mission</h2>
          <p className="text-muted mb-4">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
   
        </div>
      </div>
    </div>
  );
};

export default Mission;