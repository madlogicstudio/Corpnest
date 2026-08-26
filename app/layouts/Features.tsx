'use client'

import { FeautreCard } from "../../components/FeautreCard"
import { SquareLibrary, Video, FileText, ChartSpline, Award, UsersRound, ChartNoAxesCombined, Bell } from "lucide-react"

function Features() {
    return (
        <div className="w-full flex flex-col items-center justify-center sm:py-12 py-6 sm:px-0 md:px-3 px-3">

            <div className="max-w-[1280px] w-full h-auto flex flex-col items-start justify-start gap-6">

                <div className="flex flex-col">
                    <span className="font-sans text-5xl">Everything your organization needs to</span>      
                    <span className="font-sans font-bold text-[color:var(--primary)] text-5xl">grow and succeed.</span> 
                </div> 
                
                <span className="font-sans sm:text-lg text-md text-gray-400">
                    Powerful tools to create, manage and optimize learning experiences.
                </span>

                <div className="w-full flex sm:flex-row flex-col items-center justify-between gap-3">

                    <FeautreCard icon={<SquareLibrary className="h-8 w-8" />} title={"Course Builder"} text={"Create structured curses with chapters, lessons and tasks."} />
                    <FeautreCard icon={<Video className="h-8 w-8" />} title={"Video Lessons"} text={"Upload and organize videos to deliver  engaging learning."} />
                    <FeautreCard icon={<FileText className="h-8 w-8" />} title={"Exams & Assesment"} text={"Create quizzes and exams to test knowledge and understanding."} />
                    <FeautreCard icon={<ChartSpline className="h-8 w-8" />} title={"Analytics & Reports"} text={"Get detailed insights on progress, performance and completion."} />

                </div>

                <div className="w-full flex sm:flex-row flex-col items-center justify-between gap-3">

                    <FeautreCard icon={<Award className="h-8 w-8" />} title={"Certificates"} text={"Automatically generate certificates to recgnize achievements."} />
                    <FeautreCard icon={<UsersRound className="h-8 w-8" />} title={"Employee Management"} text={"Invite, organize and manage your entire workforce."} />
                    <FeautreCard icon={<ChartNoAxesCombined className="h-8 w-8" />} title={"Progress Tracking"} text={"Track individual and team progress in real-time dashboard."} />
                    <FeautreCard icon={<Bell className="h-8 w-8" />} title={"Notifications"} text={"Keep your team informed with smart notifications and reminders."} />

                </div>
        
                

            </div>

        </div>
    )
}

export default Features