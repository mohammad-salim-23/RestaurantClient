import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Admin = () => {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restaurent-server-sigma.vercel.app/food")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Foods:", data); // ✅ Check what is coming from backend
        setFoods(data || []);
      })
      .catch((error) => console.error("Error fetching food data:", error));
  }, []);
  
  console.log(foods);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://restaurent-server-sigma.vercel.app/food/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setFoods(foods.filter((food) => food._id !== id));
              Swal.fire("Deleted!", "The food item has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Admin Dashboard</h2>

      {/* Add Food Button */}
      <div className="flex justify-center mb-6">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/addFood")}
        >
          ➕ Add Food Item
        </button>
      </div>

      {/* Food List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.map((food) => (
          <div key={food._id} className="border p-4 rounded shadow-md">
            <img src={food.image} alt={food.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-2">{food.name}</h3>
            <p className="text-lg text-gray-600">Price: ${food.price}</p>
            <p className="text-sm text-gray-500">{food.description}</p>
            <div className="flex justify-between mt-3">
              {/* Update Food Button */}
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => navigate(`/updateFood/${food._id}`)}
              >
                ✏️ Update
              </button>

              {/* Delete Food Button */}
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(food._id)}
              >
                ❌ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
