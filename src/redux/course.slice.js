import { createSlice } from '@reduxjs/toolkit';

const CourseSlice = createSlice({
    name: "CourseSlice",
    initialState:{
        courses: [],
        sel: null,
        form: false,
        Enquiryform: false,
        enquiry: [],
        doubts: []
    },
    reducers: {
        getCourses(state, action){
            state.courses = action.payload;
        },
        getInquiries(state,action){
            state.enquiry = action.payload;
        },
        getDoubts(state,action){
            state.doubts = action.payload;
        },
        setSel(state,action){
            state.sel = action.payload;
        },
        setForm(state,action){
            state.form = action.payload;
        },
        setEnquiryform(state,action){
            state.Enquiryform = action.payload;
        }
    }
});

export default CourseSlice;
export const {getCourses,getInquiries,getDoubts,setSel,setForm,setEnquiryform} = CourseSlice.actions;