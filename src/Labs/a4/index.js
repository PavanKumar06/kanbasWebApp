import Counter from "./Counter";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Add from "./add";
import ClickEvent from "./click";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariables";
import ObjectStateVariable from "./ObjectStateVariables";
import ArrayStateVariable from "./ArrayStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";

function Assignment4() {
    const sayHello = () => {
        alert("Hello");
    }
    return (
        <div>
            <h1>Assignment4</h1>
            <Add a={1} b={2} />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <ReduxExamples />
        </div>
    );
}

export default Assignment4;
