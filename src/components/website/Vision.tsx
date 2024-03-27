import React from "react";
import Icon from "../common/Icon";
interface VisionProps {
    refProp: React.RefObject<HTMLDivElement>;
  }

const Vision = React.forwardRef<HTMLDivElement, VisionProps>((props, ref) => {
    return (
        <div id="vision" className="mx-auto my-16" ref={props.refProp}>
            <div className="flex justify-center items-center gap-4">
                <Icon iconName="crosshairs" width={40} height={40} color="currentColor" />
                <span className="text-3xl font-bold">Vision</span>
            </div>
            <blockquote className="mt-8 relative text-center max-w-2xl mx-auto">
                <div className="relative z-10">
                    <p className="text-xl text-gray-800">
                        <em className="relative">
                            <Icon className="absolute -top-8 -start-8 size-16 text-gray-200 sm:h-24 sm:w-24 dark:text-gray-700" iconName="blockquote" width={128} height={128} color="currentColor" />
                            <span className="italic font-light relative z-10">In 2024, my vision is to become an independent contractor capable of handling software projects at scale, either as a plug-and-play contributor or building a product from its inception.</span>
                        </em>
                    </p>
                </div>
            </blockquote>
        </div>
    )
})

export default Vision;