
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedFoods from "../components/FeaturedFoods";
import MeetChef from "../components/MeetChef";
import SpecialDrinks from "../components/SpecialDrinks";
import TopFood from "../components/TopFood";


const Home = () => {
    const foods = useLoaderData();
    return (
        <div className="space-y-7">
           <Banner></Banner>
           <TopFood foods={foods}></TopFood>
           <MeetChef></MeetChef>
           <FeaturedFoods></FeaturedFoods>
           <SpecialDrinks></SpecialDrinks>

        </div>
    );
};

export default Home;