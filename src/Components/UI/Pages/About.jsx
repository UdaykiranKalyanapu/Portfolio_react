

import { useState } from "react";
import MSlogo from "../../../assets/MSLogo.png";
import { RevealOnScroll } from "../Pages/RevealOnScroll";
//import RevealOnScroll from "./RevealOnScroll";
import { ChevronDown } from "lucide-react";
import Gwlogo from "../../../assets/Gwlogo.png";
import vtulogo from "../../../assets/vtulogo.jpg";
import cglogo from "../../../assets/cglogo.png";
import CodtechLogo from "../../../assets/codlogo.jpg";
import AWS from "../../../assets/AWS.png"
import ipser from "../../../assets/ipserLogo.jpg"
import udacity from "../../../assets/udacity.png";


export const About = () => {
  const [expandedEducation, setExpandedEducation] = useState(null);
  const [expandedWork, setExpandedWork] = useState(null);
const programmingLanguages = [
  "Java", "Python", "Kotlin", "JavaScript", "SQL",
  "C", "C++", "TypeScript"
];

const toolsAndFrameworks = [
  "Selenium", "Cucumber", "Manual Testing", "UI Path Automation", "Selenium IDE",
  "TestNG", "JUnit", "Karate DSL", "Rest Assured",
  "Postman", "Maven", "Jenkins", "Git", "GitHub",
  "Extent Reports", "Quality Center (QC)", "Rally"
];

const webDevelopment = [
  "HTML", "CSS", "JavaScript", "React.js", "Spring Boot", "JavaFX",
  "Node.js", "Express.js", "MongoDB",
  "Tailwind CSS", "Bootstrap", "RESTful APIs", "Microservices"
];

const softwareDevAndMethodologies = [
  "BDD Frameworks", "Agile Methodologies", "DBMS", "Software Testing", "Manual Testing", "Jenkins",
  "CI/CD Pipelines", "SDLC", "OOP Concepts", "Version Control (Git)", "Design Patterns"
];

const machineLearningAndDataScience = [
  "Machine Learning", "Data Structures", "Kaggle", "Google Colab",
  "PyTorch", "OpenCV", "NumPy", "Pandas", "Scikit-learn", "YOLO",
  "K-Means Clustering", "CNN", "Pseudo-LiDAR", "Computer Vision"
];

const otherToolsAndPlatforms = [
  "Microsoft Excel", "Microsoft PowerPoint", "SharePoint", "JIRA", "Jenkins",
  "Canvas", "Hashcat", "Password Hashing", "AWS", "Microsoft Fabric","GCP",
  "Azure", "Red Hat OpenShift", "Kubernetes", "Docker", "Linux",
  "UiPath Orchestrator", "VS Code", "IntelliJ IDEA", "Eclipse"
];


  const skillSections = [
    { title: "Programming Languages", skills: programmingLanguages },
    { title: "Web & App Development", skills: webDevelopment },
    { title: "Testing Tools & Frameworks", skills: toolsAndFrameworks },
    { title: "Software Dev & Methodologies", skills: softwareDevAndMethodologies },
    { title: "Machine Learning & Data Science", skills: machineLearningAndDataScience },
    { title: "Other Tools & Platforms", skills: otherToolsAndPlatforms }
  ];

  const educationData = [
    {
      id: 1,
      logo: Gwlogo,
      title: "M.S. in Computer Science",
      institution: "The George Washington University, Washington, DC",
      cgpa: "CGPA: 3.93 / 4.0",
      duration: "(Jan 2024 - Dec 2025)",
      coursework:
        "Coursework: Design and Analysis of Algorithms, Advanced Software Paradigms, Computer System Architecture, Computer Vision, Software Engineering, Database Management."
    },
    {
      id: 2,
      logo: vtulogo,
      title: "B.Tech in Computer Science and Engineering",
      institution: "Veltech University, Chennai, IND",
      cgpa: "CGPA: 3.54 / 4.0",
      duration: "(2018 - 2022)",
      coursework:
        "Coursework: Artificial Intelligence, Object-Oriented Design, Database Management, UI Path Automation, Software Design, Software Engineering, Compiler Design, Computer Architecture, Internet Programming, Mobile Application Development."
    }
  ];

  const workData = [

  {
            id: 1,
            logo: Gwlogo,
            company: "George Washington University",
            title: "Student Academic Assistant II",
            duration: "Aug 2025 - Present",
            description: `• As a Grader for CSCI 6461 (Computer System Architecture), I evaluate graduate student assignments, exams, and projects to ensure fairness and accuracy in assessment.
             I review technical work related to processor design, memory hierarchy, instruction sets, and architectural principles, providing constructive feedback to support student learning.
             I also assist in managing course projects, clarifying expectations, and addressing student questions to help them strengthen their understanding of complex computer architecture concepts.`

          },
{
            id: 2,
            logo: ipser,
            company: "IpserLab",
            title: "Software Engineer Intern",
            duration: "June 2025 - Aug 2025",
            description: `• At IpserLab, I was interning in a hybrid role as a Backend Developer and QA Engineer.
            On the development side, I work with the Java Bandung framework to build backend entities, design RESTful APIs, and integrate server-side logic with databases.
            Simultaneously, I contribute to quality assurance by creating and executing test cases, performing manual and automated testing, and validating feature functionality across different environments.`
          },
      {
            id: 3,
            logo: CodtechLogo,
            company: "Codtech IT Solutions",
            title: "Machine Learning Trainee",
            duration: "June 2024 - July 2024",
            description: `• Gained hands-on experience with supervised machine learning algorithms, focusing on classification tasks using real-world datasets from Kaggle.
      • Implemented and evaluated models including Naive Bayes, Random Forest, and Logistic Regression for sentiment analysis of IMDB movie reviews.
      • Developed a second model to predict BMI values based on user inputs using similar classifiers and data preprocessing techniques.
      • Built interactive GUI applications for both projects using Streamlit, allowing users to input data and view model predictions and performance metrics.
      • Strengthened practical knowledge in model evaluation, feature engineering, and deploying ML models with user-facing interfaces.`
          },
      {
            id: 4,
            logo: Gwlogo,
            company: "George Washington University",
            title: "Student Academic Assistant II",
            duration: "Aug 2024 - May 2025",
            description: `• Serving as a Student Academic Assistant for Course 6461 – Computer System Architecture at The George Washington University.
      • Responsible for grading assignments and supporting students with academic queries to enhance their understanding of computer architecture concepts.
      • Guide students through core topics such as MIPS instruction sets, memory hierarchy, and CPU design principles.
      • Actively involved in the Machine Simulator project, assisting students in developing and debugging simulations of processor behavior.
      • Continuously expanding my knowledge in Java development and low-level system design through hands-on experience with MIPS architecture and instruction-level programming.`
          },

    {
      id: 5,
      logo: cglogo,
      company: "Capgemini",
      title: "Senior Software Engineer",
      duration: "Oct 2022 - Dec 2023",
      description: `• Developed and maintained 50+ Selenium automation test scripts using Java, Cucumber, and TestNG, enabling parallel execution and reducing test cycle time by 30%. 
• Designed and implemented 100+ API test cases based on business requirements, achieving 95% test coverage. 
• Executed daily manual API validations using Postman, identifying critical defects and improving API stability by 20%. 
• Conducted comprehensive regression testing and generated detailed test summary reports, reducing post-release bugs by 40%. 
• Automated RESTful API tests using RestAssured for faster, more consistent test execution in CI/CD pipelines. 
• Earned Selenium Practitioner Certification, demonstrating advanced proficiency in automation frameworks. 
• Managed and resolved 30+ Jira queries, facilitating effective collaboration and timely sprint delivery.`
    },
    {
      id: 6,
      logo: cglogo,
      company: "Capgemini",
      title: "Automation Tester",
      duration: "Feb 2022 - Apr 2022",
      description: `• Completed Level 1 Training in Automation Testing, gaining hands-on experience with real-world test planning and execution.
• Acquired in-depth knowledge of various software testing techniques including functional, regression, and exploratory testing.
• Created user stories, test scenarios, test cases, and Requirement Traceability Matrix (RTM) reports to ensure full test coverage.
• Designed and executed manual tests and Selenium automation scripts for a property-selling website, Magic Bricks.
• Configured Jenkins build paths and successfully executed Selenium test scripts within a CI/CD environment.`
    },






  ];

  const certifications = [



    {
      title: "AWS Solution Architect",
      organization: "Amazon Web Services",
      description: "This certification validates the ability to design and deploy scalable, highly available, and cost-effective systems on AWS. It covers foundational AWS services, architecture best practices, and the use of AWS tools for building resilient cloud infrastructure.",
      logo: AWS,
       link: "src/Certificates/AWS Solutions Architect - Associate.pdf"
    },{
  title: "Microsoft Fabric Analytics Engineer (DP-700)",
  organization: "Microsoft",
  description: "Certified Microsoft Fabric Analytics Engineer with strong expertise in designing and implementing end to end analytics solutions using Microsoft Fabric. Skilled in data ingestion, transformation, and modeling with Lakehouse and Data Warehouse, building scalable semantic models, and delivering insights through Power BI while ensuring data governance, security, and performance optimization.",
  logo: MSlogo,
  link: "src/Certificates/Fabric.pdf"
}
,
{
  title: "Microsoft Power Platform Fundamentals (PL-900)",
  organization: "Microsoft",
  description: "Certified in Microsoft Power Platform Fundamentals with foundational knowledge of Power BI, Power Apps, Power Automate, and Dataverse. Experienced in building low code solutions, automating business workflows, and integrating data across Microsoft services to improve productivity and business efficiency.",
  logo: MSlogo,
  link: "https://learn.microsoft.com/en-us/users/UKKU-1974/credentials/EC96C97297307AED?ref=https%3A%2F%2Fwww.linkedin.com%2Fz"
},
    {

      title: "GCP Associate Cloud Engineer",
      organization: "Google Cloud",
      description: "Certified Google Associate Cloud Engineer with proven ability to deploy, configure, and manage applications on Google Cloud Platform. Skilled in setting up virtual machines, Kubernetes clusters, networking, IAM policies, and monitoring solutions to ensure secure, scalable, and efficient cloud environments.",
      logo: "https://img.icons8.com/color/48/000000/google-cloud.png",
       link: "src/Certificates/AssociateCloudEngineer20250515-27-ennr94.pdf"
    },
 {
   title: "AWS AI/ML Engineer Nanodegree",
   organization: "Udacity x AWS",
   description: "A hands-on program focused on building and deploying real-world AI solutions using AWS services. It covers topics such as data engineering, machine learning workflows, and intelligent document retrieval using Amazon Bedrock, Lambda, SageMaker, and Aurora Serverless. Includes end-to-end projects involving generative AI, embeddings, and cloud deployments.",
   logo: udacity,
     link: "src/Certificates/AWSNDGrad.pdf"
 },


    {
      title: "Selenium Automation Engineer - Practitioner level",
      organization: "Capgemini",
      description: "I earned this certification after completing advanced training in Selenium automation testing. I learned how to create test scripts using Java, TestNG, and Cucumber, run tests automatically, and generate reports. I also practiced running tests on different browsers, working with frameworks, and using tools like Jenkins to automate the testing process.",
      logo: cglogo

    },
    {
      title: "UIPath RPA Developer",
      organization: "UIPath Academy",
      description: "Trained in robotic process automation using UIPath.",
      logo: "https://img.icons8.com/color/48/000000/uipath.png",
      link: "src/Certificates/1728338382792.pdf"
    },
    {
      title: "Salesforce Certified AI Specialist",
      organization: "Salesforce",
      description: "Skills: Agentforce, AI, Salesforce Service Cloud, Salesforce Lightning",
      logo: "https://img.icons8.com/color/48/000000/salesforce.png",
      link: "src/Certificates/Salesforce Agetnforce.pdf"
    },
    {
      title: "Red Hat OpenShift I: Containers and Kubernetes",
      organization: "Red Hat",
      description: "Skills: Kubernetes, Red Hat Linux, Containers",
      logo: "https://img.icons8.com/color/48/000000/red-hat.png",
      link: "src/Certificates/RH134.pdf"
    },
    {
      title: "Machine Learning with Python",
      organization: "IBM",
      description: "Completed foundational course in Python and Data Science.",
      logo: "https://img.icons8.com/color/48/000000/ibm.png",
      link: "src/Certificates/Coursera MN9ZWATVRKB7.pdf"
    },
    {
      title: "Agile Software Development",
      organization: "Capgemini",
      description: "Skills: Agile Methodologies, Project Management, Agile Testing, Agile Environment",
      logo: cglogo,
      link: "src/Certificates/Coursera 9Y3WABNMX6U5.pdf"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4">

        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">About Me</h2>
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-400   text-2xl mb-8 mx-auto">
              I’m Uday from Vijayawada, India, born in 2001 and deeply passionate about computers since childhood. I’m currently pursuing a Master of Science in Computer Science at The George Washington University in Washington, DC, having joined in January 2024. My academic journey began with a B.Tech in Computer Science from Veltech University in Chennai.
              <br /><br />
              Before starting my graduate studies, I worked as a Senior Software Engineer at Capgemini, where I sharpened my skills in automation testing and developed a strong appreciation for collaboration and agile teamwork. This experience fueled my passion for building high-quality software solutions and strengthened my commitment to continuous learning.
              <br /><br />
              Outside of academics and professional work, I enjoy playing badminton, where I have earned multiple medals through competitive participation. I also love exploring new places and embracing new ideas that challenge my perspective. Driven by curiosity and continuous learning, my long term goal is to build a strong career in software development and contribute to innovative, high impact projects that create meaningful real world value.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-8 mt-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Skills</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-200 ">
          {skillSections.map((section, index) => (
            <RevealOnScroll key={index}>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
                <h3 className="text-xl  font-bold mb-4">{section.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill, idx) => (
                    <span key={idx} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-l hover:bg-blue-500/20 hover:shadow transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <h2 className=" font-bold mb-8 mt-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-4xl">Education</h2>
        </RevealOnScroll>
        {educationData.map((edu) => (
          <RevealOnScroll key={edu.id}>
            <div className="flex items-start gap-4 p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all mb-4 cursor-pointer" onClick={() => setExpandedEducation(expandedEducation === edu.id ? null : edu.id)}>
              <img src={edu.logo} alt="Logo" className="w-12 h-12 object-contain rounded-full" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedEducation === edu.id ? "rotate-180" : ""}`} />
                </div>
                <p className="text-sm text-gray-400">{edu.institution} - {edu.cgpa} <br />{edu.duration}</p>
                <div className={`overflow-hidden transition-all duration-400 ease-in-out ${expandedEducation === edu.id ? "opacity-100 mt-2" : "opacity-0 h-0"}`}>
                  <p className="text-gray-300 text-sm whitespace-pre-line">{edu.coursework}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}

        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-8 mt-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Work Experience</h2>
        </RevealOnScroll>
        {workData.map((work) => (
          <RevealOnScroll key={work.id}>
            <div className="flex items-start gap-4 p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all mb-4 cursor-pointer" onClick={() => setExpandedWork(expandedWork === work.id ? null : work.id)}>
              <img src={work.logo} alt="Logo" className="w-15 h-15 object-contain rounded-full" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold mb-1">{work.title}</h3>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedWork === work.id ? "rotate-180" : ""}`} />
                </div>
                <p className="text-sm text-gray-400">{work.company} ({work.duration})</p>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedWork === work.id ? "opacity-100 mt-2" : "opacity-0 h-0"}`}>
                  <p className="text-gray-300 text-sm whitespace-pre-line">{work.description}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}

        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-8 mt-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Certifications</h2>
        </RevealOnScroll>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {certifications.map((cert, index) => (
           <RevealOnScroll key={index}>
             <a
               href={cert.link}
               target="_blank"
               rel="noopener noreferrer"
               className="rounded-xl p-6 border border-white/10 bg-white/5 hover:-translate-y-1 transition-all flex gap-4 items-center cursor-pointer"
             >
               <img src={cert.logo} alt={cert.title} className="w-12 h-12 object-contain rounded-lg" />
               <div>
                 <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                 <p className="text-sm text-blue-400">{cert.organization}</p>
                 <p className="text-sm text-gray-400">{cert.description}</p>
               </div>
             </a>
           </RevealOnScroll>
         ))}
       </div>


      </div>
    </section>
  );
};
