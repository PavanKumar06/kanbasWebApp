import db from '../Database';
import './index.css';
import AssignmentItem from './assignmentItem';
import { FaCircle, FaPlus, FaSortDown, FaEllipsisV } from 'react-icons/fa';

function Assignment(props) {
    const courseId = props.courseId;
    const courseAsignments = db.assignments.filter(c => c.course === courseId);
    return (
        <div className='wd-width-100p wd-paddingtop-5p'>
            <div className="wd-no-wrap wd-width-95p">
                <div className="wd-display-flex-align-center">
                    <div>
                        <input className="form-control" type="text" placeholder="Search for Assignment" />
                    </div>
                    <div className="wd-flexgrow-1-display-flex-justifycontent">
                        <button className="btn btn-secondary">
                            <FaPlus /> Group
                        </button>
                        <button className="btn btn-danger wd-margin-left-5px">
                            <FaPlus /> Assignment
                        </button>
                        <button className="btn btn-secondary wd-margin-left-5px">
                            <FaEllipsisV />
                        </button>
                    </div>
                </div>
                <div className="wd-paddingtop-10px">
                    <hr />
                </div>
            </div>
            <div className='wd-width-95p'>
                <ul className="list-group wd-ul-style">
                    <li className="list-group-item list-group-item-secondary">
                        <span>
                            <FaCircle style={{ color: '#161717', paddingRight: '5px' }} />
                            <FaSortDown style={{ color: '#161718' }} />
                            <span>Assignments</span>
                            <div className="float-end">
                                <FaPlus size={24} style={{ paddingRight: '10px' }} />
                                <FaEllipsisV style={{ color: '#3c3939' }} />
                            </div>
                        </span>
                    </li>
                    {
                        courseAsignments.map(ass => {
                            return(<AssignmentItem ass={ass} />);
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Assignment;