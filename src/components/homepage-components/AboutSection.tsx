import { FiLinkedin, FiGithub, FiAward } from 'react-icons/fi';
import profile from "../../assets/profile.jpg";

const AboutSection = () => {
  return (
    <section className="mx-auto py-16 w-full">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden w-full">
        {/* Profile Header */}
        <div className="md:flex">
          {/* Profile Image (Left) */}
          <div className="md:w-[50%] p-6 md:p-8 flex justify-center bg-gray-50">
            <div className="relative w-[440px] h-[420px] rounded-[30px] overflow-hidden border-4 border-white shadow-lg">
              <img
                src={profile}
                alt="AB"
                className="object-cover"
              />
            </div>
          </div>

          {/* Content (Right) */}
          <div className="md:w-[50%] p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Aarya Balwadkar</h1>
            
            {/* Certification Badge */}
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium flex items-center">
                <FiAward className="mr-2" />
                Google UX Certified
              </div>
            </div>

            <p className="text-xl text-purple-600 font-medium mb-6">UI/UX | Visual | Motion Designer</p>

            {/* Specialization Highlight */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 mb-6 border border-blue-100">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">✧</span>
                Lottie Animation
              </h3>
              <p className="text-gray-700">
                Creating fluid, expressive animations that bring interfaces to life. 
                <p><span className="font-semibold">After Effects → Lottie workflows </span>for scalable motion design systems.</p> 
              </p>
            </div>

            {/* Main Bio */}
            <div className="prose prose-lg text-gray-600 space-y-4 mb-8">
              <p>
                I design <strong>human-centered digital experiences</strong> where every interaction feels intuitive and every animation tells a story. My work sits at the intersection of usability and delight.
              </p>
            </div>

            {/* Education & Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Education Column */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">EDUCATION</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Symbiosis Institute of Technology</h4>
                    <p className="text-sm text-gray-600">Bachelor of Technology in Computer Science</p>
                    <p className="text-xs text-gray-500">2023-2027</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Bharati Vidhyapeeth English Medium School</h4>
                    <p className="text-sm text-gray-600">11th and 12th</p>
                    <p className="text-xs text-gray-500">2021-2023</p>
                  </div>
                </div>
              </div>

              {/* Experience Column */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">EXPERIENCE</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Project: Human City</h4>
                    <p className="text-sm text-gray-600">UI/UX Designer</p>
                    <p className="text-xs text-gray-500">Oct 2024 - Dec 2024</p>
                  </div>
                  {/* Add other experiences similarly */}
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">SKILLS</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Design Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">DESIGN</h4>
                  <ul className="text-sm space-y-1">
                    {['Branding + Identity', 'Creative Direction', 'Generative AI', 'UI/UX', 'Typography'].map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Technical Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">TECHNICAL</h4>
                  <ul className="text-sm space-y-1">
                    {['Figma', 'LottieFile', 'Fullstack Development'].map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Additional Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">ADDITIONAL</h4>
                  <ul className="text-sm space-y-1">
                    {['Design Thinking', 'Motion Design'].map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/aaryabalwadkar/" className="text-gray-500 hover:text-blue-800 transition">
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/AaryaBalwadkar/" className="text-gray-500 hover:text-gray-800 transition">
                <FiGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Location Footer */}
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
          <p className="text-gray-500 italic flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Based in Pune
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;