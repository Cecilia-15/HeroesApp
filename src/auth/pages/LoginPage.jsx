import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import '../../../src/styles.css'

export const LoginPage = () => {

  const navigate = useNavigate();
  const { login } = useContext( AuthContext )

  const onLogin = () => {

    login('Ceci Fontana');
   
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="containerLogin">
      <div className="loginText">
        <h1>LoginPage</h1>
        <hr />
      </div>

      <div className="loginButton">
        <button className="button button1" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
