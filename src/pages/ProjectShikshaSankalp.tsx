import ChallengeSolution from "../components/projects-components/ChallengeSolutionProps";
import DesignPrinciples from "../components/projects-components/DesignPrinciples";
import Ideation from "../components/projects-components/Ideation";
import InterviewResearch from "../components/projects-components/InterviewResearch";
import Introduction from "../components/projects-components/Introduction";
import Personas from "../components/projects-components/Personas";
import Research from "../components/projects-components/Research";
import projects from "../data/projects.json";
import hero1 from "../assets/hero1.png"; // Adjust the path as necessary
import FinalSolution from "../components/projects-components/FinalSolution";

const ProjectShikshaSankalp = () => {
  const project = projects.find(p => p.link === "shiksha-sankalp");
  return (
    <div className="w-full">
      <Introduction
        title={project?.name}
        description={project?.description}
        bannerDescription={project?.bannerDescription}
        img={hero1}
      />
      <ChallengeSolution
        challenge={project?.challenge}
        solution={project?.solution}
      />
      <Research
        researchIntro={project?.researchIntro}
        methodology={project?.methodology}
        researchGoals={project?.researchGoals}
        methodologyInsights={project?.methodologyInsights}
      />
      <InterviewResearch userResearch={project?.userResearch} />
      <Personas project={project} />
      <DesignPrinciples designPrinciples={project?.designPrinciples} />
      <Ideation ideation={project?.ideation} />
      <FinalSolution />
    </div>
  )
}

export default ProjectShikshaSankalp
