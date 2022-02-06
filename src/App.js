import "./App.css";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import MainScreen from "./components/MainScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
