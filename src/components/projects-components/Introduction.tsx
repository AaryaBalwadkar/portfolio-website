type IntroductionProps = {
  title?: string;
  description?: string;
  bannerDescription?: string;
  img?: string;
};

const Introduction = ({ title, bannerDescription, description, img }: IntroductionProps) => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 text-[#70d6ff]">{title}</h1>
          <p className="text-sm font-bold mb-5 text-gray-400 roboto tracking-[8px] ">UI + UX <a className="text-[#70d6ff] font-extrabold"> / </a> VISUAL DESIGNER</p>
          <p className="text-xl font-bold mb-5">{bannerDescription}</p>
          <p className="text-gray-600 roboto">{description}</p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img 
            src={img} 
            alt={title} 
            className="max-w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Introduction;
