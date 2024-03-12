import React, { useState } from "react";
import Input_Field from "../components/Input_Field";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase-config/index";
import { useDispatch, useSelector } from "react-redux";
import { set_user_auth } from "../store/slices/user_auth_slice";


const Login = () => {
  const [data, setData] = useState({});

  const user_data = useSelector((a) => a.user_data);

  console.log(user_data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const change_handle = (e) => {
    const { value, id } = e.target;

    setData({ ...data, [id]: value });
  };


  const submit_handle = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
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
      <h1 className="text-2xl font-bold  mb-4">Welcome To Blood Donation App</h1>
    <div className="bg-bg_color h-[100dvh] grid place-items-center px-3">
      <form
        onSubmit={submit_handle}
        className="bg-white rounded-md max-w-md w-full py-6 px-3 grid grid-cols-2  gap-5"
      >
        <div className="text-primary_color col-span-2 text-center text-3xl font-bold">
          <h1>LOGIN</h1>
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

        <div >
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-center" type="submit">Login</button>
        </div>

        <div className="col-span-2 space-x-1 text-center">
          <span>Don't have account </span>
          <Link to="/signup" className="underline text-primary_color">
            Signup now
          </Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;