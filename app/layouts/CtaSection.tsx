'use client'

import { ArrowRight } from "lucide-react"

function CtaSection() {
    return (
        <div className="w-full flex flex-col items-center justify-center sm:py-12 py-6 sm:px-0 md:px-3 px-3">

            <div className="max-w-[1280px] w-full h-auto flex flex-col items-start justify-start gap-6 p-3 rounded-lg">
                <span className="font-sans font-bold text-[color:var(--primary)] text-4xl">Ready to empower your team?</span> 
                <div className="flex flex-col gap-3">
                    <span className="font-sans sm:text-lg text-md text-gray-400">Build a culture of continuous learning with Corpnest.</span>
                    <span className="font-sans sm:text-lg text-md text-gray-400">Create engaging courses, develop your employees, and track the impact—all from one platform.</span>
                </div>
                <div className="flex flex-row gap-3">
                    <div className="flex flex-row items-center gap-2 border border-gray-600 rounded-lg cursor-pointer px-6 py-2">
                        <span className="sm:text-md text-sm">Request a Demo</span>
                        <ArrowRight className="h-4 w-4" />
                    </div>
                    
                    <span className="bg-[var(--secondary)] rounded-lg rounded-lg px-6 py-2 sm:text-md text-sm cursor-pointer">Get Started</span>
                </div>
            </div>

        </div>
    )
}

export default CtaSection