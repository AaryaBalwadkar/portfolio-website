import { scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === "/") {
      // Already on home → smooth scroll
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
        offset: -70, // adjust for fixed navbar height
      });
    } else {
      // Go to home and pass scroll target
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className="h-[100px] justify-between flex items-center">
      <div className="text-6xl font-bold"><span className="text-[#70d6ff]">A</span><span className="text-purple-600">B</span></div>
      <div className="flex gap-20 justify-end content-end">
        <button onClick={() => handleNavClick("about")}>About</button>
        <button onClick={() => handleNavClick("projects")}>Projects</button>
      </div>
    </nav>
  );
}

export default Navbar;