'use client'

import { ArrowRight } from "lucide-react"
import { BookOpen } from "lucide-react"
import { ChartNoAxesCombinedIcon } from "lucide-react"
import { Users } from "lucide-react"
import { GraduationCap } from "lucide-react"
import { Sparkles } from "lucide-react"

function Hero() {
    return (
        <div className="w-full flex flex-col items-center justify-center sm:py-12 py-6 sm:px-0 md:px-3 px-3">

            <div className="max-w-[1280px] w-full h-auto flex flex-row sm:items-center flex-start justify-start">

                <div className="flex flex-row items-center justify-start gap-2 bg-gray-700 p-3 rounded-lg">
                    <GraduationCap className="sm:h-6 sm:w-6 h-12 w-12 text-[var(--primary)]" />
                    <span className="font-sans text-md text-[var(--primary)]">Corporate learning platform and development platform.</span>
                </div>

            </div>

            <div className="max-w-[1280px] w-full h-auto flex sm:flex-row flex-col sm:items-center flex-start justify-start gap-12 py-6">

                <div className="flex-1 flex flex-col justify-center gap-6">

                    <div className="flex flex-col">
                        <span className="font-sans text-5xl">Empower People.</span>      
                        <span className="font-sans font-bold text-[color:var(--primary)] text-5xl">Elevate Performance.</span> 
                    </div> 
                    
                    <div className="sm:flex hidden flex-row gap-3">
                        <div className="flex flex-row items-center gap-2 border border-gray-600 rounded-lg cursor-pointer px-6 py-2">
                            <span className="sm:text-md text-sm">Request a Demo</span>
                            <ArrowRight className="h-4 w-4" />
                        </div>
                        
                        <span className="bg-[var(--secondary)] rounded-lg rounded-lg px-6 py-2 sm:text-md text-sm cursor-pointer">Get Started</span>
                    </div> 
                </div>

                <div className="flex-1 flex flex-col items-start justify-start">

                    <div className="flex flex-col gap-3">
                        <span className="font-sans sm:text-lg text-md text-gray-400">Corpnest helps organizations build a culture of continuous learning that drives engagement, develop skills and delivering results.</span>
                        <span className="font-sans sm:text-lg text-md text-gray-400">Start by a company registration. Create courses, video lessons and exams. Hand out employee invitations. Progress tracking and create complition certificates.</span>
                    </div>

                </div>

                <div className="sm:hidden flex flex-row gap-3">
                    <div className="flex flex-row items-center gap-2 border border-gray-600 rounded-lg cursor-pointer px-6 py-2">
                        <span className="sm:text-md text-sm">Request a Demo</span>
                        <ArrowRight className="h-4 w-4" />
                    </div>
                    
                    <span className="bg-[var(--secondary)] rounded-lg rounded-lg px-6 py-2 sm:text-md text-sm cursor-pointer">Get Started</span>
                </div> 

            </div> 

            <div className="max-w-[1280px] w-full h-auto flex sm:flex-row flex-col sm:items-center flex-start justify-start gap-12 p-6
                border border-gray-600 rounded-lg">

                <div className="flex-1 flex flex-row items-center gap-3">    
                    <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                        <BookOpen className="h-8 w-8" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-sans sm:text-lg text-md text-[var(--primary)]">Engaging Learning</span>
                        <span className="font-sans text-md text-gray-400">Interactive courses and real-world content</span>
                    </div>
                </div>

                <div className="flex-1 flex flex-row items-center gap-3">    
                    <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                        <ChartNoAxesCombinedIcon className="h-8 w-8" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-sans sm:text-lg text-md text-[var(--primary)]">Track and Measure</span>
                        <span className="font-sans text-md text-gray-400">Powerful analytics to measure impact</span>
                    </div>
                </div>

                <div className="flex-1 flex flex-row items-center gap-3">    
                    <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                        <Users className="h-8 w-8" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-sans sm:text-lg text-md text-[var(--primary)]">Develop Talent</span>
                        <span className="font-sans text-md text-gray-400">Build skills that fuel growth and drive performance</span>
                    </div>
                </div>

            </div>

            <div className="max-w-[1280px] w-full h-auto flex sm:flex-row flex-col sm:items-center flex-start justify-start gap-12 p-6 mt-12
                bg-gray-700 rounded-lg">

                <div className="w-full flex flex-row items-center sm:justify-center justify-start gap-6 flex-wrap">
                    <Sparkles className="h-12 w-12" />
                    <div className="flex flex-col items-start gap-3">
                        <span className="font-sans sm:text-xl text-lg text-[var(--primary)]">
                            Everything you need to build a learning culture
                        </span>
                        <span className="font-sans text-md ">
                            From onbarding to upskilling, Corpnest helps your team grow together.
                        </span>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Hero