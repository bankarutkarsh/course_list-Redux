import React, { useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {getDoubts} from './redux/course.slice'
 
function Doubts() {
  let dispatch = useDispatch();
  let {doubts} = useSelector((state)=> state.courseApp)
  useEffect(() => {
    const fetchDoubts = async () => {
      try {
        const response = await axios.get("http://localhost:3004/doubts");
        dispatch(getDoubts(response.data));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchDoubts();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>All Doubts</h1>
      <pre>{JSON.stringify(doubts, null, 2)}</pre>
    </div>
  );
}

export default Doubts;
