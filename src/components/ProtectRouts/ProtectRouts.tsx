import React, { JSX } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'
import { Navigate } from 'react-router-dom'

const ProtectRouts = ({children}:{children:JSX.Element}) => {
  
    const user = useSelector((state: RootState) => state.auth.currentUser)
    return user ? children : <Navigate to="/Account"/>
}

export default ProtectRouts