import { Link } from "react-router-dom";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-list">
        <button><Link to="/skills/python">Python</Link></button>
        <button><Link to="/skills/sql">SQL</Link></button>
        <button><Link to="/skills/react">React</Link></button>
        <button><Link to="/skills/html">HTML</Link></button>
        <button><Link to="/skills/css">CSS</Link></button>
        <button><Link to="/skills/javascript">JavaScript</Link></button>
      </div>
    </section>
  );
}

export default Skills;
