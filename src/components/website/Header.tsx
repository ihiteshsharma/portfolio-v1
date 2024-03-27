import React from "react";
import Icon from "../common/Icon";

interface HeaderProps {
  scrollToVision: any;
  scrollToServices: any;
  scrollToProjects: any;
  scrollToBlog: any;

}
const Header: React.FC<HeaderProps> = ({ scrollToVision, scrollToServices, scrollToProjects, scrollToBlog }: any) => {
  const menuItems = [
    { 'icon': null, 'label': 'Vision', 'href': '#vision', ref: scrollToVision },
    { 'icon': null, 'label': 'Services', 'href': '#services', ref: scrollToServices },
    { 'icon': null, 'label': 'Work', 'href': '#work', ref: scrollToProjects },
    { 'icon': null, 'label': 'Blog', 'href': '#blog', ref: scrollToBlog },
  ]
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm">
      <nav className="relative max-w-7xl w-full mx-auto sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="flex">
            <a href='/' className="flex-none text-2xl font-semibold text-black dark:text-white font-genos" aria-label="Home">
              hiteshs<span className="text-emerald-600">.dev</span>
            </a>
            <span className="ml-2 py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
              <Icon iconName="circle-checked" className="" width={18} height={18} color="currentColor" />
              <span className="text-nowrap">Available for hire</span>
            </span>
          </div>

          <div className="sm:hidden">
            <button type="button" className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
              <Icon iconName="circle-menu" className="hs-collapse-open:hidden" width={24} height={24} color="currentColor" />
              <Icon iconName="circle-x" className="hs-collapse-open:block hidden" width={24} height={24} color="currentColor" />
            </button>
          </div>
        </div>
        <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            {menuItems.map((item, index) => {
              return (
                <button type="button" key={index} onClick={item.ref} className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-500" aria-current="page">
                  {item.icon && <Icon className="sm:border-s sm:border-gray-300 dark:border-gray-700" iconName="user" width={20} height={20} color="currentColor" />}
                  {item.label}
                </button>)
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;