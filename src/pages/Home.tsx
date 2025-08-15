import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import ProjectsSection from "../components/homepage-components/ProjectsSection";
import AboutSection from "../components/homepage-components/AboutSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 500,
        smooth: true,
        offset: -70, // adjust for navbar height
      });
    }
  }, [location.state]);

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
}

export default Home;
