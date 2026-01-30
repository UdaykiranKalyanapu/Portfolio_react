import { motion } from "framer-motion";
import { Smile } from "lucide-react";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi There!! <Smile className="w-10 h-10 text-cyan-400" />
        </motion.h1>

        {/* Animated Subheading */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I'm UDAYKIRAN KALYANAPU
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          className="text-gray-400 text-xl mb-8 max-w-xl mx-auto font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Graduate in Computer Science from The George Washington University, Washington DC, with a strong focus on Cloud Engineering and Data Analytics. Passionate about designing scalable cloud native solutions, building data driven systems, and leveraging analytics to drive intelligent decision making. Experienced in software engineering with a solid foundation in quality assurance, automation, and system reliability. Actively exploring modern cloud platforms, data pipelines, and emerging technologies to build secure, high performance, and impactful solutions.
        </motion.p>

        {/* Tagline paragraph */}
        <motion.p
          className="text-gray-400 text-xl mb-8 max-w-lg mx-auto font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          💻 Ex-Senior Software Engineer @Capgemini | Graduate Teaching Assistant @ The George Washington University |🎓Master's Student @GWU |
          Passionate about innovative software development and cutting-edge technologies✨.<br />
          <span className="font-extrabold">#LoveToLearn #CodeArtistry #TechEnthusiast</span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="border border-zinc-500/50 text-zinc-200 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-700/60"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="border border-zinc-500/50 text-zinc-200 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-700/60"
          >
            Reach Me Here!
          </a>
        </motion.div>
      </div>
    </section>
  );
};
