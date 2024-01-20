import React from 'react'
import '../styles/Userprofile.css'
import Logo from '../core/logo/logo'
import Form from 'react-bootstrap/Form';

export default function Userprofile() {
  return (
    <>
    <div className="upupperrec">
      <div className="profileheader">
        <Logo/>
        <div className="upprofiletext">
          <p className="uptext"> Dianne Russell </p>
        </div>
      </div>
      <div className="upcontentbox">
      <div className="upform">
        <div className="upformtext">
          <h>Profile Picture</h> 
          <div className="upprofilepic">
            <img src='assets/profilepic.png' alt="" className='upprofilepicimg'/>
            <div className="camera-container">
              <img src='assets/camera.png' alt = "" className='upcamerapic'/>
            </div>
          </div>
        </div>
        <div className="upformcontent1">
          <Form.Label className='upformtext'>Full Name</Form.Label>
          <Form.Control type="email" placeholder="Full Name" className='upformbox'/>
        </div>
        <div className="upformcontent2">
          <Form.Label className='upformtext'>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" className='upformbox'/>
        </div>
        <div className="upformcontent3">
          <Form.Label className='upformtext'>Areas of Interest</Form.Label>
          <Form.Control type="email" placeholder="Areas of Interest" className='upformbox'/>
        </div>
        <div className="upformcontent4">
          <Form.Label className='upformtext'>Reviews</Form.Label>
          <Form.Control type="email" placeholder="Reviews" className='upformbox'/>
        </div>
      </div>
      <div className="coursesenrolledbox">
        <div className="coursecontainer1">
          <p className="courseenrolledtxt">Courses Enrolled </p>
          <div className="upcoursebox1">
            <div className="upcourse1">
              <img src="assets/upcrse1.png" alt="" className="upcrse1img" />
              <h> Learn Python Programming in 7 Days </h>
            </div>
          </div>
          <div className="upcoursebox2">
            <div className="upcourse2">
              <img src="assets/upcrse3.png" alt="" className="upcrse2img" />
              <h> Advance Photography Course </h>
            </div>
          </div>
        </div>
        <div className="coursecontainer2">
          <div className="upcoursebox3">
            <div className="upcourse3">
              <img src="assets/upcrse2.png" alt="" className="upcrse3img" />
              <h> Complete Web Design Course </h>
            </div>
          </div>
          <div className="upcoursebox4">
            <div className="upcourse4">
              <img src="assets/upcrse4.png" alt="" className="upcrse1img" />
              <h> Learn CMS Development </h>
            </div>
          </div>
          <div className="savechangesbtn">
            <button className='btnsaveChanges'>Save Changes </button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}
