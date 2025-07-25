import React from "react";
import Icon from "../assets/consultation_icon.png";

const Consultation = () => {
  return (
    <div className="hidden md:block mx-[20px] md:max-w-[1160px] md:mx-auto">
      <div className="flex justify-between items-center bg-[#F4F9FB] mb-[20px] rounded-[16px]">
        <div className="mx-[50px] py-[60px] text-[#292929]">
          <h2 className="text-[32px] uppercase font-black">карьерная консультация</h2>
          <p className="w-[372px]">Запишитесь, чтобы получить бесплатную карьерную консультацию.</p>
          <button className="bg-[#007DB6] text-[#fff] mt-[20px] text-[15px] py-[13px] px-[30px] mr-[20px] rounded-[4px] font-light cursor-pointer">Записаться</button>
        </div>
        <div>
          <img src={Icon} alt="icon" className="w-[263px] relative right-[180px] bottom-[30px]" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-[20px]">
        <div className="bg-[#FF879F] flex flex-col justify-between py-[20px] px-[35px] w-[526px] h-[184px] rounded-[16px]">
          <div>
            <p className="inline py-[8px] px-[15px] bg-[#fff] rounded-[8px] text-[#FF879F]">
              1
            </p>
          </div>
          <div className="text-[#fff]">
            <h3 className="text-[24px] font-bold uppercase">Запишитесь</h3>
            <p className="text-[15px]">на консультацию</p>
          </div>
        </div>
        <div className="bg-[#63AED2] flex flex-col justify-between py-[20px] px-[35px] w-[526px] h-[184px] rounded-[16px]">
          <div>
            <p className="inline py-[8px] px-[15px] bg-[#fff] rounded-[8px] text-[#63AED2]">
              2
            </p>
          </div>
          <div className="text-[#fff]">
            <h3 className="text-[24px] font-bold uppercase">пройдите опрос </h3>
            <p className="text-[15px]">в удобное время</p>
          </div>
        </div>
        <div className="bg-[#F0D075] flex flex-col justify-between py-[20px] px-[35px] w-[526px] h-[184px] rounded-[16px]">
          <div>
            <p className="inline py-[8px] px-[15px] bg-[#fff] rounded-[8px] text-[#F0D075]">
              3
            </p>
          </div>
          <div className="text-[#fff]">
            <h3 className="text-[24px] font-bold uppercase">результаты</h3>
            <p className="text-[15px]">получите на ваш e-mail</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
