import React from 'react'
import Navbar from './Navbar'
import video from '../assets/video (2160p) (2).mp4'

const Header = () => {
  return (
    <>
      <div className="fade"></div>
      <video autoPlay muted loop id="header">
        <source src={video} type="video/mp4"/>
      </video>
      <div className="headerContent">
        <h1 className="headerHeading">Digital Image <p>&nbsp;Processing</p></h1>
        <h1 className="headerHeading">AI Generated Image <p>&nbsp;Detection</p></h1>
        <div className="headerBenefits">
          <div className="row">
            <i class="fa-solid fa-check"></i>
            <p>100% Accurate Result</p>
          </div>
          <div className="row">
            <i class="fa-solid fa-check"></i>
            <p>Deep fake Detection</p>
          </div>
          <div className="row">
            <i class="fa-solid fa-check"></i>
            <p>Quick Processing</p>
          </div>
        </div>
        <div className="btn">
          Upload Image
        </div>
      </div>
      <Navbar/>
    </>
  )
}

export default Header
