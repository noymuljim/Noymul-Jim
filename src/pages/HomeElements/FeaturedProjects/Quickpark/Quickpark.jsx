import { FaGithub } from "react-icons/fa";
import img from "../../../../assets/project img/qp.png";
import { Link } from "react-router";

const Quickpark = () => {
    const techStack = [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JavaScript",
        "daisyUI",
        "React hook form",
        "Axios",
        "JWT",
        "Stripe",
        "Firebase",
        "React router",
    ];

    return (
        <section id="projects" className="my-2 pt-10 px-4 max-w-7xl mx-auto scroll-mt-44">


            {/* Main Project Card */}
            <div className="bg-white rounded-2xl border border-transparent hover:border-purple-400 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300">

             
                <div className="lg:col-span-5 relative bg-gradient-to-br from-black via-white-300 to-gray-350 p-5 sm:p-6 flex flex-col justify-between group">

                    {/* Top Floating Badges */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-md text-emerald-700 px-3 py-1 rounded-full shadow-xs ">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Production Ready
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-md text-emerald-700 px-3 py-1 rounded-full shadow-xs ">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Full-Stack Web App
                        </span>


                    </div>

                    {/* Browser Frame Wrapper (Prevents Cropping) */}
                    <div className="my-auto rounded-xl overflow-hidden bg-white shadow-md  ansition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                        {/* Minimal Browser Top Bar */}
                        <div className="bg-slate-50 px-3 py-2 border-b border-slate-200/80 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                           
                        </div>

                        {/* Full Uncropped Image */}
                        <div className="bg-white overflow-hidden">
                            <img
                                src={img}
                                alt="EasyPark Application Preview"
                                className="w-full h-auto object-contain block transform transition-transform duration-500 group-hover:scale-[1.12]"
                            />
                        </div>
                    </div>


                </div>

                {/* Right: Project Details (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-white via-slate-50/40 to-blue-50/20">
                    <div>
                        {/* Top Header Row: Category Pill + Action Links */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">


                            {/* Compact Top-Right Action Buttons */}
                            <div className="flex flex-wrap items-center gap-2">
                                <a
                                    href="https://quick-park-2f5a4.web.app/"
                                    target="_blank"
                                    className="btn group rounded-full btn-sm bg-green-300 text-black hover:bg-gray-200 hover:text-black hover:shadow-black px-6"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                    LIVE PREVIEW
                                </a>
                                <a
                                    href="https://github.com/noymuljim/quick_park_client"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn group rounded-full btn-sm bg-gray-800 text-white hover:bg-gray-200 hover:text-black hover:shadow-black px-3"
                                >
                                    <FaGithub />

                                    Frontend
                                </a>

                                <a
                                    href="https://github.com/noymuljim/quick_park_server"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn group rounded-full btn-sm bg-gray-800 text-white hover:bg-gray-200 hover:text-black hover:shadow-black px-3"
                                > <FaGithub />
                                    Backend
                                </a>

                                <Link to="/QuickparkDetails" className="btn group rounded-full btn-sm bg-gray-800 text-white hover:bg-gray-200 hover:text-black hover:shadow-black px-3"
                                >  Details <span>→</span></Link>

                            </div>
                        </div>

                        {/* Project Title & Tagline */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                            Quick Park
                            
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed ">
                           Parking solution platform.Connecting drivers with available parking while helping owners earn from unused spaces.                        </p>
                    </div>

                    {/* Bottom: Tech Stack Section */}
                    <div className=" border-t border-slate-100">
                        <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400 flex items-center gap-2 mb-3">
                            <span className="text-blue-500">⚡</span>
                          Stack used
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center gap-1.5 text-xs font-medium bg-slate-100/80 hover:bg-blue-50 text-slate-700 hover:text-blue-700 px-3 py-1.5 rounded-lg border border-slate-200/80 transition-colors"
                                >
                                    <span className="text-blue-500 font-mono text-[11px]">&lt;/&gt;</span>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Quickpark;