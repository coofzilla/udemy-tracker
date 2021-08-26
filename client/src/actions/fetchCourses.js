import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_COURSES } from "./types";
import axios from "axios";

export const fetchCourses = createAsyncThunk(FETCH_COURSES, async () => {
  const response = await axios.get("/courses");
  return response.data.results;
});
