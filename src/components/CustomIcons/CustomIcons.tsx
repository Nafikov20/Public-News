import React, { forwardRef, SVGProps } from 'react';

import cc from 'classcat';
import {ICONS} from '@/assets/icons'



interface Props extends SVGProps<SVGSVGElement> {
    name: IconName;
    size?: number;
}
export const CustomIcons = forwardRef<SVGSVGElement, Props>(
    ({ name, className, size, width = 16, height = 16, ...props }, parentRef) => {
        const { data, viewBox } = ICONS[name];

        return (
            <svg
                viewBox={viewBox || '0 0 512 512'}
                {...props}
                ref={parentRef}
                className={cc(['fill-current', className])}
                height={size || height}
                width={size || width}
            >
                {data}
            </svg>
        );
    }
);

CustomIcons.displayName = 'CustomIcons';

export type IconName =
    | 'search'
    | 'user'
    | 'newDate'
    | 'bitcoin'
    | 'usd'
    | 'eur'
    | 'lighting'
    | 'attention'
    | 'car'
    | 'business'
    | 'medicine'
    | 'circle'
    | 'house'
    | 'education'
    | 'politic'
    | 'tourism'
    | 'star'
    | 'sport'
    | 'style'
    | 'technologi'
    | 'economy'
    | 'newsLighting'
    | 'fire'
    | 'arrow'
    | 'love'
    | 'anger'
    | 'shit'
    | 'sms'
    | 'save'
    | 'tg'

