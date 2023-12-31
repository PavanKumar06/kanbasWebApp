import './index.css';
import { Link } from "react-router-dom";
import { FaEllipsisV, FaEdit } from 'react-icons/fa';

function DashboardTile({ course, index, deleteCourse, setCourse }) {
    const classList = ["bg-secondary", "bg-primary", "bg-success", "bg-warning", "bg-info", "bg-danger"];
    const tileClass = classList[index % classList.length];
    return (
        <div className="wd-card-padding col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card">
                <Link to={`/Kanbas/courses/${course._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className={`card-header ${tileClass} wd-card-header-height-140px`}>
                        <i className="float-end wd-white-icon">
                            <FaEllipsisV size={32} />
                        </i>
                    </div>
                    <div className="card-body">
                        <h5 className="wd-card-text-margin-bottom-0px" style={{ minHeight: '50px' }}>
                            {course.number} {course.name}
                        </h5>
                        <p className="card-text wd-card-body-font-20px">
                            {course.number}
                        </p>
                        <p className="wd-card-text-margin-bottom-10px wd-card-body-font-14px">
                            Fall 2023 Semester Full Term
                        </p>
                        <i className="far fa-edit">
                            <FaEdit size={32} />
                        </i>
                        <div>
                            <button
                                className="btn btn-secondary wd-deleteBtn"
                                onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                                }}>
                                Delete
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                                }}>
                                Edit
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default DashboardTile;
