import DashboardTile from './dashboardTile'
import db from "../Database";

function Dashboard() {
    const courses = db.courses;
    return (
        <div className="container.fluid d-flex flex-row flex-wrap wd-paddingtop-20px wd-width-100p">
            {courses.map((course, index) => (
                <DashboardTile key={course._id} course={course} index={index} />
            ))}
        </div>
    );
}
  
export default Dashboard;
    