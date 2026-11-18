import {
  FaFigma,
  FaPencilRuler,
  FaThLarge,
  FaLayerGroup,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaInfinity,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVercel, SiSwiper, SiPostman, SiNetlify } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { BsCircle, BsStripe } from "react-icons/bs";
import { TbBrandNpm } from "react-icons/tb";
import { RxStitchesLogo } from "react-icons/rx";

/* color = brand color. null = theme text color (for black logos). */
const technicalSkills = [
  {
    category: "Design",
    skills: [
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "UI/UX", icon: FaPencilRuler, color: "#A259FF" },
      { name: "Wireframing", icon: FaThLarge, color: "#0ACF83" },
      { name: "Prototyping", icon: FaLayerGroup, color: "#1ABCFE" },
      { name: "Stitch", icon: RxStitchesLogo, color: "#1ABCFE" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript ES6", icon: FaJs, color: "#F7DF1E" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind css", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Swiper", icon: SiSwiper, color: "#6333F6" },
      { name: "Marqee", icon: FaInfinity, color: "#FF5733" },
      { name: "SweetAlert2", icon: BsCircle, color: "#E2AC93" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: null },
      { name: "REST APIs", icon: MdApi, color: "#FF6C37" },
      { name: "Stripe", icon: BsStripe, color: "#635BFF" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    category: "Workflow",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: null },
      { name: "Vercel", icon: SiVercel, color: null },
      { name: "Netlify", icon: SiNetlify, color: null },
      { name: "NPM", icon: TbBrandNpm, color: "#FFCA28" },
      { name: "Postman", icon: SiPostman, color: "#F05032" },
    ],
  },
];

const Skill = ({ name, icon: Icon, color }) => (
 <li className="flex w-20 flex-col items-center gap-2 rounded-2xl border border-base-content/10 bg-base-200/60 px-2 py-3 transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:scale-100">
  <Icon
    aria-hidden="true"
    className={`h-8 w-8 ${color ? "" : "text-base-content"}`}
    style={color ? { color } : undefined}
  />
  <span className="text-center text-[11px] font-medium leading-tight text-base-content/80">
    {name}
  </span>
</li>
);

const TechnicalSkills = () => {
  return (
    <section id="skills" className="relative mx-auto w-full max-w-5xl px-4 py-16">
      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
       
        <h2 className="text-3xl sm:text-5xl font-bold mt-3 text-black text-center">
          Skills
        </h2>
        <p className="mt-2 text-center  text-sm text-base-content/70 sm:text-base">
          The core technologies and tools I use to design, build, and deploy digital products.
        </p>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technicalSkills.map((group) => (
          <div
            key={group.category}
            className="rounded-3xl border border-base-content/10 bg-base-100/70 p-6 backdrop-blur"
          >
            <div>
              <h3 className="text-xl font-bold tracking-tight text-base-content">
                {group.category}
              </h3>

              {/* Icon tiles */}
              <ul className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <Skill key={skill.name} {...skill} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
