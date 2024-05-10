
import "./All.css"
const SingleFood = ({food}) => {
    const {name,image,category,price,quantity} = food;
    return (
        <div>
           <div className="card food={food} bg-base-100 shadow-xl">
  <figure><img className="w-96 h-96 img-style
   " src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
       <p className="font-medium">category: {category}</p>
       <p className="font-medium">quantity: {quantity}</p>
       <p className="font-bold">price: {price}$</p>

    <div className="card-actions justify-end">

      <button className="btn bg-primaryColor">Details</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default SingleFood;