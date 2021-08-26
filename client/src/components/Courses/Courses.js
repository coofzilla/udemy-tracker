import React from "react";
import "./courses.css";
import { useSelector } from "react-redux";
import ProgressBar from "@ramonak/react-progress-bar";

const Courses = () => {
  const courses = useSelector((state) => state.courses.value);

  const renderCourses = () => {
    return courses.map(({ title, image_240x135, completion_ratio, id }) => {
      return (
        <div className="course-card" key={id}>
          <img className="course-img" src={image_240x135} alt="Thumbnail" />

          <div className="course-details">
            <div className="course-title">{title}</div>
            <div className="course-progress">
              <ProgressBar
                completed={completion_ratio}
                labelAlignment="outside"
                labelColor="#5624d0"
                height="5px"
              />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="courses-grid"> {renderCourses()}</div>
    </div>
  );
};

export default Courses;
