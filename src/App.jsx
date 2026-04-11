import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

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
    <div className="site-wrapper">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      </div>
    </>
  );
}

function App() {

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    function handleChange(e){
      if (e.matchMedia) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    }
    
    handleChange(mediaQuery);
//listen ofr changes
    mediaQuery.addEventListener("change",handleChange);
    return () => {
      mediaQuery.removeEventListener('change',handleChange);
    };
  },[]);
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
