
type ChallengeSolutionProps = {
  challenge?: string;
  solution?: string;
};

const ChallengeSolution = ({ challenge, solution }: ChallengeSolutionProps) => {
  return (
    <section
      className={`py-10 w-full place-items-start`}
    >
      <p className="mb-6 text-gray-600">
        <a
          className={`font-bold`}
        >
          Challenge:
        </a>
        &emsp;{challenge}
      </p>

      <p className="mb-10 text-gray-600">
        <a
          className={`font-bold`}
        >
          Solution:
        </a>
        &emsp;{solution}
      </p>
    </section>
  );
};

export default ChallengeSolution;
