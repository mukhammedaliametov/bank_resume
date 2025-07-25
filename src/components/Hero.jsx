import React from "react";
import MainIllustr from "../assets/main_illustr.png";
import HeroCards from "./HeroCards";

const Hero = () => {
  return (
    <div className="h-[90%]">
      <div className="bg-[#F4F9FB] h-[80%]">
        <div className="w-[100%] md:max-w-[1160px] md:mx-auto flex flex-col-reverse md:flex-row md:justify-between items-center gap-[30px]">
          <div className="text-center md:text-left my-[40px] md:my-0">
            <h1 className="text-[32px] md:text-[50px] font-bold uppercase text-[#292929]">команды мечты <br /> создаются здесь</h1>
            <p className="w-[300px] md:w-[350px] text-[17px] font-light mt-1 mb-[20px]">помощник в поиске работы и сотрудников в сфере образования</p>
            <button className="w-full md:w-auto bg-[#007DB6] text-[#fff] text-[15px] py-[13px] px-[30px] rounded-[4px] font-light cursor-pointer">Начать</button>
          </div>
          <div className="relative bottom-[-25px] pt-[40px] md:pt-[0px]">
            <img src={MainIllustr} alt="main_illustr" className="w-[250px] md:w-[530px]" />
          </div>
        </div>
      </div>
      <HeroCards />
    </div>
  );
};

export default Hero;
