import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from './components/Hero';
import Course from "./components/Course";
import Diagnosed from "./components/Diagnosed";
import Events from "./components/Events";
import Consultation from "./components/Consultation";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
    <Header />
    <main>
      <Hero />
      <Course />
      <Diagnosed />
      <Events />
      <Consultation />
      <Questions />
    </main>
    <Footer />
    </>
  );
};

export default App;
