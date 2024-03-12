import React, { useState } from "react";
import Input_Field from "../components/Input_Field";

import { Link, useNavigate } from "react-router-dom";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { set_user_auth } from "../store/slices/user_auth_slice";







const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({});

  const change_handle = (e) => {
    const { value, id } = e.target;

    setData({ ...data, [id]: value });
  };


 

    // console.log(data)

    //   createUserWithEmailAndPassword(auth, data.email, data.password)
    //     .then((userCredential) => {
    //       // Signed up
    //       const user = userCredential.user;

    //       console.log('user', user)
    //       // ...
    //   })
    //   .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       console.log('errorMessage', errorMessage)
    //       // ..
    //     });
    // };

    const submit_handle= async (e) => {
      e.preventDefault();


      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        dispatch(set_user_auth(true));
        navigate("/donor");
        console.log(userCredential.user);
      } catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
        dispatch(set_user_auth(false));
      }

    };
   
  


    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome To Blood Donation App</h1>
        <div className="bg-bg_color h-[100dvh] grid place-items-center px-3">
          <form
            onSubmit={submit_handle}
            className="bg-white rounded-md max-w-md w-full py-6 px-3 grid grid-cols-2  gap-5"
          >
            <div className="text-primary_color col-span-2 text-center text-3xl font-bold">
              <h1>SIGNUP</h1>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input_Field
                id="first_name"
                type="text"
                required={true}
                onChange={change_handle}
                placeholder="First Name"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input_Field
                id="last_name"
                type="text"
                required={true}
                onChange={change_handle}
                placeholder="Last Name"
              />
            </div>

            <div className="col-span-2">
              <Input_Field
                id="username"
                type="text"
                required={true}
                onChange={change_handle}
                placeholder="Username"
              />
            </div>
            <div className="col-span-2">
              <Input_Field
                id="phone_number"
                type="number"
                required={true}
                onChange={change_handle}
                placeholder="Phone Number"
              />
            </div>
            <div className="col-span-2">
              <Input_Field
                id="email"
                type="email"
                required={true}
                onChange={change_handle}
                placeholder="Email Address"
              />
            </div>
            <div className="col-span-2">
              <Input_Field
                id="password"
                required={true}
                onChange={change_handle}
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="col-span-2">
              <Input_Field
                id="blood"
                required={true}
                onChange={change_handle}
                type="text"
                placeholder="Enter your Blood Group"
              />
            </div>




            <div className="col-span-2">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-center" type="submit">Signup</button>
            </div>

            <div className="col-span-2 space-x-1 text-center">
              <span>Already have account </span>
              <Link to="/" className="underline text-primary_color">
                Login now
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default Signup;