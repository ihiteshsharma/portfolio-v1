import React, { FC } from 'react'
import icons from '../assets/icons.json';

const getIcon = (key: string) : string => {
    let iconPaths: Record<string,string> = icons;
    return iconPaths[key]
} 

const Icon: FC<any> = ({width=24, height=24, color="black", iconName="circle", className=""}) => {
    return(
        <span className={`${className}`}>
            <svg className='fill-richblack dark:fill-paperwhite' width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d={getIcon(iconName)} />
            </svg>
        </span>
    )
}

export default Icon;