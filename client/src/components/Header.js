import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import video from '../assets/video (2160p) (5).mp4'
import Loading from './Loading'

const Header = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);

  useEffect(() => {
    const uploadImage = async () => {
      if (!selectedImage) {
        return;
      }

      setLoading(true)

      const formData = new FormData();
      formData.append('image', selectedImage);

      try {
        const response = await fetch('http://localhost:8000/api/img/process', {
          method: 'POST',
          body: formData,
        })

        const json = await response.json();
        console.log(json.msg[4])
        if(json.msg[4] == 0){
          setOutput("Deepfaked");
        }else{
          setOutput("Not deepfaked");
        }
        

      } catch (error) {
        console.error('Error during image upload:', error);
      }
    };
    
    // Call uploadImage when selectedImage changes
    if (selectedImage) {
      uploadImage();
    }
  }, [selectedImage]);
  
  useEffect(()=>{
    alert(output)
    setLoading(false)
  } , [output])

  const handleFileChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };




  return (
    <>
      {loading && <Loading/>}
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
        <label htmlFor="file" className="btn">
          Upload Image
        </label>
        <input className='file' type="file" name="file" id="file"
          accept=".jpg, .jpeg, .png"
          multiple={true}
          onChange={handleFileChange}
        />
      </div>
      <Navbar/>
    </>
  )
}

export default Header
