'use client'
import React from 'react';
import {CustomIcons} from '@/components/CustomIcons/CustomIcons'

export const Header = () => {

    const dataWell = [
        {
            icon: <CustomIcons name='usd' width={24} height={24} />,
            sum: 96.34
        },
        {
            icon: <CustomIcons name='eur' width={24} height={24} />,
            sum: 104.61
        },
        {
            icon: <CustomIcons name='bitcoin' width={24} height={24} />,
            sum: 25.725
        },
    ]

    const date = new Date;
    const options = { weekday: 'short' };
    // @ts-ignore
    const dayOfWeek = date.toLocaleString('ru-ru', options);

    return (
        <header className='flex gap-[100px] items-center h-[76px] w-full px-[36px] py-[20px] bg-[#fff] rounded-[0_0_16px_16px]'>
            <h1 className='text-normal text-[28px] font-medium'>ЛОГО</h1>

            <div className='flex items-center justify-between w-full'>
                <div className='flex gap-[20px]'>
                    <div className='bg-[#F2F2F2] rounded-[40px] flex items-center p-[12px] gap-[4px]'>
                        <CustomIcons name='newDate' width={24} height={24} />
                        <span>{`${dayOfWeek.toUpperCase()}, ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</span>
                    </div>
                    {dataWell.map((w, idx) => (
                        <div key={idx} className='bg-[#F2F2F2] rounded-[40px] flex items-center p-[12px] gap-[4px]'>
                            {w.icon}
                            <span className='text-[14px] font-normal'>{w.sum}</span>
                        </div>
                    ))}
                </div>
                <div className='flex gap-[12px]'>
                    <div className='bg-[#262626] rounded-[50%] cursor-pointer'>
                        <CustomIcons width={36} height={36}  name='search' />
                    </div>
                    <div className='bg-[#262626] h-[36px] w-[36px] p-[10px] rounded-[50%] cursor-pointer'>
                        <CustomIcons width={16} height={16}  name='user' />
                    </div>
                </div>
            </div>
        </header>
    );
};
