'use client'

import Image from "next/image"
import { Menu } from "lucide-react"
import { X } from "lucide-react"
import { ChevronDown } from "lucide-react"
import { useRef, useState } from "react"

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    return (
        <div className="sticky top-0 bg-[var(--background)] w-full flex flex-row items-center justify-center py-4 sm:px-0 md:px-3 px-3 border-b border-gray-800 z-1">

            <div className="max-w-[1280px] w-full flex flex-row items-center justify-start sm:gap-12 gap-0">
                
                <div className="flex flex-row items-center gap-3">
                    <Image src="/Icon.png" height={32} width={32} alt="" className="cursor-pointer"/>
                    <span className="font-sans font-bold text-xl tracking-[0.1em] cursor-pointer">Corpnest</span>     
                </div>

                <div className="sm:flex hidden flex-row items-center gap-3">
                    <div className="flex flex-row items-center gap-1 hovered">
                        <span className="font-sans text-md cursor-pointer">Workspace</span> 
                        <ChevronDown className="h-4 w-4 cursor-pointer" />
                    </div>
                     
                    <span className="font-sans text-md cursor-pointer hovered">Pricing</span> 
                    <span className="font-sans text-md cursor-pointer hovered">Docs</span> 
                    <span className="font-sans text-md cursor-pointer hovered">Blog</span> 
                </div>

                <div className="ml-auto sm:flex hidden flex-row items-center sm:gap-3 gap-1">
                    <span className="border border-gray-600 rounded-lg px-3 py-2 text-sm cursor-pointer">Sign In</span>
                    <span className="bg-[var(--secondary)] rounded-lg rounded-lg px-3 py-2 text-sm cursor-pointer">Get Started</span>
                </div>

                <div className="ml-auto sm:hidden flex flex-row items-center">
                    <Menu className="h-6 w-6 cursor-pointer hovered" onClick={() => setIsOpen(true)}/>
                </div>
                
            </div>

            <div ref={menuRef} className={`w-full h-screen sm:hidden flex flex-col items-start justify-start gap-3 
                bg-[var(--background)] fixed top-0 left-0 transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                ${!isOpen ? "translate-x-full" : "-translate-x-0"}`}>
                
                <div className="w-full flex flex-row items-center gap-3 py-4 px-3">
                    <Image src="/Icon.png" height={32} width={32} alt="" className="cursor-pointer"/>
                    <span className="font-sans font-bold text-xl tracking-[0.1em] cursor-pointer">Corpnest</span>    
                    <X className="ml-auto h-6 w-6 cursor-pointer hovered" onClick={() => setIsOpen(false)}/>
                </div>
                
                <div className="w-full flex flex-col items-center py-4 px-3">

                    <div className="w-full flex flex-row items-center p-3 gap-1 hovered border-b border-gray-800">
                        <span className="font-sans text-md cursor-pointer">Workspace</span> 
                        <ChevronDown className="ml-auto h-6 w-6 cursor-pointer" />
                    </div>

                    <span className="w-full font-sans text-md hovered p-3 cursor-pointer border-b border-gray-800">Pricing</span> 
                    <span className="w-full font-sans text-md hovered p-3 cursor-pointer border-b border-gray-800">Docs</span> 
                    <span className="w-full font-sans text-md hovered p-3 cursor-pointer border-b border-gray-800">Blog</span> 

                </div>

                <div className="w-full bg-[var(--dark)] mt-auto flex flex-row items-center gap-3 justify-between py-4 px-3">
                    <span className="flex-1 text-center border border-gray-600 rounded-lg px-3 py-2 text-sm cursor-pointer">Sign In</span>
                    <span className="flex-1 text-center bg-[var(--secondary)] rounded-lg rounded-lg px-3 py-2 text-sm cursor-pointer">Get Started</span>
                </div>

            </div>  

        </div>
    )
}

export default Header   