import me from "../../../assets/jim.png";

const About = () => {
    return (
        // Full-width band. Inner div holds the max-width.
        <section id="about" className="after-hero  scroll-mt-9">
            <div className="pb-20 px-6 max-w-7xl mx-auto text-slate-800">
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-5xl font-bold mt-3 text-black">
                      About Me
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-900/10 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                                Who am i
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                                I&apos;m{" "}
                                <strong className="text-slate-900 font-semibold">
                                    Noymul Matin Jim
                                </strong>
                                , a Computer Science graduate and developer passionate about
                                creating practical digital business solutions. I enjoy transforming
                                ideas into well designed focus on better user experience functional web applications.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-full blur-2xl opacity-10  " />

                            <h3 className="text-lg font-bold text-purple-300 mt-1 mb-2">
                                EDUCATION
                            </h3>
                            <p className="font-semibold text-white">
                                B.Sc. in Computer Science & Engineering
                            </p>
                            <p className="text-sm text-slate-300">
                                Daffodil International University
                            </p>
                        </div>
                    </div>

                    {/* Center */}
                    <div className="lg:col-span-4 flex justify-center">
                        <div className="relative group max-w-sm w-full">
                            <div className="relative overflow-hidden p-3">
                                <img
                                    src={me}
                                    alt="Najmul Momin Jim"
                                    className="w-full h-[420px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-900/10 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                                What I Do
                            </h3>

                            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                                I bridge the gap between{" "}
                                <strong className="text-slate-900 font-semibold">
                                    development and design
                                </strong>
                                , crafting intuitive digital experiences backed by modern web technologies. <br></br>
                                My approach combines user centered design, scalable MERN architecture,
                                and AI-assisted workflows to turn complex ideas into purposeful,
                                high-performing products.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-900/10 shadow-sm hover:shadow-md transition-shadow">

                            <h3 className="text-lg font-bold text-slate-900 mt-1">
                                Now Learning
                            </h3>
                            <p className="mb-3 text-sm">Skill's that i am exploring now...</p>
                            <div className="flex flex-wrap gap-2">
                                {["TypeScript","Next.js"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900 text-white shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;