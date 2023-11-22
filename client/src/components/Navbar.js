import React, { useEffect, useState } from 'react'

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
    navbar.classList.toggle('sticky' , scrollY > 100);
  } , [scrollY])

  return (
    <nav id="navbar" className="navbar">
        <div className="logo">Brand <p>&nbsp;Name</p></div>
        <ul className="menu">
            <li><a className='active' href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="menuBtn">Upload</li>
        </ul>
    </nav>
  )
}

export default Navbar
