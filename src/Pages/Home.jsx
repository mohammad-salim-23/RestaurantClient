
import Banner from "../components/Banner";
import FeaturedFoods from "../components/FeaturedFoods";
import SpecialDrinks from "../components/SpecialDrinks";


const Home = () => {
    return (
        <div >
           <Banner></Banner>
           
           <FeaturedFoods></FeaturedFoods>
           <SpecialDrinks></SpecialDrinks>
        </div>
    );
};

export default Home;