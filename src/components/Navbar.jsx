import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav>
          <div className='logo'>
            Logo here
          </div>
            <ul>
                <li> Home </li>
                <li> About us </li>
                <li> Contact </li>
                <li> How it works </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar