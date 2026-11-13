import img from "../../../../assets/project img/qp.png";

import {
  FiArrowUpRight,
  FiCheckCircle,
  FiShield,
  FiCreditCard,
  FiMapPin,
  FiUsers,
  FiLock,
  FiLayers,
  FiCpu,
  FiKey,
  FiCloud,
} from "react-icons/fi";

import { FaGithub } from "react-icons/fa";

const techStack = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "JavaScript",
  "daisyUI",
  "React Hook Form",
  "Axios",
  "JWT",
  "Stripe",
  "Firebase",
  "React Router",
];

const QuickparkDetails = () => {
  const features = [
    {
      icon: <FiMapPin />,
      title: "Parking Discovery",
      points: [
        "Explore available parking locations.",
        "View detailed spot information and amenities.",
        "Compare transparent hourly and daily pricing.",
        "Interactive map integration for easy navigation.",
      ],
    },
    {
      icon: <FiUsers />,
      title: "Partner Management",
      points: [
        "Streamlined onboarding to become a parking partner.",
        "Submit and configure parking space listings.",
        "Track partner application status.",
        "Manage approved parking spaces through a dashboard.",
      ],
    },
    {
      icon: <FiShield />,
      title: "Admin Dashboard",
      points: [
        "Manage all registered platform users.",
        "Control user roles and permissions.",
        "Review incoming partner applications.",
        "Approve or reject partner applications.",
      ],
    },
    {
      icon: <FiCreditCard />,
      title: "Secure Payments",
      points: [
        "Stripe payment gateway integration.",
        "Secure online checkout flow.",
        "Server-side payment intent verification.",
      ],
    },
  ];

  const security = [
    "Firebase Authentication",
    "Google OAuth Sign-In",
    "Protected Private Routes",
    "Backend JWT Verification",
    "Role-Based Access Control",
  ];

  const projectSpecs = [
    {
      label: "Project Type",
      value: "Full-Stack Web App",
      icon: <FiLayers />,
    },
    {
      label: "Architecture",
      value: "MERN Stack",
      icon: <FiCpu />,
    },
    {
      label: "Authentication",
      value: "Firebase & JWT",
      icon: <FiKey />,
    },
    {
      label: "Payments",
      value: "Stripe",
      icon: <FiCreditCard />,
    },
    {
      label: "Deployment",
      value: "Firebase & Vercel",
      icon: <FiCloud />,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50/70 text-slate-800 selection:bg-indigo-100 selection:text-indigo-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* Hero Section */}
        <section className="my-14">
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="text-xs font-semibold text-purple-700 bg-indigo-50 border border-indigo-200/70 px-3 py-1 rounded-full">
              Full-Stack SaaS
            </span>

            <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full">
              MERN Stack
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
                Quick Park
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A smart parking management platform connecting drivers with
                parking space owners through location-based discovery, partner
                management, and secure online payments.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://quick-park-2f5a4.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn group rounded-2xl bg-purple-400 text-white hover:bg-gray-200 hover:text-black hover:shadow-black px-3"
              >
                Live Preview
                <FiArrowUpRight className="text-white group-hover:text-black transition-colors" />
              </a>

              <a
                href="https://github.com/noymuljim/quick_park_client"
                target="_blank"
                rel="noopener noreferrer"
                className="btn group rounded-2xl bg-gray-800 text-white hover:bg-gray-200 hover:text-black hover:shadow-black px-3"
              >
                <FaGithub className="text-white group-hover:text-black transition-colors" />
                Frontend
              </a>

              <a
                href="https://github.com/noymuljim/quick_park_server"
                target="_blank"
                rel="noopener noreferrer"
                className="btn group rounded-2xl bg-gray-800 text-white hover:bg-gray-200 hover:text-black hover:shadow-black px-3"
              >
                <FaGithub className="text-white group-hover:text-black transition-colors" />
                Backend
              </a>
            </div>
          </div>
        </section>

        {/* Browser Mockup Showcase */}
        <section className="mb-20">
          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-100 to-slate-200/50 p-3 sm:p-6 shadow-sm">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl">

              {/* Browser Top Chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200/70">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>

                <div className="hidden sm:flex items-center gap-2 px-4 py-1 rounded-md bg-white border border-slate-200/80 text-xs text-slate-400 font-mono">
                  <FiLock className="text-emerald-500 text-[10px]" />
                  quick-park-2f5a4.web.app
                </div>

                <div className="w-12" />
              </div>

              {/* Project Screenshot */}
              <div className="bg-white">
                <img
                  src={img}
                  alt="Quick Park website preview"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview, Tech Stack & Project Specs */}
        <section className="space-y-6 mb-20">
          
          {/* Top Full-Width Card: About the Project (With Background Glow) */}
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-600 via-gray-700 to-slate-900 text-white p-7 sm:p-9 rounded-3xl shadow-sm">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 tracking-tight">
                About the Project
              </h2>

              <div className="space-y-4 text-gray-200 leading-relaxed text-sm sm:text-base max-w-4xl">
                <p>
                  Quick Park is a full-stack parking management platform built to bridge
                  the gap between drivers looking for reliable parking and property
                  owners looking to monetize unused spaces through one centralized
                  ecosystem.
                </p>

                <p>
                  Drivers can browse verified parking locations, compare rates, and
                  complete secure bookings via online payment (Stripe). Meanwhile,
                  property owners can apply for partner status to manage listings, while
                  admins manage user roles and partner approvals.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row: Two Side-by-Side Cards (Tech Stack & Specifications) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Bottom Card: Tech Stack */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    Tech Stack
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 text-xs font-medium bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 px-3 py-1.5 rounded-lg border border-slate-200/80 hover:border-indigo-200 transition-colors"
                    >
                      <span className="text-indigo-500 font-mono text-[11px]">
                        &lt;/&gt;
                      </span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Bottom Card: Project Specifications */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    Specifications
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectSpecs.map((spec) => (
                    <div
                      key={spec.label}
                      className="group flex items-start gap-2.5 p-1.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-indigo-500 mt-0.5 text-sm shrink-0">
                        {spec.icon}
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          {spec.label}
                        </p>

                        <p className="text-sm font-semibold text-slate-800 truncate">
                          {spec.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Problem & Solution */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Problem & Solution
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Problem Card */}
            <div className="rounded-2xl p-7 sm:p-8 bg-white border border-slate-200/80 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                The Problem
              </h3>

              <ul className="space-y-3.5 text-sm text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  Finding available parking in congested urban areas is
                  unpredictable and time-consuming.
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  Drivers lack upfront visibility into parking availability,
                  rules, and hourly pricing.
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  Private space owners lack dedicated tools to list, verify,
                  and manage bookings.
                </li>
              </ul>
            </div>

            {/* Solution Card (With Background Glow) */}
            <div className="relative overflow-hidden rounded-2xl p-7 sm:p-8 bg-gradient-to-br from-gray-600 via-gray-700 to-slate-900 text-white shadow-lg shadow-indigo-900/10">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4">
                  The Solution
                </h3>

                <ul className="space-y-3.5 text-sm text-indigo-100 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                    A centralized marketplace to search and reserve verified
                    parking spots.
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                    Clear location details, map views, and transparent rate
                    breakdowns.
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                    Dedicated partner onboarding and listing management
                    dashboards.
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                    End-to-end Stripe checkout backed by role-based admin
                    moderation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Key Features
            </h2>

            <p className="text-slate-500 text-sm">
              Core modules engineered for drivers, parking partners, and
              administrators.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-indigo-200 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl text-indigo-600 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
                    {feature.icon}
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg">
                    {feature.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed"
                    >
                      <FiCheckCircle className="text-emerald-500 shrink-0 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Security Section */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Security
          </h2>

          <p className="text-slate-500 text-sm mb-6">
            Multi-layered protection across client routes and API endpoints.
          </p>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-7 sm:p-8 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              {security.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-sm font-medium text-slate-700"
                >
                  <FiLock className="text-indigo-600 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

 {/* Final Project Link */}
      {/* Final Project Link */}
<section className="mb-10">
  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-700 via-slate-800 to-slate-950 p-8 sm:p-10 text-center">
    <div className="absolute -top-24 -right-20 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-24 -left-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

    <div className="relative z-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Explore Quick Park
      </h2>

      <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-7">
        Visit the live application to explore parking discovery, space
        bookings, partner management, and secure online payments.
      </p>

      <a
        href="https://quick-park-2f5a4.web.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 hover:bg-indigo-100 font-semibold text-sm px-6 py-3 transition-colors"
      >
        Visit Live Project
        <FiArrowUpRight />
      </a>
    </div>
  </div>
</section>
      </div>
    </main>
  );
};

export default QuickparkDetails;