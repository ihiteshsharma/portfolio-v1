import React, { FC } from 'react'
import icons from '../assets/icons.json';

const getIcon = (key: string) : string => {
    let iconPaths: Record<string,string> = icons;
    return iconPaths[key]
} 

const Icon: FC<any> = ({size=24, color="#000", iconName="circle", className='', tag:Tag='button'}) => {
    return(
        <Tag className={`${className} w-fit`}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d={getIcon(iconName)}
                fill={color}/>
            </svg>
        </Tag>

    )
}

export default Icon;