const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-black text-neutral-400 border-t border-neutral-900 pt-20 pb-12 px-4 relative overflow-hidden">
            
            {/* Background Full-Width Giant Gray Text "JIM" */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
                <span className="text-[25vw] font-black tracking-tighter text-neutral-900/100 uppercase leading-none text-center w-full">
                    JIM
                </span>
            </div>

            {/* Content Container (z-10 overlay above background text) */}
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
                    
                    {/* Brand / About Column */}
                    <div className="md:col-span-6 space-y-4">
                        <a href="#home" className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                            Portfolio
                        </a>
                        <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
                            Passionate Full-Stack Developer specializing in building dynamic web applications with React, Node.js, and modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                            <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
                            Connect
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                                    Twitter / X
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Back to Top */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
                    <p>© {currentYear} All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Designed & Built with <span className="text-red-500">❤️</span> using React & Tailwind CSS
                    </p>
                    <a 
                        href="#home" 
                        className="hover:text-white transition-colors font-medium flex items-center gap-1 bg-neutral-950 border border-neutral-800 px-3 py-1.5 rounded-lg"
                    >
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;