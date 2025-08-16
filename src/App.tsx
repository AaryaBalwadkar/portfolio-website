import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectsSection from "./components/homepage-components/ProjectsSection";
import ProjectShikshaSankalp from "./pages/ProjectShikshaSankalp";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter basename="/portfolio-website/">
      <Routes>
        <Route path="*" element={<h1>404 - Not Found</h1>} />
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="projects" element={<ProjectsSection />} />
          <Route path="shiksha-sankalp" element={<ProjectShikshaSankalp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// #70d6ff
// #ff70a6
// #ff9770
// #ffd670
// #e9ff70
