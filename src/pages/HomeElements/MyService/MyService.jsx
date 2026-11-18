import { 
  FaCode, 
  FaPaintBrush, 
  FaMobileAlt, 
  FaTachometerAlt, 
  FaShoppingCart, 
  FaTools 
} from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="w-6 h-6 text-primary" />,
    iconBg: "bg-primary/10 border-primary/20",
    title: "Full-Stack Development",
    description: "Building fast, responsive interfaces with React & Node. Performance first, accessible clean code."
  },
  {
    icon: <FaPaintBrush className="w-6 h-6 text-accent" />,
    iconBg: "bg-accent/10 border-accent/20",
    title: "UI/UX Design (Figma)",
    description: "Intuitive, user centered designs from wireframes to polished prototypes. Beautiful and functional."
  },
  {
    icon: <FaMobileAlt className="w-6 h-6 text-secondary" />,
    iconBg: "bg-secondary/10 border-secondary/20",
    title: "Responsive Web Design",
    description: "Pixel-perfect layouts on all devices with mobile first CSS Grid techniques."
  },
  {
    icon: <FaTachometerAlt className="w-6 h-6 text-warning" />,
    iconBg: "bg-warning/10 border-warning/20",
    title: "Web Performance",
    description: "Optimize load times, Core Web Vitals and runtime performance for lightning fast sites."
  },
  {
    icon: <FaShoppingCart className="w-6 h-6 text-primary" />,
    iconBg: "bg-primary/10 border-primary/20",
    title: "E-Commerce / saas Solutions",
    description: "Custom shopping experiences with secure payments, inventory management and smooth checkout flows or Any role based saas product."
  },
  {
    icon: <FaTools className="w-6 h-6 text-secondary" />,
    iconBg: "bg-secondary/10 border-secondary/20",
    title: "Maintenance & Support",
    description: "Ongoing updates, security patches and proactive support to keep your site running smoothly."
  }
];

const MyService = () => {
    return (
        <section className="py-20 text-base-content">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                  
                    <h2 className="text-3xl sm:text-5xl font-bold mt-3 text-black">
                        Services
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-center text-gray-500">
                        Combining hands on freelance UI/UX expertise with deep MERN stack development skills to deliver exceptional results.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-white/70 backdrop-blur-md border border-white/80 rounded-box p-8 shadow-sm transition-transform duration-300 ease-out hover:scale-[1.02]"
                        >
                            {/* Icon Box */}
                            <div className={`w-12 h-12 rounded-field border flex items-center justify-center mb-6 ${service.iconBg}`}>
                                {service.icon}
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl font-bold text-base-content mb-3">
                                {service.title}
                            </h3>
                            <p className="text-base-content/70 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyService;