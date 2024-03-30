import React from "react"
import Icon from "../common/Icon"

const HeroText: React.FC = () => {
    return (
        <div className="text-center my-4 sm:max-w-2xl lg:max-w-7xl">
            <h1 className="mb-4 font-black text-gray-800 text-4xl md:text-6xl lg:text-7xl">
                <p>Experienced <span className="bg-clip-text bg-gradient-to-tr from-emerald-600 to-blue-400 text-transparent">full-stack</span> and <span className="bg-clip-text bg-gradient-to-tr from-emerald-600 to-blue-400 text-transparent">AI engineer</span> </p>
            </h1>
            <p className="max-w-sm sm:max-w-xl lg:max-w-4xl my-8 mx-auto text-sm md:text-md lg:text-xl text-gray-600">
                I build things for web, mobile and cloud focused on delivering GenAI Apps & full-stack projects
            </p>
        </div>)
}

const Hero: React.FC = () => {

    return (
        <main id="content" role="main" className="grow py-16 relative flex flex-col justify-center sm:items-center mx-auto before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
            <HeroText />
            <div className="mx-auto flex items-center gap-2">
                <a href="https://calendly.com/hiteshs_dev/collaboration" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-emerald-600 text-white hover:bg-emerald-800 hover:text-white disabled:opacity-50 disabled:pointer-events-none">
                    Hire me
                    <Icon iconName="circle-star" width={20} height={20} color="currentColor" />
                </a>
                <a href="https://calendly.com/hiteshs_dev/collaboration" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-emerald-100 disabled:opacity-50 disabled:pointer-events-none">
                    <Icon iconName="call-phone" width={20} height={20} color="currentColor" />
                    <span>Schedule call</span>
                </a>
                
            </div>

        </main>
    )
}

export default Hero;