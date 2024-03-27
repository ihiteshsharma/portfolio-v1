import React from 'react'
import Icon from '../common/Icon'

interface ServicesProps {
    // Define your component props here
    refProp: React.RefObject<HTMLDivElement>;

}

const Services = React.forwardRef<HTMLDivElement, ServicesProps>((props, ref) => {
    const services = [
        {
            'title': 'Web Development',
            'description': 'We build web applications that are scalable, secure and robust. We use modern technologies like React, Next.js, and Tailwind CSS.',
            'link': '#',
            'footerText': 'Web Development Footer',
            'iconName': 'devices'
        },
        {
            'title': 'Mobile Development',
            'description': 'We build mobile applications that are fast, responsive and user-friendly. We use React Native and Flutter for cross-platform development.',
            'link': '#',
            'footerText': 'Mobile Development Footer',
            'iconName': 'devices'
        },
        {
            'title': 'UI/UX Design',
            'description': 'We design user interfaces that are intuitive, accessible and visually appealing. We use Figma and Adobe XD for design.',
            'link': '#',
            'footerText': 'UI/UX Design Footer',
            'iconName': 'devices'
        },
        {
            'title': 'SEO Optimization',
            'description': 'We optimize websites for search engines to improve their visibility and ranking. We use tools like Google Analytics and Google Search Console.',
            'link': '#',
            'footerText': 'SEO Optimization Footer',
            'iconName': 'devices'
        },
        {
            'title': 'E-commerce Solutions',
            'description': 'We build e-commerce websites that are secure, scalable and easy to use. We use Shopify, WooCommerce and Magento for e-commerce development.',
            'link': '#',
            'footerText': 'E-commerce Solutions Footer',
            'iconName': 'devices'
        },
        {
            'title': 'Cloud Computing',
            'description': 'We deploy applications on cloud platforms like AWS, Azure and Google Cloud. We use Docker and Kubernetes for containerization and orchestration.',
            'link': '#',
            'footerText': 'Cloud Computing Footer',
            'iconName': 'devices'
        }
    ]
    return (
        <div className='my-16 mx-auto' ref={props.refProp}>
            {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, idx) => (
                    <a key={idx} className="group flex gap-y-6 size-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href={service.link}>
                        <Icon iconName={service.iconName} width={24} height={24} color='currentColor' className='flex-shrink-0 size-8 text-gray-800 mt-0.5 me-6' />
                        <div>
                            <div>
                                <h3 className="block font-bold text-gray-800 dark:text-white">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                            </div>

                            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                                Learn more
                                <svg className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </a>
                ))}
            </div> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div>
                    {/* <!-- Card --> */}
                    <div className="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Professional</h3>
                        <div className="text-sm text-gray-500">Everything a small team needs.</div>

                        <div className="mt-5">
                            <span className="text-6xl font-bold text-gray-800 dark:text-gray-200">$18</span>
                            <span className="text-lg font-bold text-gray-800 dark:text-gray-200">.00</span>
                            <span className="ms-3 text-gray-500">USD / monthly</span>
                        </div>

                        <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                            {/* <!-- List --> */}
                            <ul className="space-y-2 text-sm sm:text-base">
                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">
                                        Up to 10 people
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">
                                        Collect data
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">
                                        Code extensibility
                                    </span>
                                </li>
                            </ul>
                            {/* <!-- End List --> */}

                            {/* <!-- List --> */}
                            <ul className="space-y-2 text-sm sm:text-base">
                                <li className="flex space-x-3">
                                    <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-gray-800">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">
                                        Custom reports
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-gray-800">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">
                                        Product support
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-gray-800">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">
                                        Activity reporting
                                    </span>
                                </li>
                            </ul>
                            {/* <!-- End List --> */}
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                            <div>
                                <p className="text-sm text-gray-500">Cancel anytime.</p>
                                <p className="text-sm text-gray-500">No card required.</p>
                            </div>

                            <div className="flex justify-end">
                                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Start free trial</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Card --> */}
                </div>

                <div>
                    {/* <!-- Card --> */}
                    <div className="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Teams</h3>
                        <div className="text-sm text-gray-500">For growing businesses.</div>
                        <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-white dark:text-gray-800">Most popular</span>

                        <div className="mt-5">
                            <span className="text-6xl font-bold text-gray-800 dark:text-gray-200">$36</span>
                            <span className="text-lg font-bold text-gray-800 dark:text-gray-200">.99</span>
                            <span className="ms-3 text-gray-500">USD / monthly</span>
                        </div>

                        <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                            {/* <!-- List --> */}
                            <ul className="space-y-2 text-sm sm:text-base">
                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">
                                        Up to 10 people
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">
                                        Collect data
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">
                                        Code extensibility
                                    </span>
                                </li>
                            </ul>
                            {/* <!-- End List --> */}

                            {/* <!-- List --> */}
                            <ul className="space-y-2 text-sm sm:text-base">
                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">
                                        Custom reports
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">
                                        Product support
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">
                                        Activity reporting
                                    </span>
                                </li>
                            </ul>
                            {/* <!-- End List --> */}
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                            <div>
                                <p className="text-sm text-gray-500">Cancel anytime.</p>
                                <p className="text-sm text-gray-500">No card required.</p>
                            </div>

                            <div className="flex justify-end">
                                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Start free trial</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Card --> */}
                </div>
            </div>
        </div>

    )
})

export default Services