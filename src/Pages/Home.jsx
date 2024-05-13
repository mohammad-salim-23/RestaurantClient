
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedFoods from "../components/FeaturedFoods";
import MeetChef from "../components/MeetChef";
import SpecialDrinks from "../components/SpecialDrinks";
import TopFood from "../components/TopFood";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const foods = useLoaderData();
    return (
        <>
        <Helmet>
        <title>Yummy | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
        <div className="space-y-7">
           <Banner></Banner>
           <TopFood foods={foods}></TopFood>
           <MeetChef></MeetChef>
           <FeaturedFoods></FeaturedFoods>
           <SpecialDrinks></SpecialDrinks>

        </div>
        </>
    );
};

export default Home;