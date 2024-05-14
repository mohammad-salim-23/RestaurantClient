import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const FoodDetails = () => {
    const food = useLoaderData();
    if(!food){
        <div className="flex justify-center items-center">
            <span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
        </div>

    }
    const {name,image,category,price,quantity,_id,made_by,origin,description} = food;
    return (
        <div>
            <Helmet>
        <title>Yummy | FoodDetails</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <div className="hero min-h-screen bg-base-200 p-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image} className="md:max-w-lg rounded-lg shadow-2xl" />
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="font-medium">category: {category}</p>
       <p className="font-medium">quantity: {quantity}</p>
       <p className="font-bold">price: {price}$</p>
       <p className="font-semibold">Made By: {made_by}</p>
      <p className="font-semibold">Food Origin: {origin}</p>
      <p className="
      ">{description}</p>
      
    <Link to={`/purchase/${_id}`}>  <button className="btn bg-primaryColor font-bold mt-2">purchase</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodDetails;