import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const FoodDetails = () => {
    const food = useLoaderData();
    console.log(food);
    if(!food){
        <div className="flex justify-center items-center">
            <span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
        </div>

    }
    const { name, image, price, description } = food.foods;
    return (
        <div>
            <Helmet>
        <title>RoyalCrown | FoodDetails</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <div className="hero min-h-screen bg-base-200 p-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image} className="md:max-w-lg rounded-lg shadow-2xl" />
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">{name}</h1>
      
       <p className="font-bold">price: {price}</p>
      
  
      <p className="
      ">{description}</p>
   
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodDetails;