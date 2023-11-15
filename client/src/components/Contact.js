import React, { useState } from 'react'

export default function Contact() {



  const [credentials, setCredentials] = useState({name: "" , email: "" , number: "" , subject: "", message: ""});

  const handleChange = (e)=>{
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
}

    

  return (
    <>
      <div className="contactSection section contact" id="contact">
        
        <h1 className="sectionh1">
            Contact&nbsp; <p>Us!</p>
        </h1>
          <form>
            <div className="input-box">
              <input value={credentials.name} onChange={handleChange} type="text" name="name" id="name" placeholder='Full Name' required tabIndex={1} />
              <input value={credentials.email} onChange={handleChange} type="email" name="email" id="email" placeholder='Email Address' required tabIndex={2} />
            </div>

            <div className="input-box">
              <input value={credentials.number} onChange={handleChange} type="number" name="number" id="number" placeholder='Mobile Number' tabIndex={3} />
              <input value={credentials.subject} onChange={handleChange} type="text" name="subject" id="subject" placeholder='Email Subject' tabIndex={4} />
            </div>

            <textarea value={credentials.message} onChange={handleChange} name="message" id="" cols="30" rows="10" placeholder='Your Message' required tabIndex={5}></textarea>
            <div className="btn">
              Upload Image
            </div>

          </form>
      </div>
    </>
  )
}
