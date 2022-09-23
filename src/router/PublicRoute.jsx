import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { useIsAuthenticated } from '../hooks/useIsAuthenticated'

export const PublicRoute = ({children}) => {

    const { isLogged } = useIsAuthenticated()

  return (!isLogged)
    ? children
    : <Navigate to='/publisher' />
}
