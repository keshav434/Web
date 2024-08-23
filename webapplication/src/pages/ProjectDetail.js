import React from 'react';
import { useParams } from 'react-router-dom';
import data from './ProjectsInfo'; // Adjust the path as necessary

const ProjectDetail = () => {
  const { id } = useParams();
  const { projectData } = data;
  
  // Find the project by id
  const project = projectData.find(p => p.id === parseInt(id, 10));

  if (!project) {
    return <p>Project not found.</p>;
  }

  // Get the first additional entry
  const additional = project.additionals[0];

  return (
    <div className="project-detail">
      <h2>{project.name}</h2>
      <h3>{project.type}</h3>
      <img src={project.img} alt={project.name} className="project-image" />
      <div className="project-info">
        <p><strong>Overview:</strong> {additional.overview}</p>
        {additional.addimg1 && <img src={additional.addimg1} alt="Overview" className="additional-image" />}
        
        <p><strong>Project:</strong> {additional.Project}</p>
        {additional.addimg2 && <img src={additional.addimg2} alt="Project" className="additional-image" />}
        
        <p><strong>Working:</strong> {additional.working}</p>
        {additional.addimg3 && <img src={additional.addimg3} alt="Working" className="additional-image" />}
        
        <p><strong>Tools:</strong> {additional.tools}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;

