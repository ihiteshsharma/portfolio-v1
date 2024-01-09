import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Sidebar from "../components/Sidebar"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div className="bg-paperwhite dark:bg-richblack h-full w-full landscape:flex">
        <Sidebar />
        <div className="portrait:px-8 portrait:py-8 landscape:py-28 landscape:pr-32 landscape:pl-16 w-full landscape:h-full flex landscape:justify-between flex-col relative">
          <hr className="hidden landscape:inline origin-top-right w-3/4 absolute right-16 top-20 text-richblack dark:text-paperwhite" />
          <hr className="hidden landscape:inline origin-top-right w-64 -rotate-90 absolute right-24 top-10 text-richblack dark:text-paperwhite"/>
          <div className="mb-8 landscape:text-right">
            <p className="text-richblack dark:text-paperwhite font-serif [font-size:_clamp(3em,6vw,10em)]">Holistic user experiences,</p>
            <p className="text-richblack dark:text-paperwhite font-serif [font-size:_clamp(3em,6vw,10em)]">redefined</p>
          </div>
          <div className="w-inherit h-fit text-richblack dark:text-paperwhite">
            <img src="https://placehold.co/128" alt="memoji" className="rounded-full mb-4"/>
            <p className="text-5xl"><span className="font-bold">Hitesh</span> Sharma</p>
            <p className="font-light w-1/2 mt-4">I build and turn ideas into user-centric digital experiences, with strong focus on accessibility and function. Welcome to my digital showcase!</p>
          </div>
          <div>
            <button className="mt-4 py-2 px-4 bg-richblack dark:bg-paperwhite text-paperwhite dark:text-richblack rounded-lg">view my work</button>
            <button className="mt-4 py-2 px-4 text-richblack dark:text-paperwhite font-bold">read my blog</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hitesh Sharma | Freelance Software Developer</title>
