import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "../../hooks/useForm"
import '../../../src/styles.css'
import { useDispatch, useSelector } from "react-redux"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { Link, Link as RouterLink } from "react-router-dom"
import { Firestore } from "firebase/firestore/lite";
import { useIsAuthenticated } from "../../hooks/useIsAuthenticated";


export const LoginPage = () => {

  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.auth)

  const isChecking = useMemo(() => status === 'checking', [status])

  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
    displayName: ''
  })
  
  const { isLogged } = useIsAuthenticated()

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({email, password}))
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <section className="containerLogin">
      <div className="loginText">
        <h1>LoginPage</h1>
        <hr />
      </div>

      <form onSubmit={onSubmit} className="formLogin">

          <input 
            label="Email"
            type="text" 
            placeholder="email@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <input
            label="password"
            type="password"
            placeholder="password" 
            name="password"
            value={password}
            onChange={onInputChange}
          />
      <div className="loginButton">
        <button className="button button1" type="submit"
        disabled={isChecking}
        >
          Login
        </button>
      </div>
        <button
          type="submit"
          className="button"
          onClick={onGoogleSignIn}
          disabled={isChecking}
        >
          <FaGoogle /> Google
        </button>
        <button className="button">
          <Link to="/register" className="link">
            Crear una cuenta
          </Link>
        </button>
      </form>
    </section>
  );
};
