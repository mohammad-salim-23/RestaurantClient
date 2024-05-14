import { createBrowserRouter } from "react-router-dom";
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
import FoodDetails from "../components/FoodDetails";
import Purchase from "../components/Purchase";
import PrivateRoute from "../components/Private/PrivateRoute";
import UpdateFood from "../Pages/UpdateFood";
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
          fetch(`https://assignment-11-server-side-lake.vercel.app/food`),
      },
      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>,
        loader: () =>
          fetch(`https://assignment-11-server-side-lake.vercel.app/food`),
      },
      {
        path: "/details/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-lake.vercel.app/food/${params.id}`
          ),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <Purchase></Purchase>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-lake.vercel.app/food/${params.id}`
          ),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
        loader: () =>
          fetch(`https://assignment-11-server-side-lake.vercel.app/food`),
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
        path: "/myFood",
        element: (
          <PrivateRoute>
            <MyFoodItems></MyFoodItems>
          </PrivateRoute>
        ),
      },
      {
        path: "/myOrderedFood",
        element: (
          <PrivateRoute>
            <MyOrderedFood></MyOrderedFood>
          </PrivateRoute>
        ),
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
            `https://assignment-11-server-side-lake.vercel.app/food/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
