import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Icon from '../components/Icon'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="text-3xl">
      <Icon iconName='360'/> Something
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
