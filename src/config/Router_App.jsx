import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import Signup from "../pages/Signup";
  import Login from "../pages/Login";
  import Products from "../pages/Products";
  import Product_Details from "../pages/Product_Details";
  
  
  
 
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />     
        <Route path="Products" element={<Products />} />
        <Route path="item/:id" element={<Product_Details />} />
  

      </Route>
    )
  );
  
  const Router_App = () => {
    return <RouterProvider router={router} />;
  };
  
  export { Router_App };