import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
        <TutorialsList />
          <Routes>
            <Route path="/" element={TutorialsList} />
            <Route exact path="/add" element={AddTutorial} />
            <Route path="/tutorials/:id" element={Tutorial} />
          </Routes>
          {/* <Routes>
            <Route path={["/", "/tutorials"]} element={TutorialsList} />
            <Route path="/add" element={AddTutorial} />
            <Route path="/tutorials/:id" element={Tutorial} />
          </Routes> */}
        </div>
      </div>
      </Router>
    );
  }
}
export default App;