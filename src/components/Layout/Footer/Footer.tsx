import React from 'react';
import {CustomIcons} from "@/components/CustomIcons/CustomIcons";

export const Footer = () => {
    return (
        <footer className='flex justify-between items-center text-white h-[152px] py-[40px] w-full px-[36px] bg-[#333]'>
            <div>
                <h1 className='text-[44px]'>ЛОГО</h1>
                <p className='text-[12px]'>© НАЗВАНИЕ 2023. Все права защищены</p>
            </div>
            <div className='flex gap-[175px]'>
                <div className='flex gap-[80px]'>
                    <ul className='flex flex-col gap-[12px]'>
                        <li className='text-[14px] cursor-pointer '><a>Контакты</a></li>
                        <li className='text-[14px] cursor-pointer '><a>Рдакция</a></li>
                    </ul>
                    <ul className='flex flex-col gap-[12px]'>
                        <li className='text-[14px] cursor-pointer '><a>Политика конфиденциальности</a></li>
                        <li className='text-[14px] cursor-pointer '><a>Условия использования</a></li>
                        <li className='text-[14px] cursor-pointer '><a>Условия использования</a></li>
                    </ul>
                </div>
                <div className='flex justify-between flex-col'>
                    <p>По любым вопросам <br/>пишите на <a className='text-[#FF6B00] underline cursor-pointer'>privet@yandex.com</a></p>
                    <div className='flex gap-[8px] cursor-pointer '>
                        <CustomIcons name='tg' width={24} height={24} />
                        <p>Подписаться</p>
                    </div>
                </div>
            </div>
            <div>
                <button className='h-[36px] inline-flex items-center justify-center bg-[#FF6B00] cursor-pointer text-[14px] p-[12px_16px] rounded-[8px] '>
                    Предлжить новость
                </button>
            </div>
        </footer>
    );
};
