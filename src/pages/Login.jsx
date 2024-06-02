import React, { useContext } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleLogged } from "../store/slices/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogged = useSelector((state) => state.login.isLogged);

  console.log(isLogged);

  const toggleLogin = () => {
    dispatch(toggleLogged());
    navigate("/");
  };

  return (
    <div>
      <h1>Login page</h1>
      <Button onClick={toggleLogin}>{!isLogged ? "Log in " : "Log out"}</Button>
    </div>
  );
};

export default Login;
