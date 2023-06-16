import { React } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./features/Home/Home";
import About from "./FormComponents/About";
import Personal from "./FormComponents/Personal";
import Education from "./FormComponents/Education";
import Experience from "./FormComponents/Experience";
import Projects from "./FormComponents/Projects";
import Skills from "./FormComponents/Skills";
import UpdatePersonal from "./UpdateForm/UpdatePersonal";
import UpdateAbout from "./UpdateForm/UpdateAbout";
import UpdateEducation from "./UpdateForm/UpdateEducation";
import UpdateExperience from "./UpdateForm/UpdateExperience";
import UpdateProject from "./UpdateForm/UpdateProject";
import UpdateSkills from "./UpdateForm/UpdateSkills";
import View from "./features/Home/View";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="header">Resume Craft</h1>
        <Router>
          <Link to="/" className="homeBtn">
            Back to Home
          </Link>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/view" element={<View />}></Route>
            <Route path="/personalDetails" element={<Personal />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/project" element={<Projects />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route
              path="/update/personalDetails"
              element={<UpdatePersonal />}
            ></Route>
            <Route path="/update/about" element={<UpdateAbout />}></Route>
            <Route
              path="/update/Education"
              element={<UpdateEducation />}
            ></Route>
            <Route
              path="/update/experience"
              element={<UpdateExperience />}
            ></Route>
            <Route path="/update/project" element={<UpdateProject />}></Route>
            <Route path="/update/skills" element={<UpdateSkills />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
