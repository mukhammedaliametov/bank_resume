import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import Menu from "../assets/menu.png";
import Close from "../assets/close.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="bg-[#F4F9FB] relative z-999">
      <div className="mx-[20px] md:max-w-[1160px] md:mx-auto flex justify-between items-center py-[30px] ">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        <div>
          <button className="hidden md:inline bg-[#007DB6] text-[#fff] text-[15px] py-[13px] px-[30px] mr-[20px] rounded-[4px] font-light cursor-pointer">
            Вход
          </button>
          <button className="hidden md:inline border-1 text-[#007DB6] text-[15px] py-[13px] px-[30px] rounded-[4px] font-light cursor-pointer">
            Регистрация
          </button>
        </div>
        <div onClick={handleClick} className="block md:hidden cursor-pointer">
          <img src={nav ? Close : Menu} alt="menu" />
        </div>
        <div className={nav ? "block md:hidden absolute bg-[#00000073] w-full top-[82px] left-0 h-[520px]" : "block md:hidden absolute bg-[#00000073] w-full top-[-582px] left-0 h-[550px]"}>
            <div className="flex flex-col gap-[20px] bg-[#F4F9FB] ml-[90px] py-[30px] px-[30px] rounded-bl-xl">
            <button className="bg-[#007DB6] text-[#fff] text-[15px] py-[13px] px-[30px] rounded-[4px] font-light cursor-pointer">Вход для соискателя</button>
            <button className="bg-[#007DB6] text-[#fff] text-[15px] py-[13px] px-[30px] rounded-[4px] font-light cursor-pointer">Вход для директора</button>
            <button className="border-1 text-[#007DB6] text-[15px] py-[11px] px-[30px] rounded-[4px] font-light cursor-pointer">Регистрация</button>
            <a href="#" className="font-light mt-3">Пользовательское соглашение</a>
            <a href="#" className="font-light">Правовая информация</a>
            <a href="#" className="font-light">Контакты</a>
            <a href="#" className="font-light">Помощь (FAQ)</a>
            <a href="#" className="font-light underline text-[#1F8DBE]">Служба поддержки</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
