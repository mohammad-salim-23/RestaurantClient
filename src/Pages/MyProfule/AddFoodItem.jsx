import { useContext, useState } from "react";
import { AuthContext } from "../../components/AuthContext/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddFoodItem = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddFood = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.target;
    const name = form.foodname.value;
    const price = form.price.value;
    const description = form.description.value;
    const imageFile = form.photo.files[0];

    if (!imageFile) {
      Swal.fire("Error", "Please select an image file", "error");
      setLoading(false);
      return;
    }

    // Upload Image to ImgBB
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const imgUploadRes = await fetch(image_hosting_api, {
        method: "POST",
        body: formData,
      });

      const imgData = await imgUploadRes.json();
      if (imgData.success) {
        const imageUrl = imgData.data.url;

        // Create new food item
        const newFood = { name, image: imageUrl, price, description };

        const res = await fetch("https://api.royalcrowncafebd.com/food", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(newFood),
        });

        const data = await res.json();
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
      } else {
        Swal.fire("Error", "Image upload failed", "error");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoading(false);
    }
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
                  <span className="label-text">Photo</span>
                </label>
                <input type="file" name="photo" className="file-input file-input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input type="text" name="description" className="input input-bordered" required />
              </div>
              <button className="btn bg-orange-400 btn-outline" type="submit" disabled={loading}>
                {loading ? "Uploading..." : "Add Item"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoodItem;
