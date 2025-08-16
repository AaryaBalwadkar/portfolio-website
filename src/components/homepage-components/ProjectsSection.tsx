import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard"
import projects from "../../data/projects.json";
import shikshasankalpbanner from "../../assets/shikshasankalpbanner.png"

const ProjectsSection = () => {
    const navigate = useNavigate();
  return (
    <div className="mb-20">
      <h1 className="text-4xl font-extrabold mb-5">projects</h1>
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
