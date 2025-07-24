import React from "react";

const Course = () => {
  return (
    <div className="mx-[20px] md:max-w-[1160px] md:mx-auto ">
      <div className="bg-[#F4F9FB] p-[30px] flex justify-between items-center rounded-[16px]">
        <div className="flex flex-col justify-between gap-[20px]">
          <div className="bg-[#FF879F] flex flex-col justify-between py-[20px] px-[35px] w-[526px] h-[184px] rounded-[16px]">
            <div>
            <p className="inline py-[8px] px-[15px] bg-[#fff] rounded-[8px] text-[#FF879F]">1</p>
            </div>
            <div className="text-[#fff]">
              <h3 className="text-[24px] font-bold uppercase">Запишитесь</h3>
              <p className="text-[15px]">на консультацию</p>
            </div>
          </div>
          <div className="bg-[#65B2D6] flex flex-col justify-between py-[20px] px-[50px] w-[526px] h-[184px] rounded-[16px]">
            <div>
            <p className="inline py-[8px] px-[15px] bg-[#fff] rounded-[8px] text-[#65B2D6]">2</p>
            </div>
            <div className="text-[#fff]">
              <h3 className="text-[24px] font-bold uppercase">пройдите курс</h3>
              <p className="text-[15px]">в комфортном режиме</p>
            </div>
          </div>
        </div>
        <div className="text-[#292929] mr-[50px]">
          <h2 className="text-[32px] uppercase font-black">welcome-курс</h2>
          <p className="text-[15px] font-semibold w-[300px] my-[10px]">Запишитесь, чтобы пройти бесплатный welcome-курс.</p>
          <button className="hidden md:inline bg-[#007DB6] text-[#fff] mt-[20px] text-[15px] py-[13px] px-[30px] mr-[20px] rounded-[4px] font-light cursor-pointer">
            Записаться
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
