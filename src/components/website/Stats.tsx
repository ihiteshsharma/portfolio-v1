import React from "react"
import Icon from "../common/Icon"

const renderGridItem = (percent: string, label: string) => {
    return (
        <div>
            <p className="text-xl font-semibold text-emerald-600 lg:text-3xl">{percent}</p>
            <p className="mt-1 text-gray-500 text-sm lg:text-md">{label}</p>
        </div>
    )
}

const Stats: React.FC = () => {
    const heroStat = [{
        'number': '6 weeks',
        'icon': 'chevron-bottom',
        'badge': 'by 10%',
        'label': 'Average delivery time for new projects'
    }]
    const stats = [
        { 'number': '3', 'label': 'projects completed in 2024' },
        { 'number': '2', 'label': 'number of clients served' },
        { 'number': '<2 days', 'label': 'new project onboarding for any tech stack' }
    ]
    return (
        <div className="sm:max-w-2xl lg:max-w-7xl mx-auto grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
                {heroStat.map((stat, idx) => (
                    <div key={idx} className="my-6 mx-2 lg:my-8">
                        <p className="text-2xl lg:text-5xl font-bold leading-10 text-emerald-600">
                            {stat.number}
                            {stat.badge && <span className="ms-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-black text-xs leading-4 rounded-full py-0.5 px-2">
                                {stat.icon && <Icon iconName={stat.icon} width={16} height={16} color="currentColor" />}
                                {stat.badge}
                            </span>}
                        </p>
                        <p className="mt-2 sm:mt-3 text-gray-500 text-sm lg:text-md">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-gray-700">
                <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
                    {stats.map((stat) => renderGridItem(stat.number, stat.label))}
                </div>
            </div>
        </div>
    )
}

export default Stats;