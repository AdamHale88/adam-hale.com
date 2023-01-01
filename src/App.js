import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import CentralHero from "./components/centralHero";
import Layout from "./components/layout";
import ProjectWrapper from "./components/projectWrapper";
import Resume from "./components/resume";
import ToolBoxWrapper from "./components/toolBoxWrapper";

const App = () => {

    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<CentralHero/>}/>
                    <Route path="Resume" element={<Resume/>}/>
                    <Route path="Toolbox" element={<ToolBoxWrapper/>}/>
                    <Route path="Project" element={<ProjectWrapper/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
