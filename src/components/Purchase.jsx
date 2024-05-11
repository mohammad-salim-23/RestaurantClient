import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthContext/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
const Purchase = () => {
  const food = useLoaderData();
  const { _id } = food;
  const { user } = useContext(AuthContext);
  const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format

  const handlePurchase = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const foodname = formData.get("foodname");
    const price = formData.get("price");
    const quantity = formData.get("quantity");
    const name = formData.get("name");
    const email = formData.get("email");
    if (parseInt(food.quantity) === 0) {
      Swal.fire({
        icon: "error",
        title: "Sorry Sir!",
        text: "This food item not available . ",
        footer: '<a href="#">You try another one , Sir</a>',
      });
      return;
    } else if (parseInt(quantity) > parseInt(food.quantity)) {
      Swal.fire({
        icon: "warning",
        title: "Sorry Sir!",
        text: "This quantity is not available",
        footer:
          '<a href="#">You should decrease the quantity, and please do not worry, sir. Our food items have enough quantity, so you can easily share them with anyone.</a>',
      });
      return;
    } else {
      Swal.fire({
        icon: "success",
        title: "Successfully Your work Saved",
        showClass: {
          popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
        },
        hideClass: {
          popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
        },
      });
      console.log(foodname, price, quantity, name, email, currentDate);
      const info = { foodname, price, quantity, name, email, currentDate };
      fetch(`http://localhost:5000/food/${_id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error: ", error));
    }
  };

  return (
    <div className="flex justify-center">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handlePurchase} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input
              type="text"
              name="foodname"
              value={food.name}
              className="input input-bordered"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              value={food.price}
              className="input input-bordered"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Enter quantity"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={user.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="text"
              name="email"
              value={user.email}
              className="input input-bordered"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Purchase Date</span>
            </label>
            <input
              type="text"
              value={currentDate}
              className="input input-bordered"
              readOnly
            />
          </div>
          <input className="btn btn-outline" type="submit" value="Purchase" />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
