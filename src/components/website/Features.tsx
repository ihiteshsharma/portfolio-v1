import Icon from "../common/Icon"

export default function Features() {
    const featureList = [
        { icon: "edit-shape", label: "WYSIWYG Editor", description: "Use our WYSIWYG editor to rearrange, edit, compose dashboards to create insights you need" },
        { icon: "share", label: "Shareable", description: "Get short URLs shareable with others on the web" },
        { icon: "download", label: "Exportable", description: "Every chart and dashboard can be individually exported to use as static image or React Components" },
        { icon: "code", label: "Developer Friendly", description: "Use API, embed via script or link in your own projects" },
        { icon: "devices", label: "Responsive Layouts", description: "Create multiple layouts for different screen sizes to focus on what matters." },
        { icon: "chart", label: "Customizable", description: "Customize every chart, dashboard with your own color, theme, and style" },
        { icon: "database", label: "Data Source", description: "Connect with various data sources like REST API, GraphQL, SQL, and more" },
        { icon: "lightning", label: "Real-time Data", description: "Real-time data support for live dashboards" },
        { icon: "radar", label: "AI-powered Insights", description: "Leverage the power of AI to generate intelligent insights from your data" },
        { icon: "glasses", label: "Automated Data Analysis", description: "Automatically analyze and interpret data to uncover patterns and trends" },
        { icon: "route", label: "Smart Recommendations", description: "Receive smart recommendations for optimizing your dashboards based on usage patterns" },
        { icon: "shield-ok", label: "Data Security", description: "Ensure the security and privacy of your data with advanced encryption and access controls" },
    ]

    return (
        <div id="features-section" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {featureList.map((feature, index) => (
                    <div key={index}>
                        <Icon iconName={feature.icon} width={36} height={36} color="currentColor" />
                        <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
                            <div className="bg-gray-400 w-9 h-0.5"></div>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{feature.label}</h3>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
        