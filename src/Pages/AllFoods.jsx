
import SingleFood from "../components/SingleFood";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "../components/All.css";

const AllFoods = () => {
const [foods, setFoods] = useState([]);
  const [searchFood, setSearchFood] = useState("");

  useEffect(() => {
    fetch("https://www.royalcrowncafebd.com/food")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Foods:", data); // ✅ Check what is coming from backend
        setFoods(data || []);
      })
      .catch((error) => console.error("Error fetching food data:", error));
  }, []);
  
  console.log(foods);
  const filterFoods = foods?.filter((food) =>
    food.name.toLowerCase().includes(searchFood.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>RoyalCrown | All Food</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      
      <div className="background-container h-64 flex flex-col justify-center items-center">
        <p className="text-center font-bold text-3xl mt-5">RoyalCrown | All Food</p>
      </div>

      <div className="">
        <button className="btn flex justify-center ml-10 mt-5 w-64 bg-primaryColor">
          <input
            className="text-center"
            type="text"
            placeholder="Search for food..."
            value={searchFood}
            onChange={(e) => setSearchFood(e.target.value)}
          />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 p-2">
          {searchFood === ""
            ? foods.map((food) => (
                <SingleFood key={food._id} food={food}></SingleFood>
              ))
            : filterFoods.map((food) => (
                <SingleFood key={food._id} food={food}></SingleFood>
              ))}
        </div>
      </div>
    </>
  );
};

export default AllFoods;
