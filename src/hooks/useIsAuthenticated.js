import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';

export const useIsAuthenticated = () => {
    const { status } = useSelector( (state) => state.auth )

    const isLogged = useMemo(() => status === 'authenticated', [status]);

  return {isLogged}
}
