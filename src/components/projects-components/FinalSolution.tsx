const FinalSolution = () => {
  return (
    <div className="w-full hidden md:block">
      <h1 className="text-2xl md:text-4xl font-extrabold mb-6 mt-10">
        final Solution
      </h1>

      {/* Responsive Figma Embed */}
      <div className="relative w-[1280px] h-[900px] aspect-[16/9] rounded-xl overflow-hidden shadow-xl">
        <iframe
          style={{border: `1px solid rgba(0, 0, 0, 0.1);`}}
          width="1280"
          height="881"
          src="https://embed.figma.com/proto/iraqAorzLte7xiN2Wclzf2/Shiksha-Sankalp?node-id=117-154&p=f&scaling=min-zoom&content-scaling=fixed&page-id=105%3A2&starting-point-node-id=105%3A3&embed-host=share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        Click to interact with the prototype (may take a moment to load)
      </div>
    </div>
  );
};

export default FinalSolution;
