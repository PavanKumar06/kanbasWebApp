import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

function Kanbas() {
  const URL = `${process.env.REACT_APP_BASE_URL}/api/courses`;
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    department: "new Department",
    credits: 3
  });
  const [courses, setCourses] = useState([]);

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
  };

  const deleteCourse = async (course) => {
    await axios.delete(`${URL}/${course._id}`);
    setCourses(courses.filter((c) => c._id !== course._id));
  };

  const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        } else {
          return c;
        }
      })
    );
    setCourse(course)
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
    };

    findAllCourses();
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div style={{ width: "100%", marginLeft: "10px" }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;
