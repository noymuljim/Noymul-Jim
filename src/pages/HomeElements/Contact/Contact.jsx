import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const email = "noymulmatinjim@gmail.com";
    const phone = "+880 1912-863484";
    const whatsappNumber = "8801912863484";
    const linkedinUrl = "https://www.linkedin.com/in/noymul-matin-jim-7a119332a";
    const linkedinHandle = "in/noymul-matin-jim-7a119332a";

    const subject = encodeURIComponent("Jim's portfolio inquiry");
    const body = encodeURIComponent("Hi! I found your portfolio and I'd like to talk about...");
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    const whatsappText = encodeURIComponent("Hi! I found your portfolio and I'd like to talk about...");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

    return (
        <section id="contact" className=" bg-gradient-to-b from-gray-700 via-gray-900 to-black scroll-mt-24 py-24 px-4 relative overflow-hidden flex flex-col items-center justify-center">

            <div className="absolute w-96 h-96  rounded-full blur-3xl pointer-events-none -top-20" />

            <div className="max-w-4xl w-full mx-auto text-center relative z-10">

                {/* Rotating "Open to Work" Badge */}
                <div className="flex justify-center mb-8">
                    <div className="relative w-28 h-28 flex items-center justify-center rounded-full bg-white border border-slate-200/80 shadow-md shadow-indigo-950/[0.04] group hover:border-indigo-300 transition-colors">
                        <svg
                            className="w-full h-full animate-[spin_14s_linear_infinite] group-hover:[animation-play-state:paused]"
                            viewBox="0 0 100 100"
                        >
                            <defs>
                                <path
                                    id="badgeCircle"
                                    d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                                />
                            </defs>
                            <text className="text-[9.5px] font-mono font-bold uppercase tracking-[0.22em] fill-slate-700">
                                <textPath href="#badgeCircle" startOffset="0%">
                                    • OPEN TO WORK • AVAILABLE
                                </textPath>
                            </text>
                        </svg>

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-400" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl text-white lg:text-6xl font-extrabold tracking-tight  mb-6 uppercase">
                    From Concept to Creation <br />
                    <span className="text-transparent bg-clip-text bg-purple-400">
                        Let's Make It Happen!
                    </span>
                </h2>

                <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    I'm available for full-time roles or freelance projects.
                </p>

                <div className="mb-12">
                    <a
                        href={mailtoLink}
                        className="inline-flex items-center gap-3 bg-white hover:bg-neutral-200 text-neutral-950 font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <span>Let's get in touch</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>



                <div className="flex flex-wrap items-center justify-center gap-4 p-4 mx-auto">


                    <a
                        href={mailtoLink}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors text-left group"
                    >
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                                Email Me
                            </p>
                            <p className="text-sm font-semibold text-neutral-200 truncate">
                                {email}
                            </p>
                        </div>
                    </a>


                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors text-left group"
                    >
                        <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                            <FaWhatsapp className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                                WhatsApp Me
                            </p>
                            <p className="text-sm font-semibold text-neutral-200">
                                {phone}
                            </p>
                        </div>
                    </a>


                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors text-left group"
                    >
                        <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                            <FaLinkedin className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                                Connect on LinkedIn
                            </p>
                            <p className="text-sm font-semibold text-neutral-200 truncate">
                                {linkedinHandle}
                            </p>
                        </div>
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Contact;