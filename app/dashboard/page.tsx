'use client'

import { SideNav } from "@/components/dashboard/SideNav"
import { View } from "@/app/layouts/View"
import { Chatbot } from "@/components/landing/Chatbot"
import { useState, useEffect } from "react"
import { TwinOrbit } from "@/components/landing/TwinOrbit"

function page() {

    const [activeTab, setActiveTab] = useState("dashboard");
    const [isOpen, setIsOpen] = useState(false);
    const [chatbot, setChatbot] = useState(false);

    useEffect(() => {

        setInterval(() => {
        setChatbot(true);
        }, 3000);

    }, []);

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center bg-[var(--background)]">
                <div className="flex flex-col items-center gap-3">
                    <TwinOrbit className="size-3.5 text-[var(--primary)]" />
                </div>
            </div>
        )
    }

    return (
        <div className="sm:h-screen h-auto bg-[var(--dashboard-bg)] w-full sm:p-3 p-2">

            {chatbot && <Chatbot />}
            
            <div className="h-full w-full flex flex-row justify-between gap-3">

                <SideNav isOpen={isOpen} setIsOpen={setIsOpen} activeTab={activeTab} setActiveTab={setActiveTab} />

                <View activeTab={activeTab} setIsOpen={setIsOpen} />

            </div>
            
            
        </div>
    )
}

export default page