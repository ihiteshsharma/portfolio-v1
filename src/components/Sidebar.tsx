import React, { FC, useEffect, useState } from 'react'
import Icon from './Icon';

const Sidebar: FC<any> = () => {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        if(theme === 'light') {
            setTheme('dark')
            document.body.classList.add('dark');
        }
        else {
            setTheme('light')
            document.body.classList.remove('dark');
        }
    }
    return(
        <div className='w-inherit h-fit p-8 flex justify-between landscape:w-fit landscape:h-full landscape:flex-col'>
            <Icon iconName="menu-dots" />
            <div className='w-1/3 flex justify-around lg:w-1/4 landscape:h-1/5 landscape:flex-col'>
                <Icon className='cursor-pointer' onClick={toggleTheme} iconName={theme === 'dark' ? "moon" : "sun"} />
                <Icon className='cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/ihiteshsharma/')} iconName="linkedin" />
                <Icon className='cursor-pointer' onClick={() => window.open('https://github.com/ihiteshsharma/')} iconName="github" />
            </div>
        </div>
    )
}

export default Sidebar;