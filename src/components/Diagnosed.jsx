import React from "react";
import Icon1 from "../assets/d_icon1.png";
import Icon2 from "../assets/d_icon2.png";
import Icon3 from "../assets/d_icon3.png";
import Icon4 from "../assets/d_icon4.png";

const Diagnosed = () => {
  return (
    <div className="mx-[25px] md:max-w-[1160px] md:mx-auto my-[60px]">
      <div className="flex justify-between">
        <div className="flex flex-col md:flex-row w-[100%] md:w-auto">
          <h2 className="text-[#292929] text-[32px] font-black uppercase text-center">
            пройдите <br /> диагностику
          </h2>
          <div className="w-[100%] md:w-[332px] ml-0 md:ml-[120px]">
            <p className="text-[15px] text-center md:text-left mt-[10px] md:mt-0">
              Вы можете пройти профессиональную диагностику на нашем сайте и
              получить результаты сразу после ее прохождения.{" "}
            </p>
            <button className="hidden md:block bg-[#007DB6] text-[#fff] mt-[20px] text-[15px] py-[13px] px-[30px] mr-[20px] rounded-[4px] font-light cursor-pointer">
              Пройти диагностику
            </button>
          </div>
        </div>
        <div className="w-[112px] hidden md:block">
          <p className="text-[15px]">В любое время и бесплатно</p>
        </div>
      </div>
      <div className="flex justify-between gap-[20px] md:gap-[0px] items-end my-[50px] overflow-scroll md:overflow-hidden">
        <div className="w-[260px] min-w-[260px] h-[300px] md:h-[352px] bg-[#F4F9FB] text-[#292929] flex justify-center flex-col text-center py-[30px] rounded-[16px]">
          <img src={Icon1} alt="diagnosed_icon_1" className="w-[96px] mx-auto mb-[30px]" />
          <h3 className="uppercase text-[22px] font-black">в любое <br /> время</h3>
        </div>
        <div className="w-[260px] min-w-[260px] h-[300px] md:h-[231px] bg-[#F4F9FB] text-[#292929] flex justify-center flex-col text-center rounded-[16px]">
          <img src={Icon2} alt="diagnosed_icon_1" className="w-[65px] mx-auto mb-[30px]" />
          <h3 className="uppercase text-[22px] font-black md:mb-[120px]">прямо на <br /> сайте</h3>
        </div>
        <div className="w-[260px] min-w-[260px] h-[300px] md:h-[190px] bg-[#F4F9FB] text-[#292929] flex justify-center flex-col text-center rounded-[16px]">
          <img src={Icon3} alt="diagnosed_icon_1" className="w-[55px] mx-auto mb-[30px]" />
          <h3 className="uppercase text-[22px] font-black md:mb-[120px]">бесплатно</h3>
        </div>
        <div className="w-[260px] min-w-[260px] h-[300px] md:h-[352px] bg-[#F4F9FB] text-[#292929] flex justify-center flex-col text-center py-[30px] rounded-[16px]">
          <img src={Icon4} alt="diagnosed_icon_1" className="w-[106px] mx-auto mb-[30px]" />
          <h3 className="uppercase text-[22px] font-black">результаты – <br /> сразу же</h3>
        </div>
      </div>
    </div>
  );
};

export default Diagnosed;
