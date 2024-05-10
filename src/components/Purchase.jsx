import { useLoaderData } from "react-router-dom";


const Purchase = () => {
    const food = useLoaderData();
    const {name,image,category,price,quantity,_id,made_by,origin,description} = food;
    return (
        <div>
           <h2></h2> 
        </div>
    );
};

export default Purchase;