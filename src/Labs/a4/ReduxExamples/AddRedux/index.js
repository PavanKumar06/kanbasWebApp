import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addition } from "./addReducer";

function AddRedux() {
    const [a, setA] = useState(12);
    const [b, setB] = useState(23);
    const { sum } = useSelector((state) => state.addReducer);
    const dispatch = useDispatch();

    return(
        <div className="w-25">
            <h1>Add Redux</h1>
            <h2>{a} + {b} = {sum}</h2>
            <input
                type="number"
                value={a}
                onChange={(e) => setA(parseInt(e.target.value))}
                className="form-control" />
            <input
                type="number"
                value={b}
                onChange={(e) => setB(parseInt(e.target.value))}
                className="form-control" />
            <button
                onClick={() => dispatch(addition({ a, b }))}
                className="btn btn-primary">
                Add Redux
            </button>
        </div>
    );
}

export default AddRedux;