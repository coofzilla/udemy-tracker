import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header/Header";
import Courses from "./Courses/Courses";
import { fetchCourses } from "../actions/fetchCourses";


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses());
  });
  return (
    <div>
      <Header />
      <Courses />

    </div>
  );
};

export default App;
