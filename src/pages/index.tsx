import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Topbar from "../components/Topbar"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="p-8">
      {/* header */}
      <header>
        {/* header content here */}
        <Topbar />
      </header>
      {/* body */}
      {/* <div className="main-container flex justify-center items-center">
        <div className="main-container-text">
          <h1 className="text-8xl font-black">
            Hi, I am Hitesh, a software engineer based out of India 🇮🇳
          </h1>
        </div>
      </div> */}
      {/* footer */}
      <footer>
        {/* footer content here */}
      </footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hitesh Sharma | Home</title>
