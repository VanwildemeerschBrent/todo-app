import React from 'react'
import { Outlet } from 'react-router-dom'

const LoginLayout = () => {
  return (
    <div>
      <p>LoginLayout</p>
      <Outlet />
    </div>
  )
}

export default LoginLayout