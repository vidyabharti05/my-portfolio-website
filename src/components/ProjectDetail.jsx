import { useParams, Link } from "react-router-dom";

const projectData = {
  "everyday-task": {
    title: "EveryDay Task",
    description: `
EveryDay Task is a productivity-focused web application designed to help users
plan, organize, and track their daily activities efficiently. The project
focuses on simplicity, usability, and clean UI design, allowing users to
manage tasks without unnecessary complexity.
`,
    tech: "HTML, CSS, JavaScript"
  },

  "data-store": {
    title: "Data-Store System",
    description: `
Data-Store System is a structured web application that enables users to store,
manage, and retrieve data in an organized way. This project demonstrates
practical understanding of form handling, data organization, and user-centric
design.
`,
    tech: "HTML, CSS, JavaScript"
  },

  "tic-tac-teo": {
    title: "Tic-Tac-Toe Game",
    description: `
A classic Tic-Tac-Toe game built using JavaScript logic. This project highlights
problem-solving skills, game state management, and interactive UI behavior.
It provides a smooth and engaging user experience.
`,
    tech: "HTML, CSS, JavaScript"
  },

  "my-portfolio-website": {
    title: "Personal Portfolio Website",
    description: `
A modern, responsive personal portfolio website built using React.
This project highlights my skills, projects, and professional background
through a clean and well-structured user interface.

The website is designed with a strong focus on usability, responsiveness,
and visual consistency. It reflects my understanding of component-based
architecture in React and clean CSS styling practices.

This portfolio serves as a central place to showcase my work, technical
skills, and passion for web development.
`,
    tech: "React, CSS"
  },

  "prediction": {
    title: "Prediction System (Python)",
    description: `
A Python-based prediction system that analyzes data patterns to generate
meaningful predictions. This project reflects my interest in data science
and my ability to apply analytical thinking to real-world problems.
`,
    tech: "Python, Data Analysis"
  },

  "calculator": {
    title: "Calculator Application",
    description: `
A simple yet functional calculator application that performs basic arithmetic
operations. This project demonstrates strong JavaScript fundamentals and
attention to clean UI design.
`,
    tech: "HTML, CSS, JavaScript"
  }
};

function ProjectDetail() {
  const { name } = useParams();
  const project = projectData[name];

  if (!project) {
    return <h2 style={{ padding: "60px" }}>Project not found</h2>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>

      <p className="project-detail-desc">
        {project.description}
      </p>

      <p className="project-tech">
        <strong>Technologies Used:</strong> {project.tech}
      </p>

      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>
    </div>
  );
}

export default ProjectDetail;
