import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route.jsx";
import AuthProvider from "./components/AuthContext/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </React.StrictMode>
    ,
  </div>
  //  <div className='max-w-7xl mx-auto'>
  //     <React.StrictMode>
  //     <AuthProvider>
  //       <RouterProvider router={router} />
  //     </AuthProvider>
  //   </React.StrictMode>,
  // </div>
);
