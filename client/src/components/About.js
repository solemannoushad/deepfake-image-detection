import React from 'react'
import img from '../assets/176923.jpg'

const About = () => {
  return (
    <div className="aboutMain section">
        <h1 className="sectionh1">
            About Project
        </h1>
        <div className="aboutContent">
            <div className="text">
                <h2>DeepFake Detection</h2>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit,
                    sed do eiusmod tempor 
                    incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad 
                    minim veniam, quis nostrud 
                    exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </div>
            <div className="img">
                <img src={img} alt="DeepFake Image Detection" />
            </div>
        </div>
    </div>
  )
}

export default About
