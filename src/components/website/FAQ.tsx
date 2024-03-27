export default function FAQ() {
    const faq = [
        { question: "How exactly does this work?", answer: "Think of this product as a canvas for organising your dashboards. You can freely organise any data source, plug it in any visualisation format and set things up." },
        { question: "Why should I provide my critical business data sources to you just for creating dashboards? What ensures my security?", answer: "We follow strict data localization rules as a service. We do not use any of our customers data for training or any personalisation. However, we may collect anonymised analytics based on usage of any feature which helps us improve and refine our service. Read our privacy policy to know more on how we collect analytics." },
        { question: "How does this app's pricing work?", answer: "Our subscriptions are monthly / annual. Understanding the task at hand and ironing out the wrinkles is key." },
    ]
    return (<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid md:grid-cols-5 gap-10">
                    <div className="md:col-span-2">
                        <div className="max-w-xs">
                            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Frequently<br />asked questions</h2>
                            <p className="mt-1 hidden md:block text-gray-600 dark:text-gray-400">Answers to the most frequently asked questions.</p>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
                            {faq.map((item, index) => (
                                <div key={index} className="hs-accordion pt-6 pb-3 active" id={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}>
                                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}>
                                    {item.question}
                                    <svg className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    <svg className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                </button>
                                <div id={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`} className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 text-gray-600 dark:text-gray-400" aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}>
                                    {item.answer}
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>)
    
}