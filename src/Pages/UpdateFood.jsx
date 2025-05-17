
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

import { Helmet } from "react-helmet-async";

const UpdateFood = () => {

  const food = useLoaderData();
 console.log("loaded food", food);
  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.foodname.value;
    const image = form.photo.value;
    const price = form.price.value;
    const description = form.description.value;

    const updateFood = { name, image, price, description };

    fetch(`https://api.royalcrowncafebd.com/food/${food.foods._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Food Item Updated Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>RoyalCrown | Update Food</title>
      </Helmet>
      <h3 className="text-3xl font-bold text-center mt-3 mb-3">
        Update Food Information
      </h3>
      <div className="flex justify-center p-5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUpdateFood} className="card-body w-96">
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
              <textarea name="description" className="textarea textarea-bordered" required></textarea>
            </div>

            <input className="btn bg-orange-400 btn-outline" type="submit" value="Update Food" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
