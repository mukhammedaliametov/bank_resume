import React from 'react';
import Footer1 from '../assets/footer1.png';
import Footer2 from '../assets/footer2.png';

const Footer = () => {
    return (
        <div className=' bg-[#F4F9FB] mt-[140px]'>
        <div className=' text-[#292929] max-w-[1160px] mx-auto py-[30px]'>
            <div className='flex justify-between items-center my-[20px]'>
                <a href="#" className='text-[#007DB6] text-[15px]'>Служба поддержки</a>
                <div className='flex flex-col gap-[10px]'>
                    <a href="#" className='text-[15px]'>Пользовательское соглашение</a>
                    <a href="#" className='text-[15px]'>Правовая информация</a>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <a href="#" className='text-[15px]'>Контакты</a>
                    <a href="#" className='text-[15px]'>Помощь (FAQ)</a>
                </div>
                <div className='flex gap-2'>
                    <img src={Footer1} alt="footer1" className='bg-[#fff] px-[18px] py-[15px] rounded-[8px]' />
                    <img src={Footer2} alt="footer2" className='bg-[#fff] px-[18px] py-[15px] rounded-[8px]' />
                </div>
            </div>
            <div className='text-center'>
                <p className='text-[#7A7A7A] text-[15px]'>© Департамент образования и науки г. Москвы, 2023</p>
                <p className='text-[#7A7A7A] text-[12px]'>При полном или частичном использовании материалов с официальных сайтов Правительства Москвы ссылка на источник обязательна.</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;