import React from 'react'
import { link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <link to="/"><li>Home</li></link>
            <link to="/About"><li>About</li></link>
            <link to="/login"><li>login</li></link>
        </nav>
    </div>
  )
}

export default Navbar