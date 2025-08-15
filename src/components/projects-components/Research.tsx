type ResearchProps = {
  researchIntro?: string;
  methodology?: string;
  researchGoals?: string[];
  methodologyInsights?: string;
};

const Research = ({
  researchIntro,
  methodology,
  researchGoals,
  methodologyInsights,
}: ResearchProps) => {
  return (
    <section className={`w-full place-items-start`}>
      <h1 className="text-4xl font-extrabold mb-5">research</h1>
      <p className="roboto text-gray-600 mb-15">{researchIntro}</p>
      <div className="mt-[50px]">
        <h1 className="text-xl font-bold mb-6 tracking-[8px]">
          RESEARCH GOALS
        </h1>
        <div className="grid grid-cols-2 gap-2">
          {researchGoals?.map((goal, index) => (
            <div
              key={index}
              className="bg-[#ff9770] p-6 text-white text-2xl font-bold roboto text-center rounded-lg"
              style={{
                minHeight: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {goal}
            </div>
          ))}
        </div>
        <div className="mt-[50px]">
          <h1 className="text-xl font-bold mb-6 tracking-[8px]">
            RESEARCH METHODOLOGIES
          </h1>
          <p className="text-gray-600">{methodology}</p>
        </div>
        <p className="mb-6 text-gray-600 mt-[50px]">
          <a className={`font-bold`}>Insights:</a>
          &emsp;{methodologyInsights}
        </p>
      </div>
    </section>
  );
};

export default Research;
