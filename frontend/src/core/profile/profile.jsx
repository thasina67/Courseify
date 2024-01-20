import React from 'react'
import './profile.css'
import profileicon from './account.png'
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <Link to = "/my_profile">
        <img src= { profileicon } alt='' className='profilepic' title='My Profile'/>
      </Link>
  )
}
