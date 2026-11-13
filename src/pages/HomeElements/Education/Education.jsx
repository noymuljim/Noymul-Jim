const educationData = [
    {
        id: 1,
        degree: "B.Sc. in Computer Science & Engineering",
        institution: "Daffodil International University",
        year: "2022 — 2026",
        description: "Achieved a CGPA of 3.25. Focused on Software Engineering, Data Structures, Algorithms, and User interface / User experience with Web / android Technologies.",
        side: "right"
    },
    {
        id: 2,
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Gurudoyal Govt. College",
        year: "2018 — 2020",
        description: "Completed with Science stream, achieving a perfect GPA of 5.00 out of 5.00.",
        side: "left"
    },
    {
        id: 3,
        degree: "Secondary School Certificate (SSC)",
        institution: "Kishoreganj Govt. Boys' High School",
        year: "2016 — 2018",
        description: "Completed with Science stream, achieving a perfect GPA of 5.00 out of 5.00.",
        side: "right"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 px-4 min-h-screen flex flex-col justify-center items-center scroll-mt-10">
            <h2 className="text-3xl sm:text-5xl font-bold mt-3 text-black text-center">
       Education
        </h2>
        <p className="mb-15 text-gray-500">My academic journey</p>

            <div className="relative max-w-5xl w-full">
                {/* Central Vertical Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-neutral-800" />

                <div className="space-y-12 relative">
                    {educationData.map((item) => (
                        <div key={item.id} className="relative flex items-center justify-between">
                            
                            {/* Left Side Content */}
                            <div className={`w-full md:w-[45%] ${item.side === "left" ? "block" : "hidden md:block md:visibility-hidden opacity-0"}`}>
                                {item.side === "left" && (
                                    <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-2xl hover:border-neutral-700 transition-colors">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl font-bold text-white tracking-wide">
                                                {item.degree}
                                            </h3>
                                            <span className="text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
                                                {item.year}
                                            </span>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 text-neutral-400 text-sm mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V9a2 2 0 012-2h2a2 2 0 012 2v12" />
                                            </svg>
                                            <span>{item.institution}</span>
                                        </div>
                                        
                                        <p className="text-neutral-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Center Circle Indicator */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-black border border-neutral-600 z-10 text-xs font-mono font-medium text-white shadow-lg">
                               
                            </div>

                            {/* Right Side Content */}
                            <div className={`w-full md:w-[45%] ${item.side === "right" ? "block" : "hidden md:block md:visibility-hidden opacity-0"}`}>
                                {item.side === "right" && (
                                    <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-2xl hover:border-neutral-700 transition-colors">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl font-bold text-white tracking-wide">
                                                {item.degree}
                                            </h3>
                                            <span className="text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
                                                {item.year}
                                            </span>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 text-neutral-400 text-sm mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V9a2 2 0 012-2h2a2 2 0 012 2v12" />
                                            </svg>
                                            <span>{item.institution}</span>
                                        </div>
                                        
                                        <p className="text-neutral-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;