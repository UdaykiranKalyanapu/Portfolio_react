import { useEffect } from "react";
import { Menu } from 'lucide-react';
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
         

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <Menu className="w-6 h-6 text" />
          </div>

          <div className="hidden md:flex items-center space-x-8 ">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors hover:scale-120 transform"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors hover:scale-120 transform"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors hover:scale-120 transform"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors hover:scale-120 transform"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};