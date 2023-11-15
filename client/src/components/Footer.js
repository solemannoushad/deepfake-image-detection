import React from 'react'
import video from '../assets/video (2160p) (2).mp4'

const Footer = () => {
  return (
    <div className="footer">
        <video className='footerBack'>
            <source src={video} type="video/mp4"/>
        </video>
        <div className="fade"></div>
    </div>
  )
}

export default Footer
