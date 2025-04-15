import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/UI/Pages/Loading";
import { Navbar } from "./components/UI/Pages/Navbar";
import { MobileMenu } from "./components//UI/Pages/MobileMenu";
import { Home } from "./components/UI/Pages/Home";
import { About } from "./components/UI/Pages/About";
import { ProjectsExperience } from "./components/UI/Pages/ProjectsExperience";
import "./index.css";
import { Contact } from "./Components/UI/Pages/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={` bg-[radial-gradient(circle_at_center,#6E6666,transparent)] min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <ProjectsExperience />
        <Contact />
      </div>
    </>
  );
}

export default App;