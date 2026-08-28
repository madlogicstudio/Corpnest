'use client'

import { Search, Bell, Menu } from "lucide-react";

type DashboardHeaderProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashboardHeader = ({setIsOpen}: DashboardHeaderProps) => {

    return (
        <div className="w-full flex sm:flex-row flex-col-reverse items-center gap-3 p-3 bg-[var(--dark)] rounded-lg">
        
            <div className="w-full flex flex-col items-start justify-start rounded-lg">
                <span className="font-sans text-lg text-[var(--primary)]">Welcome Back @Company</span>
                <span className="font-sans text-sm text-gray-400">Continue training your new employees today.</span>
            </div>
            <div className="ml-auto sm:w-auto w-full flex flex-row items-center gap-3">
                <Menu className="sm:hidden flex h-9 w-9" 
                    onClick={() => setIsOpen(true)}/>
                <div className="flex flex-row items-center gap-3 border px-3 py-2 rounded-lg text-sm sm:w-auto w-full">
                    <Search className="h-4 w-4 text-gray-400" />
                    <input type="text" placeholder="Search..." className="outline-none" />
                </div>
                <div className="p-2 bg-[var(--primary)] rounded-full cursor-pointer">
                    <Bell className="h-5 w-5" />
                </div>
            </div>
            
        </div>
    )
}
