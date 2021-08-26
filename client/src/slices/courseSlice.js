import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "../actions/fetchCourses";

const initialState = {
  value: [],
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  extraReducers: {
    [fetchCourses.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default courseSlice.reducer;
