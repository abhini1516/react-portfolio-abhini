import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="pb-8 px-4 lg:px-0">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl lg:text-5xl"
      >
        Projects
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm p-4 border rounded-lg shadow-md"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg mb-4"
              />
            ) : (
              <div className="bg-gray-200 w-full h-64 flex items-center justify-center rounded-lg mb-4">
                <p className="text-gray-500">No image available</p>
              </div>
            )}
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:underline"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

