import { configureStore } from "@reduxjs/toolkit";
import CourseSlice from "./course.slice";

const store = configureStore({
    reducer: {
        courseApp: CourseSlice.reducer,
    },
});

export default store;