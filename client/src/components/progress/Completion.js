import React from "react";
import { useSelector } from "react-redux";

const Completion = () => {
  const courses = useSelector((state) => state.courses.value);

  const courseTotalHours = courses.map((course) => {
    return parseInt(course.content_info, 10);
  });
  // console.log("course total hours:", courseTotalHours);

  const totalHours = courseTotalHours.reduce((a, b) => a + b, 0);
  // console.log("total hours:", totalHours);

  const completionRatio = courses.map((course) => {
    return course.completion_ratio / 100;
  });
  // console.log("completion ratio:", completionRatio);

  const hoursCompleted = courseTotalHours.map(
    (value, index) => value * completionRatio[index]
  );
  const totalHoursCompleted = hoursCompleted.reduce((a, b) => a + b, 0);
  // console.log("total hours completed:", totalHoursCompleted);

  const totalHoursRemaining = totalHours - totalHoursCompleted;
  // console.log("hours remaining:", totalHoursRemaining);

  const daysRemaining = (totalHoursRemaining * 3) / 4;
  // console.log("days remaining:", daysRemaining);

  // const today = new Date();
  // console.log("today", today);

  const completion = new Date();
  completion.setDate(completion.getDate() + daysRemaining);

  const date = completion.toISOString().substring(0, 10);

  return <div>{`Estimated Completion: ${date}`}</div>;
};

export default Completion;
