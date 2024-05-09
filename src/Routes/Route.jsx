import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import MyFoodItems from "../Pages/MyProfule/MyFoodItems";
import MyOrderedFood from "../Pages/MyProfule/MyOrderedFood";
import AddFoodItem from "../Pages/MyProfule/AddFoodItem";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/allFoods",
          element:<AllFoods></AllFoods>
        },
        {
          path:"/gallery",
          element:<Gallery></Gallery>
        },
        {
          path:"/signin",
          element:<Login></Login>

        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:'/myFood',
          element:<MyFoodItems></MyFoodItems>
        },
        {
          path:"/myOrderedFood",
          element:<MyOrderedFood></MyOrderedFood>
        },
        {
          path:"/addFood",
          element:<AddFoodItem></AddFoodItem>
        }
      ]

    },
  ]);
  export default router;