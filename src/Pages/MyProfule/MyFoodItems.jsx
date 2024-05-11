import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthContext/AuthProvider";

const MyFoodItems = () => {
    const {user} = useContext(AuthContext);
    const [foods,setFoods] = useState([]);
    useEffect(()=>{
        if(user?.email){
            fetch(`http://localhost:5000/food/${user?.email}`)
            .then((res)=>res.json())
            .then((data)=>{
                setFoods(data);
            })
        }
    },[user?.email])
    console.log(foods);
    return (
        <div>
            <h3>My Added Food Items</h3>
        </div>
    );
};

export default MyFoodItems;