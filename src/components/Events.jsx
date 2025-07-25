import React from "react";
import Image1 from "../assets/Rectangle_1.png";
import Image2 from "../assets/Rectangle_2.png";
import Image3 from "../assets/Rectangle_3.png";
import Image4 from "../assets/Rectangle_4.png";
import Image5 from "../assets/Rectangle_5.png";

const Events = () => {
  return (
    <div className="mx-[20px] md:max-w-[1160px] md:mx-auto">
      <h2 className="text-[#292929] w-full md:w-auto text-[32px] font-black my-[30px] uppercase text-center">
        Анонс мероприятий
      </h2>
      <div className="flex overflow-scroll md:overflow-hidden md:grid items-center grid-cols-3 gap-[20px]">
        <div className="col-span-2 bg-[#F4F9FB] rounded-[16px] min-w-[298px]">
          <img
            src={Image1}
            alt="image_1"
            className="w-full h-[188px] md:h-auto"
          />
          <div className="px-[20px] py-[25px] w-[480px]">
            <p className="text-[15px] text-[#A0A0A0]">28.06.2023</p>
            <h3 className="text-[#292929] text-[15px] md:text-[18px] font-semibold my-[10px] w-[290px] md:w-[330px]">
              Современная методология разработки оказалась ошибочной
            </h3>
            <p className="hidden md:block text-[15px] text-[#3D3D3D]">
              Частотность поисковых запросов оказалась ошибочной
            </p>
            <p className="md:hidden text-[15px] text-[#3D3D3D]">
              Частотность поисковых запро...
            </p>
          </div>
        </div>
        <div className="bg-[#F4F9FB] rounded-[16px] min-w-[298px]">
          <img
            src={Image2}
            alt="image_2"
            className="w-full h-[188px] md:h-auto"
          />
          <div className="px-[20px] py-[25px] ">
            <p className="text-[15px] text-[#A0A0A0]">28.06.2023</p>
            <h3 className="text-[#292929] text-[15px] md:text-[18px] font-semibold my-[10px] w-[290px] md:w-[330px]">
              Современная методология разработки оказалась ошибочной
            </h3>
            <p className="hidden md:block text-[15px] text-[#3D3D3D]">
              Частотность поисковых запросов оказал...
            </p>
            <p className="md:hidden text-[15px] text-[#3D3D3D]">
              Частотность поисковых запро...
            </p>
          </div>
        </div>
        <div className="bg-[#F4F9FB] rounded-[16px] min-w-[298px]">
          <img src={Image3} className="w-full h-[188px] md:h-auto" />
          <div className="px-[20px] py-[25px]">
            <p className="text-[15px] text-[#A0A0A0]">28.06.2023</p>
            <h3 className="text-[#292929] text-[15px] md:text-[18px] font-semibold my-[10px] w-[290px] md:w-[330px]">
              Современная методология разработки оказалась ошибочной
            </h3>
            <p className="hidden md:block text-[15px] text-[#3D3D3D]">
              Частотность поисковых запросов оказал...
            </p>
            <p className="md:hidden text-[15px] text-[#3D3D3D]">
              Частотность поисковых запро...
            </p>
          </div>
        </div>
        <div className="hidden md:block bg-[#F4F9FB] rounded-[16px]">
          <img src={Image4} alt="image_4" className="w-full" />
          <div className="px-[20px] py-[25px]">
            <p className="text-[15px] text-[#A0A0A0]">28.06.2023</p>
            <h3 className="text-[#292929] text-[18px] font-semibold my-[10px]">
              Современная методология разработки оказалась ошибочной
            </h3>
            <p className="text-[15px] text-[#3D3D3D]">
              Частотность поисковых запросов оказал...
            </p>
          </div>
        </div>
        <div className="hidden md:block bg-[#F4F9FB] rounded-[16px]">
          <img src={Image5} alt="image_5" className="w-full" />
          <div className="px-[20px] py-[25px]">
            <p className="text-[15px] text-[#A0A0A0]">28.06.2023</p>
            <h3 className="text-[#292929] text-[18px] font-semibold my-[10px]">
              Современная методология разработки оказалась ошибочной
            </h3>
            <p className="text-[15px] text-[#3D3D3D]">
              Частотность поисковых запросов оказал...
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block text-center my-[30px] py-[10px]">
        <a href="#" className="text-[#1F8DBE] underline">
          Смотреть еще
        </a>
      </div>
    </div>
  );
};

export default Events;
