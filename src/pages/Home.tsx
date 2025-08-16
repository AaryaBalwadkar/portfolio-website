import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import ProjectsSection from "../components/homepage-components/ProjectsSection";
import AboutSection from "../components/homepage-components/AboutSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Only scroll if there's a hash in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Otherwise scroll to top
    else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
    </div>
  );
};

export default Home;
