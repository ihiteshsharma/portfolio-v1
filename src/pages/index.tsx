import React, { useRef } from "react"
import type { HeadFC, PageProps, Script } from "gatsby"
import 'preline/dist/preline.js'
import Header from "../components/website/Header";
import Hero from "../components/website/Hero";
import Footer from "../components/website/Footer";
import Stats from "../components/website/Stats";
import Projects from "../components/website/Projects";
import Services from "../components/website/Services";
import Vision from "../components/website/Vision";
import Blog from "../components/website/Blog";

const IndexPage: React.FC<PageProps> = () => {
  const visionRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)

  // Function to handle smooth scrolling
  const scrollToRef = (ref:any) => {
    if (ref.current) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="h-full w-full flex flex-col bg-neutral-50 dark:bg-slate-950 px-8 md:px-16 py-8">
      <Header 
        scrollToVision={() => scrollToRef(visionRef)}
        scrollToServices={() => scrollToRef(servicesRef)}
        scrollToProjects={() => scrollToRef(projectsRef)}
        scrollToBlog={() => scrollToRef(blogRef)}
      />
      <Hero />
      <Stats />
      <Vision refProp={visionRef} />
      <Services refProp={servicesRef}/>
      <Projects refProp={projectsRef} />
      <Blog refProp={blogRef} />
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => 
  (<>
    <title>Hitesh Sharma | Generalist Software Developer</title>
  </>)
