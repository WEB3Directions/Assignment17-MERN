import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Donor from "../pages/Donor";
import { Private_Routes } from "./Private_Routes";
import { Public_Routes } from "./Public_Routes";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase-config";
import { CircularProgress } from "@mui/material";
import { set_user_auth } from "../store/slices/user_auth_slice";
// import { Home } from "../pages/Home";



const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>

    
      {/* <Route path="/" element={<Home />} /> */}

      

      <Route element={<Private_Routes />}>
        <Route path="donor" element={<Donor />} />
        
      </Route>

      <Route element={<Public_Routes />}>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Route>

  )
);

export const Router_App = () => {
  const dispatch = useDispatch();
  const user_auth_state = useSelector((state) => state.user_auth);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        dispatch(set_user_auth({ data: {}, auth: true }));
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(set_user_auth({ data: {}, auth: false }));
      }
    });
  }, []);

  return (
    <>
      {user_auth_state.auth_check_loading ? (
        <div className="h-[100dvh] grid place-items-center">
          <CircularProgress />
        </div>
      ) : (
        <RouterProvider router={router} />
        
      )}
      
    </>
  );
};
