import { motion } from "framer-motion";
import assets from "../assets/assets";

function Projects() {
  interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
  }

  const projects: Project[] = [
    {
      title: "Sabrina AI - Native AI Agent",
      description:
        "Al Voice Assistant | Local LLM | Real-Time Command Execution",
      image: assets.sabrina,
      link: "https://github.com/Lovish-Thukral/Sabrina",
    },
    {
      title: "Nextep AI – Intelligent Career Platform",
      description:
        "AI-Powered Personality Identification | Groq API | Roadmap Creation",
      image: assets.nextep,
      link: "https://github.com/Lovish-Thukral/Nextep-AI",
    },
    {
      title: "Bliss - Social Platform",
      description: "Full Stack Social Platform | MERN Stack | Real-Time Chat",
      image: assets.bliss,
      link: "https://github.com/Lovish-Thukral/Bliss",
    },
    {
      title: "Lattix Innovations",
      description: "UI Design | Frontend Development | Web Solutions",
      image: assets.lattix,
      link: "https://github.com/Lovish-Thukral/Lattix",
    },
  ];

  return (
    <div className="w-full flex flex-col p-[10%] justify-center items-center gap-5" id="work">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl not-sm:text-xl font-bold font-serif"
      >
        My Work
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl not-sm:text-2xl font-serif"
      >
        My Work Projects, Systems & Scalable Mistakes
      </motion.h2>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl not-sm:text-xl font-bold font-serif"
      >
        A collection of systems, infrastructure, and solutions to problems
        software keeps creating.
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full p-6 md:p-10">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
        group relative flex flex-col h-95
        overflow-hidden rounded-3xl
        bg-white dark:bg-black
        border border-black/5 dark:border-white/10
        shadow-sm hover:shadow-2xl dark:shadow-none
        transition-all duration-300 ease-out
        hover:-translate-y-1
      "
            initial={{
              opacity: 0,
              // Even indices start 50px left (-50), Odd indices start 50px right (50)
              x: index % 2 === 0 ? -50 : 50,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              delay: index * 0.1, // Stagger them so they flow inward organically
              ease: [0.25, 0.4, 0.25, 1], // Snappy decelerating curve
            }}
          >
            <div className="relative h-[55%] w-full overflow-hidden bg-gray-50 dark:bg-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="
            h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div
              className="
        absolute top-4 right-4 z-30 flex items-center justify-center
        w-10 h-10 rounded-full
        bg-black/50 backdrop-blur-md
        text-white
        opacity-0 translate-y-2
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-300
      "
            >
              <img
                src={assets.link}
                alt="link"
                className="w-5 h-5 invert brightness-0"
              />
            </div>

            <div className="relative z-20 flex flex-col flex-1 p-6 justify-between bg-white dark:bg-[#0a0a0a]">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
