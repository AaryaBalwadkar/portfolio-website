import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard"
import projects from "../../data/projects.json";
import shikshasankalpbanner from "../../assets/shikshasankalpbanner.png"

const ProjectsSection = () => {
    const navigate = useNavigate();
  return (
    <div>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          title={project.name}
          description={project.bannerDescription}
          tags={project?.tags}
          image={project.link === "shiksha-sankalp" ? shikshasankalpbanner : project.image}
          onClick={() => navigate(`/${project.link}`)}
        />
      ))}
    </div>
  )
}

export default ProjectsSection
