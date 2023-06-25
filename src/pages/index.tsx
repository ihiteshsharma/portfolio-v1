import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Sidebar from "../components/Sidebar"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="p-8 bg-green-dark h-full">
      <Sidebar />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hitesh Sharma | Home</title>
