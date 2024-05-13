import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../components/AuthContext/AuthProvider";
import { Helmet } from "react-helmet-async";
const UpdateFood = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const { user } = useContext(AuthContext);
  const food = useLoaderData();
  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.foodname.value;
    const image = form.photo.value;
    const price = form.price.value;
    const category = form.category.value;
    const made_by = form.made_by.value;
    const origin = form.origin.value;
    const description = form.description.value;
    const quantity = form.quantity.value;
    const email = form.email.value;
    const updateFood = {
      name,
      image,
      price,
      category,
      made_by,
      origin,
      description,
      quantity,
      email,
    };
    fetch(
      `https://assignment-11-server-side-lake.vercel.app/food/${food._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateFood),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Craft Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Yummy | UpdatedFood</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h3 className="text-3xl font-bold text-center mt-3 mb-3">
        Update Information
      </h3>
      <div className="flex justify-center flex-1 p-5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUpdateFood} className="card-body m-0 w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                name="foodname"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Made By</span>
              </label>
              <input
                type="text"
                name="made_by"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Origin</span>
              </label>
              <input
                type="text"
                name="origin"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo"
                className="input input-bordered"
                required
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
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
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
            <input
              className="btn bg-orange-400 btn-outline"
              type="submit"
              value="Update Item"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
