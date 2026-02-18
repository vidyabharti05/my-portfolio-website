import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";
import SkillsDetails from "./components/SkillsDetails";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/my-portfolio-website">

     <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Project Detail Page */}
      <Route path="/project/:name" element={<ProjectDetail />} />
    
      <Route path="/skills/:skillName" element={<SkillsDetails />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
