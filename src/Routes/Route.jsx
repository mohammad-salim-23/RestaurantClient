import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../Pages/ErrorPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>

    },
  ]);
  export default router;