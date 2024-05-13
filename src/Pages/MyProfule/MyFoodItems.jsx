import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthContext/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyFoodItems = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://assignment-11-server-side-lake.vercel.app/myfood/${user?.email}`,
        {
          credentials: "include",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setFoods(data);
        });
    }
  }, [user?.email]);
  // topFoods.map((food,index)=>(
  // <div key={index}>
  console.log(foods);
  return (
    <>
      <Helmet>
        <title>Yummy | MyAddedFood</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center max-w-6xl m-auto">
        {foods.map((food, index) => (
          <div key={index}>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              <img
                src={food.image}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracking-wide">
                    {food.name}
                  </h2>
                  <h3 className="font-semibold">Category: {food.category}</h3>
                  <p className="font-bold">Price: {food.price}$</p>
                  <p className="text-gray-800">{food.description}</p>
                </div>
                <Link to={`/updateFood/${food._id}`}>
                  <button
                    type="button"
                    className="flex items-center justify-center w-full p-3 btn-outline font-semibold tracking-wide rounded-m bg-orange-400 dark:text-gray-50"
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyFoodItems;
