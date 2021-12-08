import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Movie from "./component/movie/movie";

const App = () => {
  return (
    <div>
      <Router>
        <Movie />
      </Router>
    </div>
  );
};

export default App;
