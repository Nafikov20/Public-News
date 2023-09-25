'use client'
import React, {useState} from 'react';
import {CustomIcons} from "@/components/CustomIcons/CustomIcons";
import Image from "next/image";
import cc from "classcat";

export const Incidents = () => {
    const newsIncidentsData = [
        {
            title: 'Фура въехала в группу юных велосипедистов под Выборгом: двое детей погибли',
            time: '1.01.2023, 13:53',
            notification: 'Политика',
            img: require('../../../public/pic.png')
        },
        {
            title: 'Семилетняя девочка из Екатеринбурга умерла после купания в Черном море',
            time: '1.01.2023, 13:53',
            notification: 'Политика',
            img: require('../../../public/pic2.png')
        },
        {
            title: 'Теннис — спорт леди и джентльменов. Как разобраться в нем?',
            time: '1.01.2023, 13:53',
            notification: 'Политика',
            img: require('../../../public/pic3.png')
        },
        {
            title: 'Как скейтбординг стал популярным видом спорта и модной субкультурой?',
            time: '1.01.2023, 13:53',
            notification: 'Политика',
            img: require('../../../public/pic4.png')
        },
    ]
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleFocusInfoWrapper = (idx: number) => {
        setHoveredIndex(idx);
    };
    return (
        <div className='my-[28px] mx-[12px]'>
            <div className='flex items-center mx-[32px] cursor-pointer'>
                <h1 className='text-[28px] font-medium'>Происшествия</h1>
                <CustomIcons name='arrow' className='fill-none' width={24} height={24}/>
            </div>
            <ul className='flex mt-[24px] mb-[113px] gap-[16px]'>
                {newsIncidentsData.map((i, idx) => (
                    <li
                        key={idx}
                        className='max-w-[264px] rounded-[12px] bg-[#fff] relative'
                        onMouseEnter={() => handleFocusInfoWrapper(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className='flex flex-col'>
                            <Image height={164} width={264} className='rounded-[12px]' src={i.img} alt='photo' />
                            <div className='flex flex-col justify-between rounded-[0_0_12px_12px] py-[12px] px-[16px]'>
                                <div className='flex items-center gap-[8px]'>
                                    <span className='text-[#838383] text-[14px]'>{i.time}</span>
                                </div>
                                <article className='text-[14px] text-[#333] mt-[8px]'>{i.title}</article>
                                <div className='flex items-center gap-[8px]'>
                                    <div className='flex items-center gap-[2px]'>
                                        <CustomIcons name='love' width={15} height={14} />
                                        <span className='text-[14px]'>23</span>
                                    </div>
                                    <div className='flex items-center gap-[2px]'>
                                        <CustomIcons name='anger' width={15} height={14} />
                                        <span className='text-[14px]'>23</span>
                                    </div>
                                    <div className='flex items-center gap-[2px]'>
                                        <CustomIcons name='shit' width={15} height={14} />
                                        <span className='text-[14px]'>23</span>
                                    </div>
                                    <div className='flex items-center gap-[2px]'>
                                        <CustomIcons name='sms' width={15} height={14} />
                                        <span className='text-[14px] text-[#848484]'>7</span>
                                    </div>
                                    <div className='flex items-center gap-[2px]'>
                                        <CustomIcons name='save' width={15} height={14} />
                                        <span className='text-[14px] text-[#848484]'>14</span>
                                    </div>
                                </div>
                                <div className={cc([
                                    'absolute flex opacity-0 gap-[4px] bg-white rounded-[40px] border-[1px] hover:border-[#FF6B00] pl-0 pr-[12px] bottom-[155px] right-[15px]',
                                    { 'opacity-100': hoveredIndex === idx }
                                ])}>
                                    <div className='rounded-[50%] bg-[#000] p-[10px]'>
                                        <CustomIcons
                                            width={24}
                                            height={24}
                                            name='education'
                                            className='text-white'
                                        />
                                    </div>
                                    <button className='text-[14px]'>Буду читать</button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
