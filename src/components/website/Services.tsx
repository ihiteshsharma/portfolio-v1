import React from 'react'
import Icon from '../common/Icon'

// Interface for Services component props
interface ServicesProps {
    /**
       * Ref prop for HTMLDivElement
       */
    refProp: React.RefObject<HTMLDivElement>;
}

const Services = React.forwardRef<HTMLDivElement, ServicesProps>((props, ref) => {
    const roles = [
        {
            'title': 'Full Stack Developer',
            'subtitle': 'Primarily dealing with all things web, from front-end to back-end, and everything in between.',
            'whats_included': ['Frontend Development', 'Backend Development', 'Database Management', 'DB Query Optimisations', 'Pagespeed Improvements for increasing front-end performance',  'API Integrations', 'Plugin Development', 'SaaS Development', 'CI/CD Pipelines & Automated builds', 'Microservices', 'Unit Testing & Code Reviews', 'Load Testing & Metrics Reporting', 'Scaling existing APIs & Web apps', 'Code Optimization & Performance Tuning', 'Security & Compliance - ISO 27001 & GDPR', 'Documentation & Reporting', 'Git & Code versioning', 'Handling deployments on AWS & GCP'],
            'calendly_link': '',
            'isPopular': false
        },
        {
            'title': 'AI Engineer - GenAI LLM Apps ',
            'subtitle': 'Primarily concerning with building, deploying and optimising applications powered via AI & Machine Learning models.',
            'whats_included': ['Integrate popular LLM Models (GPT, Stable Diffusion, PerplexityAI, MistralAI, etc)','Building LLM-Powered apps', 'Fine-tuning of AI Models', 'Develop Prompt Engineering solutions', 'Build & Deploy AI Apps on GCP', 'Run & Deploy private offline LLM apps for secure data handling', 'AI Chatbot development and integration', 'AI Powered Search & Recommendation Systems for your e-commerce store', 'CV Solutions & Integration', 'AI Powered Analytics & Reporting', 'Deploy private AI Apps within the organisation for boosting productivity'],
            'calendly_link': '',
            'isPopular': true
        }
    ]
    return (
        <div className='my-16 mx-auto' ref={props.refProp}>
            <div className="flex justify-center items-center gap-4 mb-8">
                <Icon iconName="items" width={40} height={40} color="currentColor" />
                <span className="text-3xl font-bold">Services</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {roles.map((role, idx) => (
                    <div key={idx} className={`${role.isPopular && 'border-2 border-solid border-emerald-500 shadow-xl'} p-4 relative flex flex-col z-10 bg-white rounded-xl md:p-10 border-2 border-solid border-transparent hover:border-emerald-700`}>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{role.title}</h3>
                        <div className="text-sm text-gray-500">{role.subtitle}</div>
                        {role.isPopular && <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3">Most popular</span>}
                        <ul className="grow mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0 space-y-2 text-sm sm:text-base">
                            {role.whats_included.map((ftr, idx) => (
                                <li key={idx} className="flex space-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <Icon iconName="circle-checked" className="" width={18} height={18} color='currentColor' />
                                    </span>
                                    <span className="text-gray-800 dark:text-gray-200">
                                        {ftr}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                            <div>
                                <p className="text-sm text-gray-500">Cancel anytime.</p>
                                <p className="text-sm text-gray-500">No card required.</p>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Book a slot</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
})

export default Services