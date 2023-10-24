import React from 'react';
import { Link, useParams } from 'react-router-dom';
import db from '../../Database';

function EditAssignment() {
  const { assignmentId } = useParams();
  const courseAssignments = db.assignments.filter(a => a._id === assignmentId);

  return (
    <div style={{paddingLeft: '5%', paddingTop: '5%'}}>
        <h2>Assignment Name</h2>  
        <input value={courseAssignments[0].title} className="form-control mb-2" style={{width: '30%'}} />
        <Link to={`/Kanbas/courses/${courseAssignments[0].course}/Assignments`}  className="btn btn-danger">Cancel</Link>
        <button className="btn btn-success me-2" style={{marginLeft: '5px'}}>Save</button>
    </div>
  );
}

export default EditAssignment;
