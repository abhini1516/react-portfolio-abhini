import React from "react";
import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <div id="certifications" className="pb-8 lg:pb-16 px-4 lg:px-0">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-3xl lg:my-20 lg:text-4xl"
      >
        Certifications
      </motion.h2>
      <div>
        {CERTIFICATIONS.map((certification, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 mb-4 lg:mb-0"
            >
              <p className="text-sm text-neutral-400">{certification.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {certification.role} - <span className="text-sm text-purple-200">{certification.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{certification.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {certification.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {certification.image && (
                <img
                  src={certification.image}
                  alt={`${certification.role} Certification`}
                  className="w-full max-w-xs lg:max-w-sm mb-4"
                />
              )}

              {certification.link && (
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
