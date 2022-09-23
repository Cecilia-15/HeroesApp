import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmail } from '../../store/auth/thunks'

const formData = {
  email: '',
  password: '',
  displayName: '',
}


const formValidations = {
  email: [
    [(value) => value.includes('@'), "El correo debe tener un @"],
    [
      (value) => value.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
      ), "El correo debe tener formato valido"
    ],
  ],
  password: [[(value) => value.length >= 6, 'El password debe contener al menos 6 caracteres']], 
  displayName: [[(value) => value.length >= 1, 'El nombre es obligatorio' ]],
}

export const Register = () => {
  const dispatch = useDispatch()

  const [formSubmited, setFormSubmited] = useState(false)

  const navigate = useNavigate()

  const { 
    formState, 
    displayName, 
    email, 
    password, 
    onInputChange, 
    isFormValid, 
    displayNameValid, 
    passwordValid, 
    emailValid 
  } = useForm(formData, formValidations)


  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmited(true)
  
    if(!isFormValid) return

    dispatch(startCreatingUserWithEmail(formState))
    navigate("/", {
      replace: true,
    })
  }



  const { register } = useContext( AuthContext )


  return (
    <section className="containerRegister">
        <h1>Registro</h1>
        <hr />
        <form onSubmit={onSubmit} className="formRegister">
            <input 
              type="text"
              placeholder="username"
              name="displayName"
              value={formState.displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmit}
            />

            <input 
              type="text" 
              placeholder="email"
              name="email"
              value={formState.email}
              onChange={onInputChange}
              error={!!emailValid}
            />

            <input 
              type="password"
              placeholder="password"
              name="password"
              value={formState.password} 
              onChange={onInputChange}
              error={!!passwordValid}
            />

            <button type="submit" disabled={!isFormValid && formSubmited} className="button">Register</button>
            <button className="button" >
              <Link to="/login" className="link" >
                Ya tengo cuenta
              </Link>
            </button>
        </form>
    </section>
  )
}
