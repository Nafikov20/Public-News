'use client'
import React, {useState} from 'react';
import {CustomIcons} from "@/components/CustomIcons/CustomIcons";
import cc from "classcat";
interface NewsData {
    title: string;
    time: string;
    notification: string;
}
export const Read = () => {
    const newsReadData: NewsData[] = [
        {
            title: 'Синоптик спрогнозировал срок наступления бабьего лета',
            time: '1.01.2023, 13:53',
            notification: 'Политика'
        },
        {
            title: 'Дмитрий Медведев проголосовал онлайн на выборах мэра Москвы',
            time: '1.01.2023, 13:53',
            notification: 'Политика'
        },
        {
            title: 'Раскрыты последствия уничтожения беспилотника в небе над Подмосковьем',
            time: '1.01.2023, 13:53',
            notification: 'Политика'
        },
        {
            title: 'Невролог назвала основные способы лечения мигрени',
            time: '1.01.2023, 13:53',
            notification: 'Политика'
        },
    ]
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleFocusInfoWrapper = (idx: number) => {
        setHoveredIndex(idx);
    };
    return (
        <div className='bg-white rounded-[12px] mx-[12px] p-[32px] cursor-pointer'>
            <div className='flex items-center'>
                <h1 className='text-[28px] font-medium'>Читайте также</h1>
                <CustomIcons name='arrow' className='fill-none' width={24} height={24}/>
            </div>
            <ul className='flex mt-[24px] gap-[16px]'>
                {newsReadData.map((r, idx) => (
                    <li
                        key={idx}
                        className='flex flex-col justify-between max-w-[245px] py-[12px] px-[16px] rounded-[12px] bg-[#F2F2F2] relative'
                        onMouseEnter={() => handleFocusInfoWrapper(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className='flex items-center gap-[8px]'>
                            <span className='bg-[#FF6B00] text-[12px] text-white p-[4px_8px] rounded-[20px]'>{r.notification}</span>
                            <span className='text-[14px]'>{r.time}</span>
                        </div>
                        <article className='text-[16px] text-[#333] mt-[8px]'>{r.title}</article>
                        <div
                            className={cc(['flex items-center mt-[25px] gap-[8px]',  { 'opacity-0': hoveredIndex === idx }])}
                        >
                            <div className='flex items-center gap-[2px]'>
                                <CustomIcons name='love' width={15} height={14} />
                                <span className='text-[14px]'>23</span>
                            </div>
                            <div className='flex items-center gap-[2px] '>
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
                                'absolute flex opacity-0 gap-[4px] bg-white rounded-[40px] border-[1px] hover:border-[#FF6B00] pl-0 pr-[12px] bottom-[15px] right-[15px]',
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

