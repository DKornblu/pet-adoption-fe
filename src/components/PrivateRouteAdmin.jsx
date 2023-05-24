import React, { useContext } from 'react'
import { UsersContextInstance } from '../context/UsersContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const{token, isAdmin} = useContext(UsersContextInstance)

  return (
    <div className='privateRoute'>
        {(token && isAdmin) ? children : <Navigate to='/'/>}
    </div>
  )
}

export default PrivateRoute