import assignmentAndAnnouncements from '../../assets/assignmentandannouncements.jpg';
import creatingAssignments from '../../assets/creatingassignments.jpg';
import homepage from '../../assets/homepage.jpg';
import initialHomepage from '../../assets/initialhomepage.jpg';
import inputAndSubmissions from '../../assets/inputandsubmissions.jpg';

type IdeationProps = {
  ideation?: string[];
};

const Ideation = ({ ideation }: IdeationProps) => {
  // Define wireframes data with imported images
  const wireframes = [
    {
      src: homepage,
      alt: "Refined homepage wireframe",
      caption: "Improved homepage layout"
    },
    {
      src: creatingAssignments,
      alt: "Assignment creation wireframe",
      caption: "Teacher creating new assignments"
    },
    {
      src: assignmentAndAnnouncements,
      alt: "Assignments and announcements wireframe",
      caption: "Dual-purpose interface"
    },
    {
      src: inputAndSubmissions,
      alt: "Input and submissions wireframe",
      caption: "Student submission flow"
    },
    {
      src: initialHomepage,
      alt: "Initial homepage wireframe",
      caption: "First iteration of homepage concept"
    }
  ];

  return (
    <div className="w-full">
      <h1 className="text-4xl font-extrabold mb-5">ideation</h1>
      
      {/* Early Concept Section */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px] mt-15">EARLY CONCEPT</h2>
      <ul className="space-y-4 list-disc pl-5 mb-10">
        {ideation?.map((item, index) => (
          <li key={index} className="text-lg">
            {item}
          </li>
        ))}
      </ul>

      {/* Wireframes Section */}
      <h2 className="text-xl font-bold mb-6 tracking-[8px] mt-15">WIREFRAMES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {wireframes.map((frame, index) => (
          <div key={index} className="">
            <div className="">
              <img
                src={frame.src}
                alt={frame.alt}
                className="object-contain"
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ideation;