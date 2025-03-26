import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Timer from "./Components/Timer";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timer />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
