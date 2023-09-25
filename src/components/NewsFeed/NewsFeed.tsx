import React from 'react';
import {CustomIcons} from "@/components/CustomIcons/CustomIcons";
import './NewsFeed.css'
export const NewsFeed = () => {
    const newsData = [
        {
            icon: <CustomIcons name='newsLighting' width={24} height={24} />,
            title: 'Сотни россиян застряли в Египте из-за отмен рейсов.',
            time: '14:59',
            notification: 'Политика'
        },
        {
            icon: <CustomIcons name='newsLighting' width={24} height={24} />,
            title: 'На Украине заявили о невосполнимых потерях после российских ударов.',
            time: '14:59',
            notification: 'Политика'
        },
        {
            icon: <CustomIcons name='newsLighting' width={24} height={24} />,
            title: 'ЕС ввел санкции против силовиков из Крыма из-за дела в отношении журналиста.',
            time: '14:59',
            notification: 'Политика'
        },
        {
            icon: <CustomIcons name='newsLighting' width={24} height={24} />,
            title: 'Резников назвал профессионалом нового министра обороны Украины Умерова.',
            time: '14:59',
            notification: 'Политика'
        },
    ]
    return (
        <div className='flex justify-between mx-[12px] gap-[12px] my-[24px]'>
            <div className='bg-white rounded-[12px]'>
                <div className='p-[32px_32px_0_32px]'>
                    <h1 className='text-[28px] font-medium'>Лента</h1>
                    <ul className='my-[24px]'>
                        {newsData.map((n, idx) => (
                            <li key={idx}>
                                <div className='flex gap-[8px]'>
                                    {n.icon}
                                    <div className='flex flex-col gap-[4px]'>
                                        <article className='text-[16px] text-[#262626]'>{n.title}</article>
                                        <div className='flex items-center gap-[4px]'>
                                            <span className='text-[#838383] text-[14px]'>{n.time}</span>
                                            <span className='bg-[#FF6B00] text-[12px] text-white p-[4px_8px] rounded-[20px]'>{n.notification}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex w-full overflow-hidden'>
                    <div className='flex py-[8px] gap-[20px] rounded-[0_0_12px_12px] bg-[#262626] w-full'>
                        <div className='flex gap-[20px] animate-marquee'>
                            <div className='flex gap-[20px]'>
                                <CustomIcons name='fire' width={24} height={24} />
                                <p className='text-white whitespace-nowrap'>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                            </div>
                            <div className='flex gap-[20px]'>
                                <CustomIcons name='fire' width={24} height={24} />
                                <p className='text-white whitespace-nowrap'>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                            </div>
                            <div className='flex gap-[20px]'>
                                <CustomIcons name='fire' width={24} height={24} />
                                <p className='text-white whitespace-nowrap'>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                                <CustomIcons name='fire' width={24} height={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col  rounded-[12px] p-[12px] bg-white'>
                <div className='flex items-center gap-[4px]'>
                    <a>
                        <p className='text-[12px] whitespace-nowrap'>Ссылка на сайт</p>
                    </a>
                    <span className='text-[#848484] text-[10px]'>РЕКЛАМА</span>
                </div>
                <div className='flex grow items-center justify-center rounded-[12px] bg-[#1313136B] mt-[9px]'>
                    <h1 className='text-[28px] font-medium'>
                        Реклама
                    </h1>
                </div>
                <div className='mt-[12px]'>
                    <p>
                        Текст длинного рекламного объявления
                    </p>
                </div>
            </div>
        </div>
    );
};
