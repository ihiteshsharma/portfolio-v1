import React, { FC } from 'react'
import Icon from './Icon'

const menuBarIcons = ['home', 'user', 'presentation', 'code', 'pencil-create']

const Sidebar: React.FC<any> = () => {
  let iconsArray: React.ReactElement[] = []
  menuBarIcons.forEach((icon, idx) => {
    iconsArray.push(<Icon size={24} tag={'span'} key={idx} iconName={icon} color={"#DAFFED"}/>)
  })
  return (
    <div className='flex flex-col h-full justify-around py-20'>
      {iconsArray}
    </div>
  ) 
}

export default Sidebar;