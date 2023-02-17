import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from '../../components/icons/icons';
import "./courses.css";
import courses from "./courses/courses";

function Courses() {
  return (
    <div className="center-div page">
      <div className="courses-container">
        {courses.map(course => {
          if (course.released) {
            return (
              <div className="course-showcase">
                {course.imageFileName && <div className="course-image" style={{ backgroundImage: `url('${course.imageFileName}')` }} />}
                <div className="course-info-div">
                  <div>
                    <div className="course-title">{course.title ? course.title : course.name}</div>
                    {course.shortDesc}
                    <div className="course-info">
                      <Clock />
                      {course.totalMinutes ? Math.round(course.totalMinutes/60) : 0} hours
                    </div>
                  </div>
                  <div className="course-button-div">
                    <Link to={`/course/${course.name}`}>
                      <button className="nav-button">Go to course</button>
                    </Link>
                  </div>
                </div>
            </div>
            )
          } else {
            return null
          }
        })}
      </div>
    </div>
  );
}

export default Courses;
