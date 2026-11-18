const educationData = [
  {
    id: 1,
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University",
    year: "2022 — 2026",
    highlight: "CGPA: 3.25",
    description:
      "Focused on Software Engineering, Data Structures, Algorithms, and UI/UX with Web & Android Technologies.",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Gurudayal Government College, Kishoreganj",
    year: "2018 — 2020",
    highlight: "GPA: 5.00 / 5.00",
    description:
      "Completed in the Science stream with a top academic record, building a strong analytical foundation.",
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "Kishoreganj Govt. Boys' High School",
    year: "2016 — 2018",
    highlight: "GPA: 5.00 / 5.00",
   
  },
];

const certificatesData = [
  {
    id: 1,
    title: "Completed Full Stack Web Development",
    issuer: "Programming Hero",
    year: "July-2025",
    
    description:
      "Comprehensive training covering modern full-stack engineering with MERN Stack",
    viewLink: "https://drive.google.com/file/d/1XSQYYJ3VHga8BlHW0PHPNR5HpuL--qWr/view?usp=sharing",
  },
  {
    id: 2,
    title: "Participant: Robotronics Fest 2025",
    issuer: "University of Dhaka (DU Robotics Club)",
    year: "August 9–10, 2025",
   
    description:
      "Participated in the premier national robotics and electronics festival organized by the Dhaka University Robotics Club.",
    viewLink: "#", 
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-10 overflow-hidden"
    >

      <div className="text-center mb-16 relative z-10">
       {/* heading */}
        <h2 className=" text-2xl sm:text-5xl font-extrabold ">
          Education & Certificates
        </h2>
        <p className="mt-3 text-gray-500 dark:text-neutral-400 text-base max-w-xl mx-auto">
        My academic track record and technical certifications.
        </p>
      </div>

      {/* Two-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Education Column */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-purple-400 text-white shadow-lg shadow-purple-600/30">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">
              Education
            </h3>
          </div>

          <div className="space-y-6 relative pl-6 sm:pl-8 border-l-2 border-neutral-200 dark:border-neutral-800">
            {educationData.map((item) => (
              <div
                key={item.id}
                className="relative group bg-white dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800/80 rounded-2xl p-6 sm:p-7 shadow-xl shadow-neutral-900/5 dark:shadow-none hover:border-purple-500/50 hover:shadow-purple-500/5 transition-all duration-300"
              >
                {/* Timeline Node Point */}
                <span className="absolute -left-[33px] sm:-left-[41px] top-8 w-4 h-4 rounded-full bg-neutral-900 dark:bg-white border-4 border-neutral-100 dark:border-[#0a0a0a] group-hover:bg-purple-600 transition-colors" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">
                    {item.year}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mt-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  {item.degree}
                </h4>

                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm mt-1 mb-4 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V9a2 2 0 012-2h2a2 2 0 012 2v12" />
                  </svg>
                  <span>{item.institution}</span>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Column */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-purple-400 text-white shadow-lg shadow-purple-600/30">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold ">
              Certificates
            </h3>
          </div>

          <div className="space-y-6 relative pl-6 sm:pl-8 border-l-2 border-neutral-200 dark:border-neutral-800">
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                className="relative group bg-white dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800/80 rounded-2xl p-6 sm:p-7 shadow-xl shadow-neutral-900/5 dark:shadow-none hover:border-purple-500/50 hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Timeline Node Point */}
                <span className="absolute -left-[33px] sm:-left-[41px] top-8 w-4 h-4 rounded-full bg-neutral-900 dark:bg-white border-4 border-neutral-100 dark:border-[#0a0a0a] group-hover:bg-purple-600 transition-colors" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                 
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mt-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 font-medium mt-1">
                    {cert.issuer}
                  </p>

                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mt-3">
                    {cert.description}
                  </p>
                </div>

                {/* View Certificate Link Button */}
                {cert.viewLink && cert.viewLink !== "#" && (
                  <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-end">
                    <a
                      href={cert.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 bg-purple-50 dark:bg-purple-500/10 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                    >
                      View Certificate
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;