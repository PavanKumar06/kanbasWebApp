import './index.css';
import db from './Database';

function EditAssignment () {
    const { assignmentId } = useParams();
    return (
        <div className="row">
            <div className="col">
                <label className="form-label" htmlFor="assinput">Assignment Name</label>
                <input type="text" className="form-control mb-3" id="assinput" value="A1 - ENV + HTML" />
                <textarea className="form-control" rows="4">
                    This assignment describes how to install the development environment for creating and working with a Web application we will be developing this semester.
                </textarea>
            </div>
            <div className="col-4 mt-4" style={{ textAlign: 'right' }}>
                <label className="form-label" htmlFor="asspoints" style={{ display: 'block' }}>Points</label><br />
                <label htmlFor="assgroup" className="form-label" style={{ display: 'block' }}>Assignment Group</label><br />
                <label htmlFor="assgrade" className="form-label mt-2" style={{ display: 'block' }}>Display Grade as</label>
            </div>
            <div className="col-7 mt-4">
                <input type="text" className="form-control mb-3" value="100" />
                <select className="form-select" id="assgroup">
                    <option value="none">none</option>
                    <option value="assignments" selected>ASSIGNMENTS</option>
                </select><br />
                <select className="form-select" id="assgroup">
                    <option value="none">none</option>
                    <option value="percentage" selected>Percentage</option>
                </select>
                <span className="mt-4" style={{ display: 'block' }}>
                    <input className="form-check-input" type="checkbox" id="count" />
                    <label className="form-check-label" htmlFor="count" style={{ whiteSpace: 'nowrap' }}>
                    Do not count this assignment towards the final grade
                    </label>
                </span>
            </div>
        </div>
    );
}