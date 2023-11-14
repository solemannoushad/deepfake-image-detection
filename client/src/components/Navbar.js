import React from 'react'

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
        <div className="logo">Brand <p>&nbsp;Name</p></div>
        <ul className="menu">
            <li><a className='active' href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Team</a></li>
            <li><a href="/">Contact</a></li>
            <li className="menuBtn">Upload</li>
        </ul>
    </nav>
  )
}

export default Navbar
