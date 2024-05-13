import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthContext/AuthProvider";
import Swal from "sweetalert2";
import MyOrderedFoodsCard from "../../components/MyOrderedFoodsCard";

const MyOrderedFood = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://assignment-11-server-side-lake.vercel.app/myPurchase/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setOrder(data);
        });
    }
  }, [user?.email]);
  console.log(orders);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {orders.map((order, index) => (
        <MyOrderedFoodsCard
          key={index}
          order={order}
          orders={orders}
          setOrder={setOrder}
        ></MyOrderedFoodsCard>
      ))}
    </div>
  );
};

export default MyOrderedFood;
