
import Banner from "../components/Banner";
import FeaturedFoods from "../components/FeaturedFoods";

import SpecialDrinks from "../components/SpecialDrinks";
import { Helmet } from "react-helmet-async";

import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";


const Home = () => {
    
    return (
        <>
        <Helmet>
        <title>RoyalCrown| Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
        <div className="space-y-7">
           <Banner></Banner>
         
          <AboutUs ></AboutUs>
         
           {/* <MeetChef></MeetChef> */}
           <ContactUs></ContactUs>
           <FeaturedFoods></FeaturedFoods>
           <SpecialDrinks></SpecialDrinks>

        </div>
        </>
    );
};

export default Home;