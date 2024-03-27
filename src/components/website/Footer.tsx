import React from "react";
import Icon from "../common/Icon";

const Footer: React.FC = () => {
    return (
        <footer className="w-full max-w-[85rem] mx-auto mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400">© 2024 <a target="_blank" href="https://ventura.software/">Hitesh Sharma</a>. All rights reserved.</p>
            </div>

            <div className="mt-3 flex justify-center items-center">
                <a className="p-3 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="https://twitter.com/ihiteshsharma">
                    <Icon iconName="twitter" width={24} height={24} color="currentColor" />
                </a>
                <a className="p-3 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="https://www.linkedin.com/in/ihiteshsharma/">
                    <Icon iconName="linkedin" width={24} height={24} color="currentColor" />
                </a>
                <a className="p-3 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href="https://www.instagram.com/hiteshs.dev">
                    <Icon iconName="instagram" width={24} height={24} color="currentColor" />
                </a>

            </div>
        </footer>
    )
}

export default Footer;