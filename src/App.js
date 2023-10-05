import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes/RoutesComponent";
import NavBar from "./nav/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <RoutesComponent />
      </Router>
    </div>
  );
}

export default App;


// Advanced react
// 1. render props
// 2. composition
// 3. custom hooks
