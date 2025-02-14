import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddFoodItem from "../Pages/MyProfule/AddFoodItem";
import FoodDetails from "../components/FoodDetails";
import PrivateRoute from "../components/Private/PrivateRoute";
import UpdateFood from "../Pages/UpdateFood";
import AboutUs from "../components/AboutUs";
import Admin from "../Pages/Admin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(`https://api.royalcrowncafebd.com`),
      },
      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>,
        loader: () =>
          fetch(`https://api.royalcrowncafebd.com/food`),
      },
      {
        path: "/details/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(
            `https://api.royalcrowncafebd.com/food/${params.id}`
          ),
      },
      
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
       
      },
      {
        path: "/signin",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      
      {
        path: "/addFood",
        element: (
        
           <PrivateRoute>
             <AddFoodItem></AddFoodItem>
           </PrivateRoute>
       
        ),
      },
      {
        path: "/updateFood/:id",
        element: <UpdateFood></UpdateFood>,
        loader: ({ params }) =>
          fetch(
            `https://api.royalcrowncafebd.com/food/${params.id}`
          ),
      },
      {
        path:"/admin",
        element:<Admin></Admin>
      }
    ],
  },
]);
export default router;
