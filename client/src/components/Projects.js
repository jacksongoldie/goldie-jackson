import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(`/projects`)
    .then(r=>r.json())
    .then(setProjects)
  }, [])

  const cards = projects.map((p) => <ProjectCard project={p} key={p.id} />)
  return (
    <div>
      {cards}
    </div>
  )
};

export default Projects;