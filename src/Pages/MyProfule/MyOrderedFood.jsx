import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthContext/AuthProvider";


const MyOrderedFood = () => {
    const {user} = useContext(AuthContext);
    const [order,setOrder] = useState([]);
    useEffect(()=>{
        if(user?.email){
            fetch(`http://localhost:5000/myPurchase/${user?.email}`)
            .then((res)=>res.json())
            .then((data)=>{
              setOrder(data);
            })
        }
    },[user?.email]);
    console.log(order);

    return (
        <div>
            <h3>My Ordered Food</h3>
        </div>
    );
};

export default MyOrderedFood;