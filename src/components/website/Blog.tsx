import React from 'react'
import Icon from '../common/Icon'
import ComingSoon from './ComingSoon';

// Interface for Services component props
interface BlogProps {
    /**
       * Ref prop for HTMLDivElement
       */
    refProp: React.RefObject<HTMLDivElement>;
}

const Blog = React.forwardRef<HTMLDivElement, BlogProps>((props, ref) => {

    return (
        <div ref={props.refProp} className='mx-auto'>
             <div className="flex justify-center items-center gap-4 mb-8">
                <Icon iconName="book" width={36} height={36} color="currentColor" />
                <span className="text-3xl font-bold">Blog</span>
            </div>
            <ComingSoon />
        </div>
    )
})

const BlogNew = React.forwardRef<HTMLDivElement, BlogProps>((props, ref) => {

    return (
        <div ref={props.refProp}>
            <div className="flex justify-center items-center gap-4 mb-8">
                <Icon iconName="book" width={36} height={36} color="currentColor" />
                <span className="text-3xl font-bold">Blog</span>
            </div>

            {/* <!-- Card Blog --> */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* <!-- Grid --> */}
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* <!-- Card --> */}
                    <a className="group sm:flex rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
                            <img className="size-full absolute top-0 start-0 object-cover" src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description" />
                        </div>

                        <div className="grow">
                            <div className="p-4 flex flex-col h-full sm:p-6">
                                <div className="mb-3">
                                    <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                        Business
                                    </p>
                                </div>
                                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                                    Preline becomes an official Instagram Marketing Partner
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    Great news we're eager to share.
                                </p>

                                <div className="mt-5 sm:mt-auto">
                                    {/* <!-- Avatar --> */}
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img className="size-[46px] rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                                        </div>
                                        <div className="ms-2.5 sm:ms-4">
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                                                Aaron Larsson
                                            </h4>
                                            <p className="text-xs text-gray-500">
                                                Feb 15, 2021
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- End Avatar --> */}
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* <!-- End Card --> */}

                    {/* <!-- Card --> */}
                    <a className="group sm:flex rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
                            <img className="size-full absolute top-0 start-0 object-cover" src="https://images.unsplash.com/photo-1669824774762-65ddf29bee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description" />
                        </div>
                        <div className="grow">
                            <div className="p-4 flex flex-col h-full sm:p-6">
                                <div className="mb-3">
                                    <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                        Announcements
                                    </p>
                                </div>
                                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                                    Announcing a free plan for small teams
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    At Wake, our mission has always been focused on bringing openness.
                                </p>

                                <div className="mt-5 sm:mt-auto">
                                    {/* <!-- Avatar --> */}
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img className="size-[46px] rounded-full" src="https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                                        </div>
                                        <div className="ms-2.5 sm:ms-4">
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                                                Hanna Wolfe
                                            </h4>
                                            <p className="text-xs text-gray-500">
                                                Feb 4, 2021
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- End Avatar --> */}
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* <!-- End Card --> */}
                </div>
                {/* <!-- End Grid --> */}
            </div>
            {/* <!-- End Card Blog --> */}
            <div className="text-center">
                <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
                    <div className="py-3 px-4 flex items-center gap-x-2">
                        <p className="text-gray-600 dark:text-gray-400">
                            Want to read more?
                        </p>
                        <a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../docs/index.html">
                            Go here
                            <Icon iconName="chevron-right" width={24} height={24} color='currentColor' />
                            {/* <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
})

export default Blog