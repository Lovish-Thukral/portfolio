import { motion } from "framer-motion";
import assets from "../assets/assets";

function AboutMe() {
  interface InfoItem {
    icon: any;
    title: string;
    description: string;
  }

  interface Tool {
    name: string;
    icon: any;
  }

  const toolsList: Tool[] = [
    { name: "PostgreSQL", icon: assets.postgres },
    { name: "Linux", icon: assets.linux },
    { name: "Docker", icon: assets.docker },
    { name: "Kubernetes", icon: assets.kubernetes },
    { name: "AWS", icon: assets.aws },
    { name: "Git", icon: assets.git },
  ];
  const infoList: InfoItem[] = [
    {
      icon: assets.education,
      title: "Education",
      description: "B.Tech in Computer Science Engineering",
    },
    {
      icon: assets.project,
      title: "Core Focus",
      description:
        "System Design, Large-Scale Architecture & Distributed Systems",
    },
    {
      icon: assets.code,
      title: "AI Engineering",
      description: "Edge Inference, On-Device LLMs & Pipeline Optimization",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-1 scroll-mt-20 justify-center flex-col"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-bold lg:mb-10"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col items-center lg:flex-row gap-20 my-5 mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl"
        >
          <img
            src={assets.mypic}
            alt="Lovish Thukral"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="text-lg mb-10 w-full font-serif text-justify leading-relaxed">
            I’m a <strong>Computer Science student</strong> focused on
            <strong> AI Engineering and Distributed Systems</strong>. I build
            scalable infrastructure and high-performance systems designed to
            handle chaos at scale. Humanity keeps turning entire cities into
            computers and then acts surprised when they collapse.{" "}
            <strong>I just try to make them survive a little longer.</strong>
          </p>

          {/* Cards List */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-3 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-myblack dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                {/* Cleaned image rendering tag with targetable class names for your CSS filters */}
                <img
                  src={icon}
                  alt={title}
                  className="icon-metric w-7 my-3 brightness-0 dark:invert"
                />
                <h3 className="my-1 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="my-6 text-gray-700 font-serif dark:text-white/80"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 sm:gap-5"
          >
            {toolsList.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-white/5 dark:bg-darkHover/20"
                key={index}
                title={tool.name}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="icon-tool w-7 sm:w-7 dark:invert brightness-0"
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AboutMe;
