import React from 'react'
import Logo from '../../../core/logo/logo'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export const Navbar = () => {
  const { logout } = useLogout()
  const { admin } = useAuthContext()

  const handleClick = () => {
    logout()
}

  return (
    <div className="admin_header">
        <div className="headerleft">
          <Link to= "/admin">
                <Logo/>
          </Link>
        </div>
        <nav>
          {!admin && (
          <div>
            <Link to ="/admin/login" className='nav_login'>Login</Link>
            <Link to ="/admin/signup" className='nav_signup'>Sign Up</Link>
          </div>
          )}

          {admin && (
          <div>
            <span>{admin.email}</span>
            <button onClick={handleClick} className='nav_logout'> Logout  </button>
          </div>
          )}

        </nav>
    </div>
  )
}