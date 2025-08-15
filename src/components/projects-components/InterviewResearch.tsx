import React from "react";

type UserResearchProps = {
  userResearch: {
    exploratoryQuestions: Array<{
      question: string;
      subPoints?: string[];
      responses: Array<{ user: string; answer: string }>;
      quote?: string;
      quoteUser?: string;
      insight?: string;
    }>;
    challenges: {
      summary: string;
      quote: string;
      quoteUser: string;
      insight?: string;
    };
    collaborationProbe: {
      description: string;
      summary: string;
      quote: string;
      quoteUser: string;
      insight?: string;
    };
    expertInterviews: {
      description: string;
      quotes: Array<{ text: string; user: string }>;
      insight?: string;
    };
  };
};

const UserResearchComponent = ({ userResearch }: UserResearchProps) => {
  return (
    <div className="container mx-auto py-10">
      {/* Exploratory Questions Section */}
      {userResearch.exploratoryQuestions.map((section, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-lg font-bold mb-4">
            Exploratory Question {index + 1}
          </h2>
          <p className="text-gray-600 mb-2">{section.question}</p>
          {section.subPoints && (
            <ul className="list-disc list-inside mb-4 text-gray-600">
              {section.subPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
          <div className="h-[50px]"></div>
          {section.responses.map((response, i) => (
            <div
              key={i}
              className={`flex mb-30 ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-[70%] text-left">
                {" "}
                {/* Fixed width and left-aligned content */}
                <p className="text-[#70d6ff] text-4xl font-bold italic roboto">
                  "{response.answer}"
                </p>
                <cite className="not-italic block text-gray-500 mt-10">
                  - {response.user}
                </cite>
              </div>
            </div>
          ))}
          {section.insight && (
            <div className="border-l-6 border-l-[#ffd670] pl-4">
              <p className="text-gray-600">
                <a className={`font-bold`}>Insights:</a>
                &emsp;{section.insight}
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Challenges Section */}
      <div className="mb-12">
        <h2 className="text-lg font-bold mb-4">Challenges</h2>
        <p className="text-gray-600 mb-2">{userResearch.challenges.summary}</p>
        <p className="text-[#70d6ff] text-4xl font-bold italic roboto mb-10 mt-30 w-[70%]">
          "{userResearch.challenges.quote}
        </p>
        <cite className="not-italic block text-gray-500 mb-30">
          - {userResearch.challenges.quoteUser}
        </cite>
        {userResearch.challenges.insight && (
          <div className="border-l-6 border-l-[#ffd670] pl-4">
            <p className="text-gray-600">
              <a className={`font-bold`}>Insights:</a>
              &emsp;{userResearch.challenges.insight}
            </p>
          </div>
        )}
      </div>

      {/* Collaboration Probe Section */}
      <div className="mb-12">
        <h2 className="text-lg font-bold mb-4">Collaboration Probe</h2>
        <p className="text-gray-600 mb-2">
          {userResearch.collaborationProbe.description}
        </p>
        <p className="text-gray-600 mb-2">
          {userResearch.collaborationProbe.summary}
        </p>
        <p className="text-[#70d6ff] text-4xl font-bold italic roboto mb-10 mt-30 w-[70%]">
          "{userResearch.collaborationProbe.quote}"
        </p>
        <cite className="not-italic block text-gray-500 mb-30">
          - {userResearch.collaborationProbe.quoteUser}
        </cite>
        {userResearch.collaborationProbe.insight && (
          <div className="border-l-6 border-l-[#ffd670] pl-4">
            <p className="text-gray-600">
              <a className={`font-bold`}>Insights:</a>
              &emsp;{userResearch.collaborationProbe.insight}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserResearchComponent;
