'use client'

import { TestimonialCard } from "../../components/landing/TestimonialCard"

function Testimonials() {
    return (
        <div className="w-full flex flex-col items-center justify-center sm:py-12 py-6 sm:px-0 md:px-3 px-3">

            <div className="max-w-[1280px] w-full h-auto flex flex-col items-start justify-start gap-6">

                <span className="font-sans sm:text-3xl text-lg text-[var(--primary)]">What our customers say</span>
                <span className="font-sans sm:text-lg text-md text-gray-400">Trusted by teams building a culture of cntinous learning.</span>

                <div className="w-full flex sm:flex-row flex-col items-center gap-3 justify-between">

                    <TestimonialCard social="/images/X-icon.svg" image="/images/Auranex.jpg" name={"@aruanex"} 
                        text={`“@corpnest has made employee training much easier to organize. We can create learning programs, monitor progress, and keep everyone on the same page from one platform.”`} />
                    <TestimonialCard social="/images/X-icon.svg" image="/images/Driftmind.jpg" name={"@driftmind"} 
                        text={`“The ability to track employee learning and performance in one place has given our team a much clearer view of our development goals. Thank you @corpnest!”`} />
                    <TestimonialCard social="/images/X-icon.svg" image="/images/Ironleap.jpg" name={"@ironleap"} 
                        text={`“@CorpNest gives us a simple way to manage training while helping employees stay engaged with their learning. The progress tracking has been especially useful for our team.”`} />

                </div>

            </div>

        </div>
    )
}

export default Testimonials