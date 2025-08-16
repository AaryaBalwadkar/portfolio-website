import ChallengeSolution from "../components/projects-components/ChallengeSolutionProps";
import DesignPrinciples from "../components/projects-components/DesignPrinciples";
import Ideation from "../components/projects-components/Ideation";
import InterviewResearch from "../components/projects-components/InterviewResearch";
import Introduction from "../components/projects-components/Introduction";
import Personas from "../components/projects-components/Personas";
import Research from "../components/projects-components/Research";
import projects from "../data/projects.json";
import background from "../assets/background1.png";
import FinalSolution from "../components/projects-components/FinalSolution";

const ProjectShikshaSankalp = () => {
  const project = projects.find((p) => p.link === "shiksha-sankalp");
  return (
    <div className="w-full mb-20">
      <Introduction
        title={project?.name}
        description={project?.description}
        bannerDescription={project?.bannerDescription}
        img={background}
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
      {project?.userResearch && (
        <InterviewResearch userResearch={project.userResearch} />
      )}
      {project && <Personas project={project} />}
      <DesignPrinciples designPrinciples={project?.designPrinciples} />
      <Ideation ideation={project?.ideation} />
      <FinalSolution />
    </div>
  );
};

export default ProjectShikshaSankalp;
