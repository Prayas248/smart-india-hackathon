
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import "./App.css";
import "./Navbar.css";
import "./login.css";
import { Home } from "./Home";
import { Blog } from "./Blog";
import {Navbar} from "./Navbar";
import { Login } from './login';
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
      </Routes>

    </Router>
    </div>
  );
}

export default App;
