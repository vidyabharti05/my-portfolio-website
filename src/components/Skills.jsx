import { useNavigate } from "react-router-dom";

function Skills() {
  const navigate = useNavigate();
   return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-list">
        <button onClick={() => navigate("/skills/python")}>Python</button>
        <button onClick={() => navigate("/skills/sql")}>SQL</button>
        <button onClick={() => navigate("/skills/react")}>React</button>
        <button onClick={() => navigate("/skills/html")}>HTML</button>
        <button onClick={() => navigate("/skills/css")}>CSS</button>
        <button onClick={() => navigate("/skills/javascript")}>JavaScript</button>
      </div>
    </section>
  );
}

export default Skills;
