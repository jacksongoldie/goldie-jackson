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
    <div style={{ margin: '10%'}}>
      <p>Projects completed while attending Flatiron Software Engineering Program</p>
      {cards}
    </div>
  )
};

export default Projects;