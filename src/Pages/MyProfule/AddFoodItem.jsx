import { useContext } from "react";
import { AuthContext } from "../../components/AuthContext/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Helmet } from "react-helmet-async";

const AddFoodItem = () => {
  const { user } = useContext(AuthContext);

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.foodname.value;
    const image = form.photo.value;
    const price = form.price.value;
    const description = form.description.value;

    const newFood = { name, image, price, description };
    console.log(newFood);

    fetch("https://api.royalcrowncafebd.com/food", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Food Item Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          }).then(() => {
            form.reset();
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>RoyalCrown | AddFood</title>
      </Helmet>
      <h2 className="text-5xl font-bold text-center mt-2 mb-2">Add Food</h2>
      <div className="flex justify-center items-center">
        <div className="flex-1 mb-52">
          <img
            src="https://img.freepik.com/free-photo/side-view-hand-holding-burger_23-2149834253.jpg"
            alt="Food Item"
          />
        </div>
        <div className="flex justify-center flex-1 p-5">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAddFood} className="card-body m-0 w-96">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Name</span>
                </label>
                <input type="text" name="foodname" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" name="price" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input type="text" name="description" className="input input-bordered" required />
              </div>
              <input className="btn bg-orange-400 btn-outline" type="submit" value="Add Item" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoodItem;
