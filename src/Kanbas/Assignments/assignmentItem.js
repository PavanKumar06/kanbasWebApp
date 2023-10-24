import './index.css';
import { FaCircle, FaEdit, FaCheckCircle, FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PiDotsSixVerticalBold } from "react-icons/pi";

const AssignmentItem = ({ass}) => {
    return (
        <li className="list-group-item" style={{ borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', padding: '10px' }}>
            <span>
                <div className="wd-flex-row-container" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ width: '10%' }}>
                        <PiDotsSixVerticalBold size={24} style={{ color: '#161717', paddingRight: '10px' }} />
                        <FaEdit size={24} style={{ color: '#05ad19', paddingRight: '10px' }} />
                    </div>
                    <div style={{ width: '100%' }}>
                        <Link to={`/Kanbas/courses/${ass.course}/Assignments/${ass._id}`} className="wd-link-black">
                            <b>{ass.title}</b>
                        </Link>
                        <br />
                        <span style={{ color: 'black' }}>{ass._id} - {ass.title}</span>
                        <br />
                        <span>
                            Multiple Modules | <strong>Due</strong> | 18th Sept, 2023 | 100 Points
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FaCheckCircle size={36} style={{ color: '#0d8604', paddingRight: '10px' }} />
                        <FaEllipsisV style={{ color: '#3c3939' }} />
                    </div>
                </div>
            </span>
        </li>
    );
}

export default AssignmentItem;