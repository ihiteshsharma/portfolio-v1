import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Icon from '../components/Icon'
import Sidebar from "../components/Sidebar"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="bg-paperwhite dark:bg-richblack h-full w-full flex">
      <Sidebar />
      <span className="border-b-2">ABC</span>
      <span></span>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
