import Banner from "./home/banner";
import Whoweare from "./home/whoweare";
import Event from "./home/events";
import Resources from "./home/resources";
import Faqs from "./home/faqs";
import StoriesSlider from "./home/storiesSlider";


export default function Home() {
  return (<>
    <Banner/>
    <Whoweare/>
    <StoriesSlider/>
    <Event/>
    <Resources/>
    <Faqs/>
    </>
    
  );
}
