import img1 from "../../../assets/ui/ui1.png";
import img2 from "../../../assets/ui/ui2.png";
import img3 from "../../../assets/ui/ui3.png";
import { FaLocationArrow } from "react-icons/fa";

const caseStudies = [
    {
        id: 1,
        title: "Ayurveda Consultation App",
        subtitle: "UI/UX Case Study",
        description: "Healthcare app allowing users to consult doctors, book appointments, and apply discount coupons seamlessly.",
        tool: "Figma",
        img: img1,
        link: "https://www.behance.net/gallery/248996625/Ayurveda-Consultation-App"
    },
    {
        id: 2,
        title: "LMS Learning Platform",
        subtitle: "UI/UX Case Study",
        description: "AI-powered web application providing personalized language learning feedback and structured online courses.",
        tool: "Figma",
        img: img2,
        link: "https://www.behance.net/gallery/245662011/LMS-website-LandingPage"
    },
    {
        id: 3,
        title: "Fitness Tracker App",
        subtitle: "UI/UX Case Study",
        description: "Activity tracking mobile app designed to set daily health goals, log meals, and track weight progress intuitively.",
        tool: "Figma",
        img: img3,
        link: "https://www.behance.net/gallery/245307973/Gym-Tracker-App-UIUX"
    },

];

const UiUxCaseStudy = () => {
    return (
        <section id="caseStudy" className="scroll-mt-24 py-16 px-4 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-14">

                <h2 className="text-3xl sm:text-5xl font-bold mt-3 text-black">
                    UI/UX Case Study
                </h2>
                <p className="mt-2 text-sm sm:text-base text-center text-gray-500">
                    Designed intuitive marketplace experiences with a focus on seamless product discovery, <br></br> user-friendly navigation, and smooth interactions.
                </p>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                        {/* Image Preview Container */}
                        <div className="relative overflow-hidden bg-gray-50 aspect-[4/3]">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200/50 shadow-sm">
                                <span className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                    {item.tool}
                                </span>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {item.description}
                                </p>
                            </div>

                            {/* Card Footer Button */}
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn group rounded-full bg-gray-800 text-white hover:bg-gray-200 hover:text-black hover:shadow-black px-6"
                            >
                                View UI/UX Case Study
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-14 text-center">
                <a
                    href="https://www.behance.net/noymuljim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit mx-auto  btn group rounded-full bg-gray-800 text-white hover:bg-gray-200 hover:text-black hover:shadow-black px-10 py-7  flex justify-center items-center gap-2  font-semibold text-sm py-3.5  duration-200"
                >
                    View More
                    <FaLocationArrow className="text-white group-hover:text-black transition-colors" />
                </a>
            </div>
        </section>
    );
};

export default UiUxCaseStudy;