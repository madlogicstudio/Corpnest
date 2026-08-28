'use client'

import Image from "next/image"
import { Building2, Grid2X2, BookOpen, Users, ChartNoAxesColumn, MessageCircle, Settings, LogOut, X } from "lucide-react"
import { useState, useRef } from "react";

type SideNavProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const SideNav = ({isOpen, setIsOpen, activeTab, setActiveTab}: SideNavProps) => {
    
    const menuRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={menuRef}
            className={`
                h-full w-[240px]
                flex flex-col
                bg-[var(--dark)]
                rounded-lg

                fixed sm:static
                top-0 left-0 z-50

                transition-transform duration-300 ease-in-out

                ${isOpen
                    ? "translate-x-0"
                    : "-translate-x-full sm:translate-x-0"
                }
            `}
        >
            
            <div className="w-full flex flex-row items-center gap-3 sm:p-6 py-6 px-4">
                <Image src="/Icon.png" height={32} width={32} alt="" className="cursor-pointer"/>
                <span className="font-sans font-bold text-xl tracking-[0.1em] cursor-pointer">Corpnest</span>     
                <X className="sm:hidden flex ml-auto h-6 w-6 cursor-pointer hovered" onClick={() => setIsOpen(false)}/>
            </div>

            <div className="w-full flex flex-col items-start gap-3 py-6 px-3 border-t border-gray-600">
                <span className="font-sans text-sm text-gray-400">Company Name</span> 
                <div className="w-full flex flex-row items-center gap-3 p-2 border rounded-lg">
                    <div className="flex-row items-center bg-[var(--primary)] p-2 border rounded-lg">
                        <Building2 className="h-6 w-6 text-[var(--light)] cursor-pointer" />
                    </div>
                    <span className="font-sans font-bold text-[color:var(--primary)] text-md">@Company</span>
                </div>
                
            </div>

            <div className="h-full flex flex-col gap-3 py-6 border-t border-gray-600">
                
                <div className={`${activeTab === "dashboard" ? "border-r-3 border-[var(--primary)]" : ""}
                    w-full flex flex-col gap-3 px-3`}
                    onClick={() => setActiveTab("dashboard") }>

                    <div className="flex flex-row items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-[var(--dashboard-bg)] ">
                        <Grid2X2 className={`${activeTab === "dashboard" ? "text-[var(--primary)]" : "text-gray-400"}
                            h-6 w-6 text-[var(--primary)]`} />
                        <span className={`${activeTab === "dashboard" ? "text-[var(--primary)]" : "text-gray-400"}
                            font-sans text-md`}>Dashboard</span> 
                    </div>

                </div>

                <div className={`${activeTab === "courses" ? "border-r-3 border-[var(--primary)]" : ""}
                    w-full flex flex-col gap-3 px-3`}
                    onClick={() => setActiveTab("courses") }>

                    <div className="flex flex-row items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-[var(--dashboard-bg)] ">
                        <BookOpen className={`${activeTab === "courses" ? "text-[var(--primary)]" : "text-gray-400"}
                            h-6 w-6 text-[var(--primary)]`} />
                        <span className={`${activeTab === "courses" ? "text-[var(--primary)]" : "text-gray-400"}
                            font-sans text-md`}>Courses</span> 
                    </div>

                </div>

                <div className={`${activeTab === "trainees" ? "border-r-3 border-[var(--primary)]" : ""}
                    w-full flex flex-col gap-3 px-3`}
                    onClick={() => setActiveTab("trainees") }>

                    <div className="flex flex-row items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-[var(--dashboard-bg)] ">
                        <Users className={`${activeTab === "trainees" ? "text-[var(--primary)]" : "text-gray-400"}
                            h-6 w-6 text-[var(--primary)]`} />
                        <span className={`${activeTab === "trainees" ? "text-[var(--primary)]" : "text-gray-400"}
                            font-sans text-md`}>Trainees</span> 
                    </div>

                </div>

                <div className={`${activeTab === "progress" ? "border-r-3 border-[var(--primary)]" : ""}
                    w-full flex flex-col gap-3 px-3`}
                    onClick={() => setActiveTab("progress") }>

                    <div className="flex flex-row items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-[var(--dashboard-bg)] ">
                        <ChartNoAxesColumn className={`${activeTab === "progress" ? "text-[var(--primary)]" : "text-gray-400"}
                            h-6 w-6 text-[var(--primary)]`} />
                        <span className={`${activeTab === "progress" ? "text-[var(--primary)]" : "text-gray-400"}
                            font-sans text-md`}>Progress</span> 
                    </div>

                </div>

                <div className={`${activeTab === "messages" ? "border-r-3 border-[var(--primary)]" : ""}
                    w-full flex flex-col gap-3 px-3`}
                    onClick={() => setActiveTab("messages") }>

                    <div className="flex flex-row items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-[var(--dashboard-bg)] ">
                        <MessageCircle className={`${activeTab === "messages" ? "text-[var(--primary)]" : "text-gray-400"}
                            h-6 w-6 text-[var(--primary)]`} />
                        <span className={`${activeTab === "messages" ? "text-[var(--primary)]" : "text-gray-400"}
                            font-sans text-md`}>Messages</span> 
                    </div>

                </div>

            </div>

            <div className="flex flex-col mt-auto gap-3 py-6 border-t border-gray-600">
                
                <div className={`${activeTab === "settings" ? "border-r-3 border-[var(--primary)]" : ""}
                    w-full flex flex-col gap-3 px-3`}
                    onClick={() => setActiveTab("settings") }>

                    <div className="flex flex-row items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-[var(--dashboard-bg)] ">
                        <Settings className={`${activeTab === "settings" ? "text-[var(--primary)]" : "text-gray-400"}
                            h-6 w-6 text-[var(--primary)]`} />
                        <span className={`${activeTab === "settings" ? "text-[var(--primary)]" : "text-gray-400"}
                            font-sans text-md`}>Settings</span> 
                    </div>

                </div>

                <div className="w-full flex flex-col gap-3 px-3">

                    <div className="flex flex-row items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-[var(--dashboard-bg)] ">
                        <LogOut className="h-6 w-6 text-gray-400" />
                        <span className="font-sans text-md text-gray-400">Log out</span> 
                    </div>

                </div>
            
            </div>

        </div>
    )
}
