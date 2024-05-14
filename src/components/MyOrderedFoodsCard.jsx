import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const MyOrderedFoodsCard = ({ order, orders, setOrder }) => {
  console.log(order);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-11-server-side-lake.vercel.app/purchase/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("response ", data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = orders.filter((ord) => ord._id !== _id);
              setOrder(remaining);
            }
          });
      }
    });
  };
  const { _id } = order;
  return (
    <div>
      <Helmet>
        <title>Yummy | MyOrder</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div>
        <div className="card card-side bg-base-100 shadow-xl h-96">
          <figure>
            <img className="w-96" src={order.image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-xl ">{order.foodname}</h2>
            <p className="font-semibold">price: {order.price}$</p>
            <p className="font-medium">Buyer Name: {order.name}</p>
            <h4>Buying Date: {order.currentDate}</h4>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-outline bg-primaryColor"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderedFoodsCard;
