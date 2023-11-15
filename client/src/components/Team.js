import React from 'react'
import soleman from '../assets/soleman.JPG'
import abdullah from '../assets/abdullah.png'
import zohaib from '../assets/zohaib.jpg'
import Member from './Member'

const Team = () => {
  return (
    <div className="teamMain section">
        <h1 className="sectionh1">
            Our&nbsp; <p>Team</p>
        </h1>
        <div className="teamContent">
          <Member img={abdullah} name={"Muhamad Abdullah"} profession={"Software Developer"}/>
          <Member img={soleman} name={"Soleman Noushad"} profession={"Software Developer"}/>
          <Member img={zohaib} name={"Muhamad Zohaib"} profession={"Software Developer"}/>
        </div>
    </div>
  )
}

export default Team
