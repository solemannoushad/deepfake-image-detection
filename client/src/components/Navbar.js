import React, { useEffect, useState } from 'react'
import logo from '../assets/pv-logo.png'
import { Link } from 'react-router-dom';

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
    topBtn.classList.toggle('btnAfter' , scrollY > 250);
  } , [scrollY])

  return (
    <nav id="navbar" className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="menu">
            <li><a href="http://localhost:3000/#header" className='active'>Home</a></li>
            <li><a href="http://localhost:3000/#about">About</a></li>
            <li><a href="http://localhost:3000/#team">Team</a></li>
            <li><a href="http://localhost:3000/#blogs">Blogs</a></li>
            <li><a href="http://localhost:3000/#contact">Contact</a></li>
            <Link to='/signup' className="menuBtn">Join</Link>
        </ul>
    </nav>
  )
}

export default Navbar
