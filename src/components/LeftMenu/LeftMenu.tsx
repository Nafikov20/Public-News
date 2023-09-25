'use client'
import React, {useState} from 'react';
import {CustomIcons} from "@/components/CustomIcons/CustomIcons";
import cc from "classcat";
import './LeftMenu.css';


const leftMenuData = [
    {
        icon: <CustomIcons name='lighting' width={32} height={32}/>,
        name: 'Лента'
    },
    {
        icon: <CustomIcons name='attention' width={32} height={32}  />,
        name: 'Происшествия'
    },
    {
        icon: <CustomIcons name='car' width={32} height={32}  />,
        name: 'Авто'
    },
    {
        icon: <CustomIcons name='business' width={32} height={32}  />,
        name: 'Бизнес'
    },
    {
        icon: <CustomIcons name='medicine' width={32} height={32}  />,
        name: 'Здоровье'
    },
    {
        icon: <CustomIcons name='circle' width={32} height={32}  />,
        name: 'Крипто'
    },
    {
        icon: <CustomIcons name='house' width={32} height={32}  />,
        name: 'Недвижимость'
    },
    {
        icon: <CustomIcons name='education' width={32} height={32}  />,
        name: 'Образование'
    },
    {
        icon: <CustomIcons name='politic' width={32} height={32}  />,
        name: 'Политика'
    },
    {
        icon: <CustomIcons name='tourism' width={32} height={32}  />,
        name: 'Туризм'
    },
    {
        icon: <CustomIcons name='star' width={32} height={32}  />,
        name: 'Шоу-бизнес'
    },
    {
        icon: <CustomIcons name='sport' width={32} height={32}  />,
        name: 'Спорт'
    },
    {
        icon: <CustomIcons name='style' width={32} height={32}  />,
        name: 'Стиль'
    },
    {
        icon: <CustomIcons name='technologi' width={32} height={32}  />,
        name: 'Наука и технологии'
    },
    {
        icon: <CustomIcons name='economy' width={32} height={32}  />,
        name: 'Экономика'
    },
]
export const LeftMenu = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleToggleStyle = (idx: any) => {
        setActiveItem(idx);
    };
    return (
        <nav className='max-w-[264px] my-[24px]'>
            <ul>
                {leftMenuData.map((m, idx) => (
                    <li
                        onClick={() => handleToggleStyle(idx)}
                        className={cc(['cursor-pointer flex items-center gap-[12px] p-[12px_20px] rounded-[12px] left-menu__svg',  {'bg-[#262626] text-white active-svg': activeItem === idx }])}
                        key={idx}
                    >
                        {m.icon}
                        <h2 className='text-[18px] whitespace-nowrap'>{m.name}</h2>
                    </li>
                ))}
            </ul>
        </nav>
    );
};