import About from "../HomeElements/About/About";
import Contact from "../HomeElements/Contact/Contact";
import Education from "../HomeElements/Education/Education";
import FeaturedProjects from "../HomeElements/FeaturedProjects/FeaturedProjects";
import HeroSection from "../HomeElements/HeroSection/HeroSection";
import MyService from "../HomeElements/MyService/MyService";
import TechnicalSkills from "../HomeElements/TechnicalSkills/TechnicalSkills";
import Workflow from "../HomeElements/TechnicalSkills/WorkFlow";
import UiUxCaseStudy from "../HomeElements/UiUxCaseStudy/UiUxCaseStudy";

const Home = () => {
    return (
        <div>
          <HeroSection></HeroSection>
          <div className="max-w-7xl mx-auto">
            <About></About>
             <TechnicalSkills></TechnicalSkills>
             
             <FeaturedProjects></FeaturedProjects>
             
           
           
            
            <UiUxCaseStudy></UiUxCaseStudy>
             <Workflow></Workflow>
            <Education></Education>
            <MyService></MyService>
           
           
          </div>
           <Contact></Contact>
        </div>
    );
};

export default Home;