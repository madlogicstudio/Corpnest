'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import { TwinOrbit } from "@/components/landing/TwinOrbit"
import { Chatbot } from "@/components/landing/Chatbot"
import { Building2, ArrowRight, User, BookOpen } from "lucide-react"
import Footer from "../layouts/Footer"
import Link from "next/link"

function Page() {

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
        <div className="sticky top-0 bg-[var(--background)] w-full flex flex-col items-center justify-center">

            <div className="max-w-[1280px] w-full flex flex-col items-start sm:gap-12 gap-8">

                <Chatbot />

                <div className="w-full flex flex-row items-center py-4 sm:px-0 md:px-3 px-3 border-b border-gray-800">

                    <div className="flex flex-row items-center gap-3">
                        <Image
                            src="/Icon.png"
                            height={32}
                            width={32}
                            alt=""
                            className="cursor-pointer"
                        />

                        <span className="font-sans font-bold text-xl tracking-[0.1em] cursor-pointer">
                            Corpnest
                        </span>
                    </div>

                    <div className="ml-auto flex flex-row items-center justify-start gap-2 border-2 border-gray-700 hover:bg-gray-700 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out">
                        <BookOpen className="sm:h-4 sm:w-4 h-3 w-3  text-[var(--primary)]" />

                        <span className="font-sans sm:text-sm text-xs text-[var(--primary)]">
                            Documentation
                        </span>
                    </div>

                </div>

                <div className="w-full flex flex-col items-center justify-center sm:mt-24 mt-6 gap-3 p-3">

                    <div className="w-full flex sm:flex-row items-center justify-center flex-col sm:gap-3 gap-1">
                        <span className="font-sans text-4xl">Welcome to</span>      
                        <span className="font-sans font-semibold text-[color:var(--primary)] text-4xl">Corpnest</span> 
                    </div> 

                    <span className="font-sans text-md text-gray-400 text-center">The all-in-one platform to manage your company and empower your workforce.</span>
                    <span className="font-sans text-[color:var(--primary)] text-md text-center">How would you like to continue?</span>

                    <div className="flex sm:flex-row flex-col items-center justify-between gap-3 my-12">
                        
                        <div className="max-w-[420px] flex-1 flex flex-col items-center justify-center gap-3 p-6 border rounded-lg hover:border-[var(--primary)] 
                            transition duration-300 ease-in-out">    
                            
                            <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                                <Building2 className="h-8 w-8" />
                            </div>

                            <div className=" flex flex-col gap-3">
                                
                                <span className="font-sans sm:text-lg text-md text-[var(--primary)] text-center">I'm a company</span>
                                <span className="font-sans text-md text-gray-400 text-center">Create and manage your company, invite employees and streamline your operations.</span>
                                
                                <Link href="/login/company" className="flex flex-row items-center justify-center p-3 gap-2 bg-[var(--primary)] hover:bg-transparent border rounded-lg 
                                    transition duration-300 ease-in-out text-[var(--background)] hover:text-white cursor-pointer">
                                    <span className="font-sans font-semibold sm:text-sm text-xs">Continue as Company</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>

                            </div>

                        </div>

                        <div className="max-w-[420px] flex-1 flex flex-col items-center justify-center gap-3 p-6 border rounded-lg hover:border-[var(--primary)] 
                            transition duration-300 ease-in-out">    
                            
                            <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                                <User className="h-8 w-8" />
                            </div>

                            <div className=" flex flex-col gap-3">
                                
                                <span className="font-sans sm:text-lg text-md text-[var(--primary)] text-center">I'm an employee</span>
                                <span className="font-sans text-md text-gray-400 text-center">Join your company, access resources and collaborate with your team effortlessly.</span>
                                
                                <Link href="/login/employee" className="flex flex-row items-center justify-center p-3 gap-2 bg-[var(--primary)] hover:bg-transparent border rounded-lg 
                                    transition duration-300 ease-in-out text-[var(--background)] hover:text-white cursor-pointer">
                                    <span className="font-sans font-semibold sm:text-sm text-xs">Continue as Employee</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>

                            </div>

                        </div>

                    </div>
                    
                </div>            

            </div>

            <Footer />

        </div>
    )
}

export default Page