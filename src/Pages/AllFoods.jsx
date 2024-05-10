import { useLoaderData } from "react-router-dom";
import SingleFood from "../components/SingleFood";


const AllFoods = () => {
    const foods = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 p-2">
          {
            foods.map(food=><SingleFood key={food._id}
                food={food}>
                
            </SingleFood>)
          }
        </div>
    );
};

export default AllFoods;