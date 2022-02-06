import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import MainScreen from "./components/MainScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainScreen />} />
      </Routes>
    </div>
  );
}

export default App;
