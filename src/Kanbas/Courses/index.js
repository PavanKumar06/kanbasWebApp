import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import CourseHeader from "./CourseHeader";
import Home from "./Home";
import Assignment from "../Assignments";
import EditAssignment from "../Assignments/EditAssignment";
import Grades from "./Grades";

function Courses({courses}) {
  const { courseId } = useParams();
  console.log(useParams());
  console.log("Courses" + courseId);
  const course = courses.find((course) => course._id === courseId);
  console.log("Courses" + course);
  return (
    <div>
      <CourseHeader course={course} />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "280px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Modules" element={<Modules />} />
            <Route path="/Assignments" element={<Assignment courseId={courseId}/>} />
            <Route path="/Assignments/:assignmentId" element={<EditAssignment />} />
            <Route path="/Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
