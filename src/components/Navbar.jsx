import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaFileAlt } from "react-icons/fa"; // Import the icon for resume
import { SOCIAL_LINKS } from "../constants";

const Navbar = () => {
  return (
    <nav className="relative z-10 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-850 mb-16 flex items-center justify-between py-4 px-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-12 w-auto" />
      </div>

      {/* Navigation Links Section */}
      <div className="hidden lg:flex flex-grow justify-center gap-4">
        <Link to="about" smooth={true} duration={500} className="text-neutral-300 hover:text-cyan-400">
          About
        </Link>
        <Link to="technologies" smooth={true} duration={500} className="text-neutral-300 hover:text-cyan-400">
          Technologies
        </Link>
        <Link to="certifications" smooth={true} duration={500} className="text-neutral-300 hover:text-cyan-400">
          Certifications
        </Link>
        <Link to="projects" smooth={true} duration={500} className="text-neutral-300 hover:text-cyan-400">
          Projects
        </Link>
      </div>

      {/* Social Media Icons Section */}
      <div className="flex items-center justify-center gap-4 text-2xl text-gray-500">
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href={`mailto:${SOCIAL_LINKS.email}`} aria-label="Email">
          <FaEnvelope />
        </a>
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href={SOCIAL_LINKS.resume} target="_blank" rel="noopener noreferrer" aria-label="Resume"> {/* Add the resume link */}
          <FaFileAlt />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

