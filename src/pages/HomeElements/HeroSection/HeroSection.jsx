import vid from "../../../assets/hero_bg_fly.mp4";

const HeroSection = () => {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // NO bg color here. Video fades into body gradient.
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden text-white"
    >
      {/* Background video, masked fade at bottom */}
      <div className="absolute inset-0 z-0 hero-fade bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src={vid} type="video/mp4" />
        </video>

        {/* top shade: navbar readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-transparent" />

        {/* bottom tint: dark → blue/purple before light */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/30 via-blue-500/10 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 pt-28 text-center flex flex-col items-center">


        {/* Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          Hello, <span className="italic text-purple-300 font-normal">i am</span>
        </h1>
        <h1 className="text-3xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Noymul Matin Jim
        </h1>

        {/* Bio */}
        <p className="mb-5">A MERN Stack Developer with experience in UI/UX Design from Bangladesh.</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            onClick={(e) => scrollTo(e, "projects")}
            className="inline-block text-center w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-950 bg-purple-200 hover:bg-green-200 shadow-lg shadow-green-400/20 hover:shadow-green-200/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            View Projects
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="inline-block text-center w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white border border-white/30 bg-white/5 backdrop-blur-md hover:bg-white/15 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;