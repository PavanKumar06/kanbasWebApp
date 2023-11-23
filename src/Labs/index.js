import Assignment3 from "./a3";
import Nav from "../Nav";
import { useLocation } from "react-router-dom";
import Assignment4 from "./a4";
import { Provider } from "react-redux";
import store from "./store";

function Labs() {
  const { pathname } = useLocation();

  return (
    <Provider store={store}>
      <div>
        <Nav />
        {
          pathname.includes("a3") && <Assignment3 />
        }
        {
          pathname.includes("a4") && <Assignment4 />
        }
      </div>
    </Provider>
  );
}

export default Labs;
