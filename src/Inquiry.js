import React, { useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {getInquiries} from './redux/course.slice'
 
function Inquiry() {
  let dispatch = useDispatch();
  let {enquiry} = useSelector((state)=> state.courseApp)
  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.get("http://localhost:3004/enquiries");
        dispatch(getInquiries(response.data));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchInquiries();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>All Inquiries</h1>
      <pre>{JSON.stringify(enquiry, null, 2)}</pre>
    </div>
  );
}

export default Inquiry;
