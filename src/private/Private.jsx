import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

export default function Private({ children }) {
    const location = useLocation();
    const { User, loading } = useContext(AuthContext);
    
    if (User) { return children }

    return <Navigate to={'/Login'} state={location.pathname} replace />
}
