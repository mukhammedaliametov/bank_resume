import React from "react";
import Icon1 from "../assets/hero_icon1.png";
import Icon2 from "../assets/hero_icon2.png";
import Icon3 from "../assets/hero_icon3.png";
import People1 from "../assets/people1.png";
import People2 from "../assets/people2.png";

const HeroCards = () => {
  return (
    <div className="mx-[20px] md:max-w-[1160px] md:mx-auto my-[50px] md:my-[70px]">
      <div className="overflow-scroll overflow-x-auto md:overflow-hidden gap-[10px] md:gap-[20px] flex items-center justify-between">
        <div className="bg-[#F4F9FB] text-center min-w-[260px] h-[317px] md:w-[360px] md:h-[400px] rounded-[16px] shrink-0">
          <img
            src={Icon1}
            alt="hero_icon_1"
            className="mx-auto mt-2 md:mt-[45px]"
          />
          <h3 className="text-[45px] font-bold text-[#292929]">67</h3>
          <p className="font-semibold text-[16px] w-[150px] mx-auto text-[#515151]">
            предложений о работе
          </p>
        </div>
        <div className="bg-[#F4F9FB] text-center min-w-[260px] h-[317px] md:w-[360px] md:h-[400px] rounded-[16px] shrink-0">
          <img
            src={Icon2}
            alt="hero_icon_2"
            className="mx-auto mt-2 md:mt-[45px]"
          />
          <h3 className="text-[45px] font-bold text-[#292929]">180</h3>
          <p className="font-semibold text-[16px] w-[150px] mx-auto text-[#515151]">
            размещенных резюме
          </p>
        </div>
        <div className="bg-[#F4F9FB] text-center min-w-[260px] h-[317px] md:w-[360px] md:h-[400px] rounded-[16px] shrink-0">
          <img
            src={Icon3}
            alt="hero_icon_3"
            className="mx-auto mt-2 md:mt-[45px]"
          />
          <h3 className="text-[45px] font-bold text-[#292929]">113</h3>
          <p className="font-semibold text-[16px] w-[150px] mx-auto text-[#515151]">
            приглашений на собеседование 
          </p>
        </div>
      </div>
      <div className="flex justify-between ] flex-col md:flex-row relative items-center gap-[30px] mt-[50px]">
        <div className="flex items-center gap-[30px] w-[100%] mx-[20px] md:w-[560px] h-[250px] md:h-[280px] bg-[#F4F9FB] px-[25px] md:px-[40px] py-0 md:py-[20px] rounded-[16px]">
          <div className="w-[308px]">
            <h4 className="text-[18px] font-semibold pt-[20px] md:pt-[0px]">
              Для работодателей
            </h4>
            <p className="text-[15px] text-[#292929] my-3">
              Доступ к банку резюме предоставляется администрациям школ города
              Москвы. Если вы являетесь директором московской школы, вы можете
              войти в банк резюме, используя единую учетную запись ЕКИС.
            </p>
            <button className="hidden md:block bg-[#007DB6] text-[#fff] text-[15px] py-[13px] px-[30px] rounded-[4px] font-light cursor-pointer">
              Вход
            </button>
          </div>
          <div>
            <img
              src={People1}
              alt="people_1"
              className="hidden md:block w-[154px] ml-2 absolute top-[-20px]"
            />
          </div>
        </div>
        <button className="block md:hidden w-[100%] mx-auto mt-[-20px] bg-[#007DB6] text-[#fff] text-[15px] py-[13px] px-[30px] mr-[20px] rounded-[4px] font-light cursor-pointer">
          Вход
        </button>
        <div className="flex items-center gap-[30px] w-[100%] mx-[20px] md:w-[560px] h-[170px] md:h-[280px] bg-[#F4F9FB] px-[25px] md:px-[40px] py-0 md:py-[20px] rounded-[16px] ">
          <div className="w-[308px]">
            <h4 className="text-[18px] font-semibold">Для соискателей</h4>
            <p className="text-[15px] text-[#292929] my-3">
              Ваш помощник в поиске работы в московских школах. Бесплатная
              публикация резюме
            </p>
            <div className="flex items-center gap-[10px]">
              <button className="hidden md:block border-1 text-[#007DB6] text-[15px] py-[12px] px-[30px] rounded-[4px] font-light cursor-pointer">
                Зарегистрироваться
              </button>
              <button className="hidden md:block bg-[#007DB6] text-[#fff] text-[15px] py-[13px] px-[30px] mr-[20px] rounded-[4px] font-light cursor-pointer">
                Вход
              </button>
            </div>
          </div>
          <div>
            <img
              src={People2}
              alt="people_2"
              className="hidden md:block w-[154px] ml-2 absolute top-[-20px]"
            />
          </div>
        </div>
        <button className="block md:hidden w-[100%] mx-auto mt-[-20px] bg-[#007DB6] text-[#fff] text-[15px] py-[13px] px-[30px] mr-[20px] rounded-[4px] font-light cursor-pointer">
          Вход
        </button>
        <button className="block md:hidden w-[100%] mx-auto mt-[-20px] border-1 text-[#007DB6] text-[15px] py-[12px] px-[30px] rounded-[4px] font-light cursor-pointer">
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default HeroCards;
