import React, { useState, useEffect } from 'react'
import Icon from '../common/Icon';
import ComingSoon from './ComingSoon';

interface ProjectsProps {
    // Define your component props here
    refProp: React.RefObject<HTMLDivElement>;
}

// power this list in real time 
const projects = [
    {
        'title': 'Atlassian API',
        'subtitle': 'A software that develops products for software developers and developments.',
        'live_link': { label: 'Live Link', url: '' },
        'docs_link': { label: 'Docs Link', url: '' },
        'footer_color': 'bg-emerald-700',
        'tags': ['React', 'Node', 'Express', 'MongoDB', 'API', 'Atlassian', 'Jira', 'Confluence', 'Bitbucket']
    },
    {
        'title': 'Slack API',
        'subtitle': 'A software that develops products for software developers and developments.',
        'live_link': { label: 'Live Link', url: '' },
        'docs_link': { label: 'Docs Link', url: '' },
        'footer_color': 'bg-emerald-700',
        'tags': ['React', 'Node', 'Express', 'MongoDB', 'API', 'Atlassian', 'Jira', 'Confluence', 'Bitbucket']
    },
    {
        'title': 'JIRA API',
        'subtitle': 'A software that develops products for software developers and developments.',
        'live_link': { label: 'Live Link', url: '' },
        'docs_link': { label: 'Docs Link', url: '' },
        'footer_color': 'bg-emerald-700',
        'tags': ['React', 'Node', 'Express', 'MongoDB', 'API', 'Atlassian', 'Jira', 'Confluence', 'Bitbucket']
    },
    {
        'title': 'OpenAI API',
        'subtitle': 'A software that develops products for software developers and developments.',
        'live_link': { label: 'Live Link', url: '' },
        'docs_link': { label: 'Docs Link', url: '' },
        'footer_color': 'bg-emerald-700',
        'tags': ['React', 'Node', 'Express', 'MongoDB', 'API', 'Atlassian', 'Jira', 'Confluence', 'Bitbucket']
    },
    {
        'title': 'Gemini API',
        'subtitle': 'A software that develops products for software developers and developments.',
        'live_link': { label: 'Live Link', url: '' },
        'docs_link': { label: 'Docs Link', url: '' },
        'footer_color': 'bg-neutral-700',
        'tags': ['Node', 'Express', 'MongoDB', 'API', 'Atlassian', 'Jira', 'Confluence', 'Bitbucket']
    },
]

const Projects = React.forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
    return (
        <div ref={props.refProp} className='mx-auto'>
            <div className="flex justify-center items-center gap-4 mb-8">
                <Icon iconName="code" width={40} height={40} color="currentColor" />
                <span className="text-3xl font-bold">Projects</span>
            </div>
            <ComingSoon />
        </div>
    )
})

const ProjectsNew = React.forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
    const [searchText, setSearchText] = useState('')
    const tagList = ['React', 'Node', 'Express', 'MongoDB', 'API', 'Atlassian', 'Jira', 'Confluence', 'Bitbucket']
    const [projectsCopy, setProjectsCopy] = useState([...projects])
    const [checkedTags, setCheckedTags] = useState<Array<string>>([])
    useEffect(() => {
        if (searchText) {
            setProjectsCopy(projectsCopy.filter(project => project.title.toLowerCase().includes(searchText.toLowerCase())))
        } else {
            setProjectsCopy([...projects])
        }
    }, [searchText])
    useEffect(() => {
        if (checkedTags.length > 0) {
            setProjectsCopy(projects.filter(project => project.tags.some(tag => checkedTags.includes(tag))))
        } else {
            setProjectsCopy([...projects])
        }
    }, [checkedTags])
    const addToSelectedTags = (e:any) => {
        // add to selected tags if not added already
        if(e.target.checked){
            setCheckedTags([...checkedTags, e.target.value])
        } else {
            // remove from selected tags
            setCheckedTags(checkedTags.filter(tag => tag !== e.target.value))
        }
    }
    return (
        <div ref={props.refProp} className='' >
            <div className="flex justify-center items-center gap-4 mb-8">
                <Icon iconName="code" width={40} height={40} color="currentColor" />
                <span className="text-3xl font-bold">Projects</span>
            </div>
            <blockquote className="mt-8 relative text-center max-w-2xl mx-auto">
                <div className="relative z-10">
                    <p className="text-xl text-gray-800">
                        <em className="relative">
                            <Icon className="absolute -top-8 -start-8 size-16 text-gray-200 sm:h-24 sm:w-24 dark:text-gray-700" iconName="blockquote" width={64} height={64} color="currentColor" />
                            <span className="italic font-light relative z-10">Talk is cheap, show me the code</span>
                        </em>
                    </p>
                </div>
                <footer className="mt-6">
                    <div className="text-base font-semibold text-gray-800 dark:text-gray-400">Linus Torvalds</div>
                </footer>
            </blockquote>
            <div className="mt-4 flex justify-between items-center lg:justify-end  gap-4 border-b border-gray-200">
                {/* <!-- Input --> */}
                <div className="grow lg:grow-0">
                    <label htmlFor="hs-as-table-product-search" className="sr-only">Search</label>
                    <div className="relative">
                        <Icon className='absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 text-gray-400' iconName='search' width={18} height={18} color='currentColor' />
                        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" id="hs-as-table-product-search" name="hs-as-table-product-search" className="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Search" />
                    </div>
                </div>
                {/* <!-- End Input --> */}
                <div className="flex justify-end gap-x-2">
                    <div className="hs-dropdown relative inline-block [--placement:bottom-right]" data-hs-dropdown-auto-close="inside">
                        <button id="hs-as-table-table-filter-dropdown" type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <Icon iconName="filter" width={16} height={16} color="currentColor" />
                            Filter
                            {checkedTags.length > 0 && <span className="ps-2 text-xs font-semibold text-blue-600 border-s border-gray-200">
                                {checkedTags.length}
                            </span>}
                        </button>
                        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-10 bg-white shadow-md rounded-lg mt-2" aria-labelledby="hs-as-table-table-filter-dropdown">
                            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                {tagList.map((tag, idx) => {
                                    return (
                                        <label key={idx} htmlFor="hs-as-filters-tags-dropdown" className="flex py-2.5 px-3">
                                            <input value={tag} checked={checkedTags.includes(tag)} onChange={addToSelectedTags} type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-as-filters-tags-dropdown" />
                                            <span className="ms-3 text-sm text-gray-800 dark:text-gray-200">{tag}</span>
                                        </label>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projectsCopy.length === 0 && <div className="col-span-12 text-2xl text-center text-gray-500 dark:text-gray-400">No projects found</div>}
                {projectsCopy.map((project, idx) => (
                    <div key={idx} className="bg-white border shadow-sm rounded-xl">
                        <div className="p-4 md:p-5">
                            <h3 className="text-lg font-bold text-gray-800">
                                {project.title}
                            </h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                {project.subtitle}
                            </p>
                            <div className='w-full flex gap-x-2'>
                                <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href={project.live_link.url}>
                                    {project.live_link.label}
                                    <Icon iconName="chevron-right" width={12} height={12} color="currentColor" />
                                </a>
                                <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href={project.docs_link.url}>
                                    {project.docs_link.label}
                                    <Icon iconName="chevron-right" width={12} height={12} color="currentColor" />
                                </a>
                            </div>
                        </div>
                        <div className={`${project.footer_color} border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 text-sm text-gray-500`}>
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="m-1 inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-50 text-gray-500 dark:bg-white/[.05] dark:text-white">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
})

export default Projects