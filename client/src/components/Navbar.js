import React, { useEffect, useState } from 'react'
import logo from '../assets/pv-logo.png'

const Navbar = () => {

  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };


  }, []);

  useEffect(() => {
    let navbar = document.querySelector('nav');
    let topBtn = document.querySelector('.topBtn');
    navbar.classList.toggle('sticky' , scrollY > 100);
    topBtn.classList.toggle('btnAfter' , scrollY > 100);
  } , [scrollY])

  return (
    <nav id="navbar" className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="menu">
            <li><a href="#header" className='active'>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
            <label htmlFor="file" className="menuBtn">Upload</label>
        </ul>
        <input className='file' type="file" name="file" id="file"
          accept=".jpg, .jpeg, .png"
          multiple={true}
        />
    </nav>
  )
}

export default Navbar
