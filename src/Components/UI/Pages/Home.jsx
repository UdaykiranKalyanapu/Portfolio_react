import { RevealOnScroll } from "../Pages/RevealOnScroll";
import { Smile } from "lucide-react";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <RevealOnScroll animation="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 flex items-center justify-center gap-2">
            Hi There!! <Smile className="w-10 h-10 text-cyan-400" />
          </h1>
        </RevealOnScroll>

        <RevealOnScroll animation="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-blue-500">
            I'm UDAYKIRAN KALYANAPU
          </h2>
        </RevealOnScroll>

        <RevealOnScroll animation="fade-up">
          <p className="text-gray-400 text-xl mb-8 max-w-xl mx-auto  font-mono ">
            Graduate Student | Software Developer | QA & Test Automation Enthusiast.
            Currently pursuing a Master of Science in Computer Science at The George Washington University, Washington, DC (since January 2024). Passionate about software development, with a strong interest in quality assurance and test automation. Actively exploring emerging technologies to build reliable, scalable, and innovative solutions.
          </p>
       
          <p className="text-gray-400 text-xl mb-8 max-w-lg mx-auto font-mono">
            💻 Ex-Senior Software Engineer @Capgemini | 🎓Master's Student @GWU | Passionate about innovative software development and cutting-edge technologies✨.<br></br><span className="font-extrabold"> #LoveToLearn #CodeArtistry #TechEnthusiast </span>
          </p>
        </RevealOnScroll>

        <RevealOnScroll animation="fade-up">
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="border border-zinc-500/50 text-zinc-200 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-700/60"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="border border-zinc-500/50 text-zinc-200 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-700/60 "
            >
             Reach Me Here!
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
