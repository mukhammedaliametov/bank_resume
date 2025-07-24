import React from "react";
import Header from "./components/Header";
import Hero from './components/Hero';
import Course from "./components/Course";
import Diagnosed from "./components/Diagnosed";
import Events from "./components/Events";
import Consultation from "./components/Consultation";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

const App = () => {
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
