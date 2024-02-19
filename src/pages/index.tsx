import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Button from "../components/Button"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="grow landscape:px-24 landscape:pt-16 portrait:pt-16 portrait:px-8 w-full transition-all">
        <p className="font-genos font-bold text-3xl">hite<span className="text-progreen">sh</span>arma</p>
        <p className="font-black landscape:text-7xl portrait:text-4xl mt-16">Welcome to the Machine!</p>
        <p className="font-light landscape:text-2xl portrait:text-md landscape:mt-4 portrait:mt-2">I build things for web, mobile and cloud with the help of our AI Gods!</p>
        <div className="flex portrait:flex-col py-8">
          <div className="landscape:w-1/2  font-light landscape:text-md portrait:text-sm flex flex-col gap-4">
            <p>Let’s be honest. AI in 2024 has changed the way we think, see, hear and perceive our world around us. This is the new era of programming & development, where speed & depth matter along with quantifiable results.</p>
            <p>With the help of our Gods in the machines, I turn ideas into scalable digital experiences that drive growth and increase profitability.</p>
            <p>Feel free to browse my work, know more about me, view my projects, blogs, tutorials. Didn’t want to re-make everything again on my page just to increase dev time. I may rebuild this overtime. Should you have any questions, don’t hesitate to reach out.</p>
            <p>Cheers :)</p>
            <p className="font-medium">I am always open to talk about new projects, ideas and new collaboration opportunities. Can’t wait to hear from you!</p>
            <div className="flex items-center gap-4">
              <Button className="bg-progreen text-white font-medium w-fit" text="Schedule 1:1"/>
              <span className="text-xs font-semibold underline text-progreen">Alternatively, get in touch</span>
            </div>
          </div>
          <div className="landscape:w-1/2 flex flex-col landscape:items-center justify-around">
            <Button className='bg-linkedin text-white font-semibold landscape:w-2/3 portrait:w-3/4' iconSize={24} icon="linkedin" iconColor="#fff" text="About, Past Work" href="https://www.linkedin.com/in/ihiteshsharma/"/>
            <Button className='bg-github text-white font-semibold landscape:w-2/3 portrait:w-3/4' iconSize={24} icon="github" iconColor="#fff" text="Work & Projects" href="https://github.com/ihiteshsharma/"/>
            <Button className='bg-youtube text-white font-semibold landscape:w-2/3 portrait:w-3/4' iconSize={24} icon="youtube" iconColor="#fff" text="Vlogs & Tutorials" href="https://www.youtube.com/@hiteshs_dev"/>
            <Button className='bg-white text-black font-semibold landscape:w-2/3 portrait:w-3/4 border-2 border-solid' iconComponent={<img className="mx-2" src="/hashnode.png" width={24} />} text="Blog & Newsletter" href="https://hiteshsharma.hashnode.dev/"/>
            <Button className='instagram text-white font-semibold landscape:w-2/3 portrait:w-3/4' iconSize={24} icon="instagram" iconColor="#fff" text="Reels & Offtopic" href="https://www.linkedin.com/in/ihiteshsharma/"/>
          </div>
        </div>
      </div>
      <div className="font-light text-xs landscape:px-24 portrait:px-8 mb-4">
        <span>Built with Gatsby.js using TypeScript, TailwindCSS. Hosted on Github Pages</span>
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hitesh Sharma | Generalist Software Developer</title>
