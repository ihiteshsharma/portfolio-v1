import React, { FC } from 'react'
import Icon from './Icon';

const Sidebar: FC<any> = () => {
    // get the current OS preference for dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return(
        <div className='w-fit h-full p-8 flex flex-col justify-between'>
            <Icon iconName="menu-dots" />
            <div className='h-1/5 flex flex-col justify-around'>
                <Icon iconName={prefersDarkMode ? "moon" : "sun"} />
                <Icon iconName="linkedin" />
                <Icon iconName="github" />
            </div>
        </div>
    )
}

export default Sidebar;