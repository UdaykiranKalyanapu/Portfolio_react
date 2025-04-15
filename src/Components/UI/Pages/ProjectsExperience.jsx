import { RevealOnScroll } from "../Pages/RevealOnScroll";
import Flightticket from "../../../assets/Flightticket.png";
import Cyberbullying from "../../../assets/Cyberbullying.png";
import autostereogram from "../../../assets/autostereograms.png";
import UIpath from "../../../assets/Ui Path.png";
import hashcat from "../../../assets/hashcat.png";
import MachineSimulator from "../../../assets/machineSimulator.png";
import mHub from "../../../assets/mHub.png";
const projects = [
  {
    title: "MelodyHub - MERN Stack Music App",
    role: "Student Project",
    duration: "2025",
    description:
      "Developed a full-stack music streaming web application using the MERN stack. Implemented features such as song upload, playback, admin authentication, and user activity tracking. Ensured seamless frontend-backend integration and used Zustand for state management.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Zustand", "Tailwind CSS", "Cloudinary"],
    image: mHub,
    github: "https://github.com/UdaykiranKalyanapu/CSCI_6234_OOD"
  },
  {
    title: "Detection of Cyberbullying Using ML",
    role: "Team Member",
    duration: "Jan 2021 - Dec 2021",
    description:
      "Implemented ML algorithms on Twitter data to detect cyberbullying. Preprocessed and classified tweets using SGD, Naïve Bayes, Random Forest, and Logistic Regression, achieving 93% accuracy with Random Forest. Published in GIJET 2022.",
    tech: ["Python", "Pandas", "Google Colab", "Kaggle", "ML Classifiers"],
    image: Cyberbullying,
    github: "https://thegrenze.com/index.php?display=page&view=journalabstract&absid=1054&id=8"
  },
  

  {
    title: "Flight Ticket Booking System - Test Automation",
    role: "Automation Tester",
    duration: "Capgemini Hackathon 2023",
    description:
      "Built a Custom Selenium test framework with Java, TestNG, Cucumber, and Postman. Used BDD and Extent Reports for parallel testing and test visibility.",
    tech: ["Java", "Selenium", "TestNG", "Cucumber", "Postman", "JIRA"],
    image: Flightticket,
    github: "https://github.com/UdaykiranKalyanapu/SeleniumAutomationTesting"
  },
  {
    title: "Autostereograms using Python",
    role: "ML Developer",
    duration: "2024",
    description:
      "Converted 2D video frames to 3D depth maps using MiDaS, generating Random Dot, Textured, and Pattern autostereograms. Also Managed depth to create effecient Atostereogram videos",
    tech: ["Python", "OpenCV", "PyTorch", "MiDaS", "Google Colab"],
    image: autostereogram,
    github: "https://github.com/UdaykiranKalyanapu/Autostereograms"
  },
  {
    title: "Machine Simulator",
    role: "Java Developer",
    duration: "2024",
    description:
      "Simulated processor internals using JavaFX and Scene Builder. Included ALU, memory units, and instruction decoding pipeline.",
    tech: ["Java", "JavaFX", "Scene Builder", "OOP, MIPS, Computer Architecture"],
    image: MachineSimulator,
    github: "https://github.com/UdaykiranKalyanapu"
  },
  {
    title: "Hashing Flow",
    role: "Automation Developer",
    duration: "2022",
    description:
      "Created a secure hashing automation flow using UiPath and Java. Managed flows via Orchestrator.",
    tech: ["UiPath", "Java", "Automation", "Orchestrator"],
    image: UIpath,
    github: "https://www.linkedin.com/in/udaykiran-kalyanapu-9713b2172/details/certifications/1728338396950/single-media-viewer/?profileId=ACoAACj-UeUByAz97viBdfChiVPuKZMmYBHdyO0"
  },
  {
    title: "Hospital Appointment System",
    role: "Android Developer",
    duration: "2022",
    description:
      "Built an Android app using Kotlin and Firebase for hospital appointment scheduling and doctor-side schedule management.",
    tech: ["Kotlin", "Java", "Firebase", "Android Studio", "XML", "XAMPP"],
    image: hashcat,
    github: "https://github.com/yourusername/hospital-appointment-system"
  },
  {
    title: "Passwords Cracking",
    role: "Researcher",
    duration: "2023",
    description:
      "Used Hashcat and Hashview to analyze and crack password hashes. Evaluated attack strategies for password security testing.",
    tech: ["Hashcat", "Hashview", "Password Security"],
    image: hashcat,
    github: "https://github.com/UdaykiranKalyanapu/PasswordsCracking/tree/main"
  }
];

export const ProjectsExperience = () => {
  return (
    <section id="projects" className="min-h-screen py-20 flex items-center justify-center">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] transform transition-transform hover:-translate-y-1 bg-white/5"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm italic text-gray-400 mb-2">
                    {project.role} · {project.duration}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 hover:shadow-sm transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
