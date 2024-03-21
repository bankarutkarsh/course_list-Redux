import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, setSel, setForm, setEnquiryform } from "./redux/course.slice";

function App() {
  let dispatch = useDispatch();
  let { courses, sel, form, Enquiryform } = useSelector((state) => state.courseApp);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3004/courses");
        dispatch(getCourses(response.data));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const name = useRef(null);
  const email = useRef(null);
  const mobile = useRef(null);
  const course = useRef(null);
  const qualification = useRef(null);
  const doubts = useRef(null);

  const saveUserData = () => {
    let newEnquiry = {
      name: name.current.value,
      email: email.current.value,
      mobile: mobile.current.value,
      course: course.current.value,
      qualification: qualification.current.value,
    };
    axios
      .post("http://localhost:3004/enquiries", newEnquiry)
  };

  const saveDoubts = () => {
    let details = {
      name: name.current.value,
      email: email.current.value,
      mobile: mobile.current.value,
      course: course.current.value,
      qualification: qualification.current.value,
      doubts: doubts.current.value
    }
    axios.post("http://localhost:3004/doubts", details)
  }

  return (
    <div className="App">
      <h1>Courses List</h1>
      <Link to="/allInquires">Goto All Inquiries</Link>
      <br />
      <Link to="/allDoubts">See Doubts</Link>
      {courses &&
        courses.map((i) => (
          <section className="blog-area-view">
            <section className="blog-area-view-text">
              <h2 className="title">{i.course_title}</h2>
              <p className="desc">{i.course_description}</p>
              <p className="desc">{i.duration}</p>
              <p className="desc">{i.tuition_fee}</p>
              <p className="author">- {i.instructor}</p>
              <button
                className="Inquiry"
                onClick={() => {
                  dispatch(setForm(!form));
                  dispatch(setSel(i.course_title));
                }}
              >
                Enquire
              </button>
              <button
                className="Enquiry"
                onClick={() => {
                  dispatch(setEnquiryform(!Enquiryform));
                  dispatch(setSel(i.course_title));
                }}
              >
                Ask a Doubt/Enquiry!
              </button>
            </section>
            <img
              className="image-preview-view"
              src={i.image_link}
              alt={i.course_title}
            />
          </section>
        ))}

      {form && (
        <section className="pop-registration">
          <section className="user-registration">
            <form action="#">
              <h1>Inquiry Form</h1>
              <div>
                <label htmlFor="">Name</label>
                <input
                  ref={name}
                  type="text"
                  id="fullName"
                  placeholder="Enter FullName"
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  ref={email}
                  type="text"
                  id="email"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label htmlFor="">Mobile</label>
                <input
                  ref={mobile}
                  type="text"
                  id="mobile"
                  placeholder="Enter Mobile"
                />
              </div>
              <div>
                <label htmlFor="">Course</label>
                <select
                  id="course"
                  name="course"
                  placeholder="Select a Course"
                  ref={course}
                >
                  {courses &&
                    courses.map((i) => (
                      <option
                        key={i.course_title}
                        value={i.course_title}
                        selected={sel === i.course_title}
                      >
                        {i.course_title}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label htmlFor="">Qualification</label>
                <input
                  ref={qualification}
                  type="text"
                  id="qualification"
                  placeholder="Enter Your Qualification"
                />
              </div>
              <div>
                <button
                  onClick={() => {
                    saveUserData();
                    dispatch(setForm(!form));
                  }}
                  type="button"
                  id="save"
                  className="btn btn-success"
                >
                  Save
                </button>
                <button
                  onClick={() => dispatch(setForm(!form))}
                  type="button"
                  className="cancel btn btn-danger"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </section>
      )}

      {Enquiryform && (
        <section className="pop-registration">
          <section className="user-registration">
            <form action="#">
              <h1>Enquiry</h1>
              <div>
                <label htmlFor="">Name</label>
                <input
                  ref={name}
                  type="text"
                  id="fullName"
                  placeholder="Enter FullName"
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  ref={email}
                  type="text"
                  id="email"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label htmlFor="">Mobile</label>
                <input
                  ref={mobile}
                  type="text"
                  id="mobile"
                  placeholder="Enter Mobile"
                />
              </div>
              <div>
                <label htmlFor="">Course</label>
                <select
                  id="course"
                  name="course"
                  placeholder="Select a Course"
                  ref={course}
                >
                  {courses &&
                    courses.map((i) => (
                      <option
                        key={i.course_title}
                        value={i.course_title}
                        selected={sel === i.course_title}
                      >
                        {i.course_title}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label htmlFor="">Qualification</label>
                <input
                  ref={qualification}
                  type="text"
                  id="qualification"
                  placeholder="Enter Your Qualification"
                />
              </div>
              <div>
                <label htmlFor="">Doubts</label>
                <input
                  ref={doubts}
                  type="text"
                  id="doubts"
                  placeholder="Ask Your Questions"
                />
              </div>
              <div>
                <button
                  onClick={() => {
                    saveDoubts();
                    dispatch(setEnquiryform(!Enquiryform));
                  }}
                  type="button"
                  id="save"
                  className="btn btn-success"
                >
                  Save
                </button>
                <button
                  onClick={() => dispatch(setEnquiryform(!Enquiryform))}
                  type="button"
                  className="cancel btn btn-danger"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </section>
      )}
    </div>
  );
}

export default App;
