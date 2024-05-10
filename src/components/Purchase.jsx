import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthContext/AuthProvider";

const Purchase = () => {
    const food = useLoaderData();
    const { user } = useContext(AuthContext);
    const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
    
    const handlePurchase=e=>{
        e.preventDefault();
    }
    return (
        <div className="flex justify-center">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handlePurchase} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <input type="text" placeholder={food.name} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder={food.price} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" placeholder={food.quantity} className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" placeholder={user.displayName} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="text" placeholder={user.email} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Purchase Date</span>
                        </label>
                        <input type="text" placeholder={currentDate} className="input input-bordered" readOnly />
                    </div>
                    <input className="btn btn-outline" type="submit" value="purchase" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;
