import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useIsAuthenticated } from '../hooks/useIsAuthenticated'

export const PrivateRute = ({children}) => {

    const { isLogged } = useIsAuthenticated();

    return (isLogged)
      ? children
      : <Navigate to='/login' />
  
}
