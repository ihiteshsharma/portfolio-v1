import React, { FC } from 'react'
import Icon from '../components/Icon'

const menuBarIcons = ['linkedin', 'github', 'share', 'download', 'brightness-high']

const NavIcons: React.FC<any> = () => {
  let iconsArray: React.ReactElement[] = []
  menuBarIcons.forEach((icon) => {
    iconsArray.push(<Icon className='p-2 hover:rounded hover:bg-green-400' width={24} height={24} iconName={icon} />)
  })
  return (
    <div className="flex justify-between w-1/6">
      {iconsArray}
    </div>
  ) 
}
const Topbar: FC<any> = () => {
    return(
        <div className="flex">
            <div className='flex-grow'></div>
            <NavIcons />
        </div>
    )
}

export default Topbar;