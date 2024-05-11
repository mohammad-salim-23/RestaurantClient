import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthContext/AuthProvider";


const MyOrderedFood = () => {
    const {user} = useContext(AuthContext);
    const [orders,setOrder] = useState([]);
    useEffect(()=>{
        if(user?.email){
            fetch(`http://localhost:5000/myPurchase/${user?.email}`)
            .then((res)=>res.json())
            .then((data)=>{
              setOrder(data);
            })
        }
    },[user?.email]);
    console.log(orders);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                orders.map((order,index)=>(
                    <div key={index}>
                    <div className="card card-side bg-base-100 shadow-xl h-96">
  <figure><img src={order.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-xl ">{order.foodname}</h2>
    <p className="font-semibold">price: {order.price}$</p>
    <p className="font-medium">Buyer Name: {order.name}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
                     </div>
                ))
            }
        </div>
    );
};

export default MyOrderedFood;