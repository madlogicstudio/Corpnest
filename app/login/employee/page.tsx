'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { TwinOrbit } from "@/components/landing/TwinOrbit"
import { Chatbot } from "@/components/landing/Chatbot"
import Footer from "@/app/layouts/Footer"
import { ArrowRight, User, BookOpen, Eye, EyeOff } from "lucide-react"
import { FaGoogle } from "react-icons/fa"
import Link from "next/link"

function page() {
    
    const [loading, setLoading] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

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
        <div className="sticky top-0 bg-[var(--background)] w-full flex flex-col items-center justify-center gap-12">
            
            <div className="max-w-[1280px] w-full flex flex-row items-center py-4 sm:px-0 md:px-3 px-3 border-b border-gray-800">

                <div className="flex flex-row items-center gap-3">
                    <Image src="/Icon.png" height={32} width={32} alt="" className="cursor-pointer" />

                    <span className="font-sans font-bold text-xl tracking-[0.1em] cursor-pointer">
                        Corpnest
                    </span>
                </div>

                <div className="ml-auto flex flex-row items-center justify-start gap-2 border-2 border-gray-700 hover:bg-gray-700 p-2 rounded-lg cursor-pointer ease-in-out">
                    <BookOpen className="h-4 w-4  text-[var(--primary)]" />

                    <span className="font-sans text-sm text-[var(--primary)]">
                        Documentation
                    </span>
                </div>

            </div>

            <div className="max-w-[1280px] w-full flex flex-col items-center sm:gap-12 gap-8 p-3">

                <Chatbot />

                <div className="w-full flex flex-row items-center justify-center mx-3 sm:p-12 p-6 sm:m-0 m-3 border rounded-lg">

                    <div className="flex flex-cl items-center justify-center sm:flex hidden flex-1 sm:mr-12">
                        <Image src="/images/Employee.png" height={480} width={480} className="" alt="" />
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center gap-3 sm:pl-12 sm:border-l">

                        <div className="w-full flex items-center justify-center flex-col sm:gap-3 gap-1">   
                            <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                                <User className="h-8 w-8" />
                            </div> 
                            <span className="font-sans font-semibold text-[color:var(--primary)] text-3xl">Employee Sign In</span> 
                        </div> 

                        <span className="font-sans text-md text-gray-400 text-center">Welcome back! Please sign in to yur accoount.</span>


                        <form action="" className="w-full flex flex-col items-center justify-center gap-3 pt-12">

                            <div className="sm:w-[360px] w-full flex flex-col items-start justify-center gap-2">
                                <span className="font-sans text-md text-gray-400">Email address</span>
                                <input type="email" placeholder="email@example.com" name="" id="" required 
                                    className="w-full px-3 py-2 border focus:border-[var(--primary)] rounded-lg outline-none"/>
                            </div>
                                
                            <div className="sm:w-[360px] w-full flex flex-col items-start justify-center gap-2">
                                
                                <div className="w-full flex flex-row items-end justify-between">
                                    <span className="font-sans text-md text-gray-400">
                                        Password
                                    </span>

                                    <span className="font-sans text-sm text-[var(--primary)] cursor-pointer">
                                        Forgot password?
                                    </span>
                                </div>

                                <div className="relative w-full">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        required
                                        className="w-full px-3 py-2 pr-10 border focus:border-[var(--primary)] rounded-lg outline-none"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--primary)] transition-colors cursor-pointer"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                        
                            </div>

                            <span className="sm:w-[360px] w-full p-x-3 py-2 font-sans text-md bg-[var(--primary)] text-center rounded-lg cursor-pointer mt-6">Sign in</span>

                            <div className="w-full flex items-center gap-4 my-6">
                                <div className="h-px flex-1 bg-[var(--primary)]" />

                                <span className="text-sm text-[var(--primary)]">
                                    or continue with
                                </span>

                                <div className="h-px flex-1 bg-[var(--primary)]" />
                            </div>

                            <div className="sm:w-[360px] w-full flex flex-row items-center justify-center gap-3 px-3 py-2 cursor-pointer border rounded-lg 
                                hover:bg-[var(--primary)] text-[var(--primary)] hover:text-[var(--background)]">
                                <FaGoogle />
                                <span className="font-sans text-md">Google</span>
                            </div>

                            <div className="mt-12">
                                <span className="font-sans sm:text-md text-sm text-gray-400 text-center">Don't have an employee account? </span>
                                <Link href="/signup/employee" className="font-sans sm:text-md text-sm text-[var(--primary)] text-center cursor-pointer ml-1">Sign up</Link>
                            </div>

                            <div className="mt-12 text-center">
                                <span className="font-sans sm:text-md text-sm text-gray-400 text-center">By continuing, you agree to Corpnest’s 
                                    <span className="font-sans sm:text-md text-sm text-[var(--primary)] text-center cursor-pointer ml-1">Terms of Service</span>
                                    <span className="font-sans sm:text-md text-sm text-center ml-1">and</span>
                                    <span className="font-sans sm:text-md text-sm text-[var(--primary)] text-center cursor-pointer ml-1">Privacy Policy</span>
                                    <span className="font-sans sm:text-md text-sm text-gray-400 text-center">, and to receive periodic emails with updates.</span>
                                </span>
                            </div>

                        </form>
                        
                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default page