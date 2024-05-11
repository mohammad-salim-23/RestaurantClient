import { useContext } from "react";
import { AuthContext } from "../../components/AuthContext/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
const AddFoodItem = () => {
    const currentDate = new Date().toISOString().slice(0, 10); 
  const { user } = useContext(AuthContext);
  const handleAddFood=e=>{
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
    const email  = form.email.value;
    const purchaseQuantity = form.
    purchaseQuantity.value;
   const newFood={
    name,image,price,category,made_by,origin,description,quantity,email,
    purchaseQuantity
   }
    console.log(newFood);
    fetch(`http://localhost:5000/food`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(newFood)
    })
    .then(res=>res.json())
    .then((data)=>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: "Success!",
                text: "Coffee Added Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              }).then(()=>{
                form.reset();
              })
        }
    })
  }
  return (
   <div>
    <h2 className="text-5xl font-bold text-center mt-2 mb-2">Add Food</h2>
     <div className="flex justify-center items-center">
       
       <div className="flex-1 mb-52">
      <img src="https://img.freepik.com/free-photo/side-view-hand-holding-burger_23-2149834253.jpg?t=st=1715419680~exp=1715423280~hmac=fafe36ceea357466970d9646676d01f5d62c803dee0d14c4c504285cd7829f74&w=360" alt="" />
  </div>
    <div className="flex justify-center flex-1 p-5">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleAddFood} className="card-body m-0 w-96">
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
              <span className="label-text">purchaseQuantity</span>
            </label>
            <input
              type="number"
              name="purchaseQuantity"
              placeholder="purchaseQuantity"
              value= "0"
              className="input input-bordered"
              readOnly
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
              readOnly
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
          <input className="btn bg-orange-400 btn-outline" type="submit" value="Add Item" />
        </form>
      </div>
    </div>
 
  </div>
   </div>

  );
};

export default AddFoodItem;
