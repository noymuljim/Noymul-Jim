import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Logo from "../../component/Logo";
import { MdCloudDownload } from "react-icons/md";
const RESUME_URL =
    "https://drive.google.com/uc?export=download&id=1hzDus4qWMGDvby_fR8u5J5_oXFwu3EVZ";
const NAV_ITEMS = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "caseStudy", label: "Case-study" },
    { id: "education", label: "Education" },

    { id: "contact", label: "Contact" },
];

const Navbar = () => {
    const [active, setActive] = useState("home");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname !== "/") return;

        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-45% 0px -50% 0px" }
        );

        const timer = setTimeout(() => {
            NAV_ITEMS.forEach(({ id }) => {
                const el = document.getElementById(id);
                if (el) observer.observe(el);
            });
        }, 200);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, [location.pathname]);

    const scrollToSection = (id) => {
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const goToSection = (id) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => scrollToSection(id), 150);
        } else {
            scrollToSection(id);
        }
        setActive(id);
    };

    const handleClick = (e, id) => {
        e.preventDefault();
        goToSection(id);
        document.activeElement?.blur(); // close mobile dropdown
    };

    const links = (
        <li className="flex flex-row gap-2">
            {NAV_ITEMS.map(({ id, label }) => (
                <a
                    key={id}
                    href={`/#${id}`}
                    onClick={(e) => handleClick(e, id)}
                    className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm transition-all duration-300 ${location.pathname === "/" && active === id
                        ? "bg-purple-200 text-black font-semibold shadow-sm"
                        : "text-black hover:bg-white/40"
                        }`}
                >
                    {label}
                </a>
            ))}
        </li>
    );

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="navbar max-w-7xl mx-auto px-4 lg:px-8 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-black lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-white/90 backdrop-blur-xl text-white rounded-2xl z-10 mt-3 w-52 p-3 shadow-lg"
                        >
                            {links}
                        </ul>
                    </div>

                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            goToSection("home");
                        }}
                        aria-label="Scroll to top"
                    >
                        <Logo />
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center gap-1 rounded-full border border-white/40 bg-white/60 backdrop-blur-xl shadow-lg px-2 py-2">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    <a
                        href={RESUME_URL}
                        download="Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn group rounded-full bg-gray-800 text-white hover:bg-gray-200 hover:text-black hover:shadow-black px-6"
                    >
                        <MdCloudDownload className="text-white group-hover:text-black transition-colors" />
                        Resume
                    </a>
                </div>
            </div>
        </header>
    );
};
export default Navbar;

