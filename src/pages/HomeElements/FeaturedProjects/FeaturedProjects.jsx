import Quickpark from "./Quickpark/Quickpark";
import StyleDecor from "./StyleDecor/StyleDecor";

const FeaturedProjects = () => {
    return (
        <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 text-center mt-10">
           Projects
            </h2>
            <p className="text-center text-gray-500">A selection of projects I've worked on, showcasing modern engineering principles and user-centric solutions.</p>
            <Quickpark></Quickpark>
            <StyleDecor></StyleDecor>
        </div>
    );
};

export default FeaturedProjects;