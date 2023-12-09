import React from 'react'
import Navbar from './Navbar'
import video from '../assets/video (2160p) (5).mp4'

const Header = () => {
  return (
    <>
      <div className="fade"></div>
      <video autoPlay muted loop id="header" className='section'>
        <source src={video} type="video/mp4"/>
      </video>
      <div className="headerContent">
        <h1 className="headerHeading headerHeading1">Digital Image <p>&nbsp;Processing</p></h1>
        <h1 className="headerHeading headerHeading2">AI Generated Image <p>&nbsp;Detection</p></h1>
        <div className="headerBenefits">
          <div className="row">
            <i className="fa-solid fa-check"></i>
            <p>100% Accurate Result</p>
          </div>
          <div className="row">
            <i className="fa-solid fa-check"></i>
            <p>Deep fake Detection</p>
          </div>
          <div className="row">
            <i className="fa-solid fa-check"></i>
            <p>Quick Processing</p>
          </div>
        </div>
        <label for="file" className="btn">
          Upload Image
        </label>
        <input className='file' type="file" name="file" id="file"
          accept=".jpg, .jpeg, .png"
          multiple={true}
        />
      </div>
      <Navbar/>
    </>
  )
}

export default Header
