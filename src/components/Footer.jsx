import React from "react";
import { SOCIAL_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline mx-2">LinkedIn</a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline mx-2">GitHub</a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline mx-2">Instagram</a>
        </div>
        <div className="mb-4">
          <p>Contact me: <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-cyan-500 hover:underline">{SOCIAL_LINKS.email}</a></p>
        </div>
        <div className="mb-4">
          <p>&copy; {new Date().getFullYear()} Abhini S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer

