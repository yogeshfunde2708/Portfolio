import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Landing from "../components/landing/Landing";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Landing darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Work darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
};

export default Home;
