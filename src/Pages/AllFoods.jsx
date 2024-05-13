import { useLoaderData } from "react-router-dom";
import SingleFood from "../components/SingleFood";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AllFoods = () => {
  const foods = useLoaderData();
  const [searchFood, setSearchFood] = useState("");

  const filterFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchFood.toLowerCase())
  );
  return (
    <>
      <Helmet>
        <title>Yummy | All Food</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      
      <div className="">
        <button className="btn flex justify-center ml-10">
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
