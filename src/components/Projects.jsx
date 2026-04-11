import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-grid">

        <div className="project-card">
          <h3>Noori_beauty_parlor</h3>
          <div className="project-buttons">
            <a href="https://vidyabharti05.github.io/Noori_beauty_parlor/" target="_blank">GitHub</a>
            <Link to="/project/noori_beauty_parlor">Description</Link>
          </div>
        </div>

        <div className="project-card">
          <h3>EveryDay Task</h3>
          <div className="project-buttons">
            <a href="https://vidyabharti05.github.io/EveryDaytask/" target="_blank">GitHub</a>
            <Link to="/project/everyday-task">Description</Link>
          </div>
        </div>

        <div className="project-card">
          <h3>Data-store System</h3>
          <div className="project-buttons">
            <a href="https://vidyabharti05.github.io/data-store/" target="_blank">GitHub</a>
            <Link to="/project/data-store">Description</Link>
          </div>
        </div>

        <div className="project-card">
          <h3>Tic-Toc-Teo</h3>
          <div className="project-buttons">
            <a href="https://vidyabharti05.github.io/tic-toc-teo/" target="_blank">GitHub</a>
            <Link to="/project/tic-tac-teo">Description</Link>
          </div>
        </div>

        <div className="project-card">
          <h3>My-portfolio-website (React)</h3>
          <div className="project-buttons">
            <a href="https://vidyabharti05.github.io/my-portfolio-website/" target="_blank">GitHub</a>
            <Link to="/project/my-portfolio-website">Description</Link>
          </div>
        </div>

        <div className="project-card">
          <h3>Calculator App</h3>
          <div className="project-buttons">
            <a href="https://vidyabharti05.github.io/calculators/" target="_blank">GitHub</a>
            <Link to="/project/calculator">Description</Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
