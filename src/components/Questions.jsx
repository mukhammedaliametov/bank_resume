import React from "react";
import PlusCircle from "../assets/plus-circle.png";
import MinusCircle from "../assets/minus-circle.png";

const Questions = () => {
  return (
    <div className="hidden mx-[20px] md:max-w-[1160px] md:mx-auto my-[80px] md:flex justify-between gap-[60px] text-[#292929]">
      <div className="w-[1160px]">
        <h2 className="text-[32px] font-black uppercase">Остались вопросы?</h2>
        <p className="text-[15px] my-[15px]">
          Ответы на часто задаваемые вопросы здесь. Специалисты службы поддержки
          банка резюме могут оказывать вам помощь в заполнении резюме.Если у вас
          возникли сложности или вопросы, вы можете связаться с нами.
        </p>
        <button className="bg-[#007DB6] text-[#fff] text-[15px] py-[13px] px-[30px] rounded-[4px] font-light cursor-pointer">
          Обратная связь
        </button>
      </div>
      <div className="text-[#292929]">
        <div className="bg-[#F4F9FB] p-[25px] rounded-[16px]">
          <div className="flex justify-between items-center mb-[15px]">
            <h4 className="font-semibold text-[18px]">Как пользоваться Банком резюме?</h4>
            <img src={MinusCircle} alt="minus_circle" className="cursor-pointer" />
          </div>
          <p className="text-[15px]">
            Ответы на часто задаваемые вопросы здесь. Специалисты службы
            поддержки банка резюме могут оказывать вам помощь в заполнении
            резюме. Если у вас возникли сложности или вопросы, вы можете
            связаться с нами.
          </p>
        </div>
        <div className="flex justify-between items-center border-2 border-[#AADCF3] p-[22px] rounded-[16px] my-[10px]">
          <h4 className="font-semibold text-[18px]">Как пользоваться Банком резюме?</h4>
          <img src={PlusCircle} alt="plus_circle" className="cursor-pointer" />
        </div>
        <div className="flex justify-between items-center border-2 border-[#AADCF3] p-[22px] rounded-[16px] my-[10px]">
          <h4 className="font-semibold text-[18px]">Как пользоваться Банком резюме?</h4>
          <img src={PlusCircle} alt="plus_circle" className="cursor-pointer" />
        </div>
        <div className="flex justify-between items-center border-2 border-[#AADCF3] p-[22px] rounded-[16px] my-[10px]">
          <h4 className="font-semibold text-[18px]">Как пользоваться Банком резюме?</h4>
          <img src={PlusCircle} alt="plus_circle" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Questions;
