import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-slate-950"></div>
      <div className="fixed bottom-0 left-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(162,194,226,.15),rgba(255,255,255,0))] -z-10"></div>
      <div className="fixed bottom-0 right-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(162,194,226,.15),rgba(255,255,255,0))] -z-10"></div>
      <div className="relative z-10 flex-grow">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Certifications />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default App;
