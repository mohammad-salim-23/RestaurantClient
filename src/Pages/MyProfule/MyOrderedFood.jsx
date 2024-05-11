import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthContext/AuthProvider";
import Swal from "sweetalert2";


const MyOrderedFood = () => {
    const {user} = useContext(AuthContext);
    const [orders,setOrder] = useState([]);
    const handleDelete= (_id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          })
          .then((result)=>{
            if(result.isConfirmed){
                fetch(`http://localhost:5000/purchase/${_id}`,{
                    method:"DELETE"
                })
                .then((res)=>res.json())
                .then((data)=>{
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                          });  
                   const remaining = orders.filter((order)=>order._id!==_id);
                   setOrder(remaining);        
                    }
                })
            }
          })
    }
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
  <figure><img className="w-96" src={order.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="font-bold text-xl ">{order.foodname}</h2>
    <p className="font-semibold">price: {order.price}$</p>
    <p className="font-medium">Buyer Name: {order.name}</p>
    <h4>Buying Date: {order.currentDate}</h4>
    <div className="card-actions justify-end">
      <button onClick={()=>handleDelete(order._id)}
       className="btn btn-outline bg-primaryColor">Delete</button>
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