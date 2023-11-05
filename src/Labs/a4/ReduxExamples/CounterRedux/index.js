import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterReducer";

function CounterRedux() {
    const {value} = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Counter Redux</h2>
            <h3>{value}</h3>
            <button onClick={() => {
                dispatch(increment());
            }}>Increment</button>
            <button onClick={() => {
                dispatch(decrement());
            }}>Decrement</button>
        </div>
    );
}

export default CounterRedux;