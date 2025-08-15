type DesignPrinciplesProps = {
  designPrinciples?: string[];
};

const DesignPrinciples = ({ designPrinciples }: DesignPrinciplesProps) => {
  return (
    <section className="w-full mb-40">
      <div className="mt-[50px]">
        <h1 className="text-xl font-bold mb-6 tracking-[8px]">
          DESIGN PRINCIPLES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {designPrinciples?.map((p, index) => (
            <div
              key={index}
              className="bg-[#ff9770] p-6 text-white text-2xl font-bold roboto text-center rounded-lg"
              style={{
                minHeight: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: '100%'
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPrinciples;
