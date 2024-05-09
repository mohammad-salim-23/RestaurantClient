import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        }
      ]

    },
  ]);
  export default router;