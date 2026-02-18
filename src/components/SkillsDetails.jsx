import { useParams, Link } from "react-router-dom";

const skillData = {
  python: {
    title: "Python",
    description: `
I have gained strong foundational knowledge in Python, focusing on
logical thinking and real-world problem solving. I worked extensively
with variables, conditional statements, loops, functions, lists,
tuples, dictionaries, and file handling. I also explored basic data
analysis concepts and used Python to build small projects that
strengthened my understanding of programming fundamentals.
`
  },

  sql: {
    title: "SQL",
    description: `
I learned SQL to efficiently store, manage, and retrieve data from
databases. I practiced writing optimized queries using SELECT, INSERT,
UPDATE, and DELETE statements. I also worked with WHERE conditions,
JOIN operations, sorting, filtering, and basic database design concepts
to handle real-world datasets.
`
  },

  react: {
    title: "React",
    description: `
I learned React to build modern, interactive, and reusable user
interfaces. I worked with functional components, props, component
structuring, and React Router for navigation. Through hands-on
projects, I understood how to manage UI flow, improve performance,
and build scalable front-end applications.
`
  },

  html: {
    title: "HTML",
    description: `
I learned HTML to create well-structured and semantic web pages.
I used modern HTML elements to improve accessibility, readability,
and SEO. I also practiced building complete page layouts that serve
as the foundation for responsive and user-friendly websites.
`
  },

  css: {
    title: "CSS",
    description: `
I learned CSS to design visually appealing and responsive web
interfaces. I worked with Flexbox, layouts, colors, typography,
spacing, and media queries. I focused on creating clean UI designs
that adapt smoothly across different screen sizes and devices.
`
  },

  javascript: {
    title: "JavaScript",
    description: `
I learned JavaScript to add logic and interactivity to web
applications. I worked with variables, functions, events,
conditions, loops, and DOM manipulation. I also practiced building
interactive features such as form validation, dynamic content
updates, and basic application logic.
`
  }
};
function SkillsDetails() {
  const { skillName } = useParams();
  const skill = skillData[skillName];

  if (!skill) return <h2>Skill not found</h2>;
  

  return (
    <div style={{ padding: "80px", textAlign: "center" }}>
      <h1>{skill.title}</h1>
      <p style={{ whiteSpace: "pre-line" }}>{skill.description}</p>
      <Link to="/">⬅ Back</Link>
    </div>
  );
}

export default SkillsDetails;
