import React from 'react';
import './courseBox.css'

export default function CourseComponent({ imageSrc, courseTitle, courseCount, isFirstCourse,link }) {
    const courseStyles = isFirstCourse ? {} : { marginTop: '50px' };

    const handleCardClick = () => {
      if (link) {
        // Redirect to the specified URL
        window.location.href = link;
      }
    };
  

  return (
    <div className="course" style= {courseStyles} onClick={handleCardClick}>
      <div className="box">
        <div className="vector">
          <img src={imageSrc} alt="" className="c" />
        </div>
      </div>
      <div className="ctext">
        <h1 className="coursetext">{courseTitle}</h1>
        <p className="subtext">{`${courseCount}+ courses available`}</p>
      </div>
    </div>
  );
};