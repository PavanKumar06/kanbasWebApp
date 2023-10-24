import Kanbas from "./Kanbas";
import Labs from "./Labs";
import { Routes, Route, Navigate } from "react-router-dom";
import HelloWorld from "./Labs/a3/HelloWorld";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Labs" />} />
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
      </Routes>
    </div>
  );
}

export default App;