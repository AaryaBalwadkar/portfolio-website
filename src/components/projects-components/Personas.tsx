type Personas = {
  name: string;
  age: number;
  role: string;
  goals: string;
  painPoints: string;
  behaviors: string;
  quote: string;
};

type PersonasProps = {
  project: {
    personas: Personas[];
    userResearch: {
      exploratoryQuestions: Array<{
        responses: Array<{
          user: string;
          answer: string;
        }>;
      }>;
    };
  };
};

const Personas = ({ project }: PersonasProps) => {
  // Helper to get research insights for each persona
  const getPersonaInsights = (personaName: string) => {
    const insights: string[] = [];
    project.userResearch.exploratoryQuestions.forEach(q => {
      q.responses.forEach(r => {
        if (r.user.includes(personaName.split(',')[0])) {
          insights.push(r.answer);
        }
      });
    });
    return insights.length > 0 ? insights[0] : "No specific research response found";
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-xl font-bold mb-8 tracking-[8px] roboto">USER PERSONAS & PROBLEM STATEMENTS</h2>

      {project.personas.map((persona, index) => (
        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 rounded-lg border-l-4 border-[#ff70a6] p-10 bg-[#fff6f9]">
          {/* Problem Statement Column */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-[#ff70a6]">Problem Statement</h3>
            <p className="mb-4 text-gray-700">
              <span className="font-semibold">{persona.name.split(',')[0]}</span> is a {persona.role.toLowerCase()}
              who needs {persona.goals.toLowerCase()} because {persona.painPoints.toLowerCase()}.
            </p>
            
            <div className="bg-white p-4 rounded">
              <h4 className="font-bold mb-2 text-gray-800">Research Insight</h4>
              <p className="text-sm text-gray-600">"{getPersonaInsights(persona.name)}"</p>
            </div>
          </div>

          {/* Persona Column */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{persona.name.split(',')[0]}</h3>
                <p className="text-sm text-gray-500">{persona.name.split(',')[1].trim()}</p>
              </div>
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                {persona.age} years
              </span>
            </div>

            <div className="my-4">
              <blockquote className="border-l-2 border-gray-200 pl-4 italic text-gray-700">
                "{persona.quote}"
              </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-sm mb-2 text-gray-700">GOALS</h4>
                <p className="text-sm">{persona.goals}</p>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-2 text-gray-700">FRUSTRATIONS</h4>
                <p className="text-sm">{persona.painPoints}</p>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-bold text-sm mb-2 text-gray-700">BEHAVIORS</h4>
              <p className="text-sm">{persona.behaviors}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Personas;