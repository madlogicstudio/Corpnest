'use client'

import { useState, useEffect } from "react"
import { TwinOrbit } from "@/components/landing/TwinOrbit"
import Image from "next/image"
import { Chatbot } from "@/components/landing/Chatbot"
import Footer from "@/app/layouts/Footer"
import { BookOpen, EyeOff, Eye, Building2 } from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client";

function page() {

    const [loading, setLoading] = useState(true);

    const [companyName, setCompanyName] = useState("");
    const [workEmail, setWorkEmail] = useState("");
    const [createPassword, setCreatePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [checkBox, setCheckBox] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, []);

    const supabase = createClient();

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (createPassword !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!checkBox) {
            alert("You must agree to the Terms of Service and Privacy Policy.");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email: workEmail,
            password: createPassword,
            options: {
                data: {
                    account_type: "company",
                    company_name: companyName,
                },
            },  
        });

        if (error) {
            console.error(error);
            alert(error.message);
            return;
        }

        console.log(data);

        alert("Account created! Check your email to verify your account.");
    };

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

                <div className="w-full flex flex-row items-center justify-center sm:mt-12 mx-3 sm:p-12 p-6 sm:m-0 m-3 border rounded-lg">

                    <div className="flex-1 flex flex-col items-center justify-center gap-3 sm:pr-12 sm:border-r">

                        <div className="w-full flex items-center justify-center flex-col sm:gap-3 gap-1">   
                            <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                                <Building2 className="h-8 w-8" />
                            </div> 
                            <span className="font-sans font-semibold text-[color:var(--primary)] text-3xl">Company Sign Up</span> 
                        </div> 

                        <span className="font-sans text-md text-gray-400 text-center">Create your company account and get started.</span>


                        <form onSubmit={handleSignUp} action="" className="w-full flex flex-col items-center justify-center gap-3 pt-12">

                            <div className="sm:w-[360px] w-full flex flex-col items-start justify-center gap-2">
                                <span className="font-sans text-md text-gray-400">Company Name</span>
                                <input value={companyName} type="text" placeholder="Your company name" name="" id="" required 
                                    className="w-full px-3 py-2 border focus:border-[var(--primary)] rounded-lg outline-none"
                                    onChange={(e) => setCompanyName(e.target.value)}/>
                            </div>

                            <div className="sm:w-[360px] w-full flex flex-col items-start justify-center gap-2">
                                <span className="font-sans text-md text-gray-400">Work Email</span>
                                <input value={workEmail} type="email" placeholder="company@example.com" name="" id="" required 
                                    className="w-full px-3 py-2 border focus:border-[var(--primary)] rounded-lg outline-none"
                                    onChange={(e) => setWorkEmail(e.target.value)}/>
                            </div>
                                
                            <div className="sm:w-[360px] w-full flex flex-col items-start justify-center gap-2">
                                <div className="w-full flex flex-row items-end justify-between">
                                    <span className="font-sans text-md text-gray-400">
                                        Create Password
                                    </span>
                                </div>

                                <div className="relative w-full">
                                    <input
                                        value={createPassword}
                                        type={showCreatePassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        required
                                        className="w-full px-3 py-2 pr-10 border focus:border-[var(--primary)] rounded-lg outline-none"
                                        onChange={(e) => setCreatePassword(e.target.value)}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowCreatePassword(!showCreatePassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--primary)] transition-colors cursor-pointer"
                                        aria-label={showCreatePassword ? "Hide password" : "Show password"}
                                    >
                                        {showCreatePassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>

                            </div>

                            <div className="sm:w-[360px] w-full flex flex-col items-start justify-center gap-2">

                                <div className="relative w-full">
                                    <input
                                        value={confirmPassword}
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm your password"
                                        required
                                        className="w-full px-3 py-2 pr-10 border focus:border-[var(--primary)] rounded-lg outline-none"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--primary)] transition-colors cursor-pointer"
                                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>

                            </div>

                            <div className="sm:w-[360px] w-full mt-12">
                                <input type="checkbox" className="text-md mr-2 align-middle" required name="" id="" 
                                    onChange={(e) => setCheckBox(e.target.checked)}/>
                                <span className="font-sans sm:text-md text-sm text-gray-400 align-middle">I agree to Corpnest’s 
                                    <span className="font-sans sm:text-md text-sm text-[var(--primary)] cursor-pointer ml-1">Terms of Service</span>
                                    <span className="font-sans sm:text-md text-sm ml-1">and</span>
                                    <span className="font-sans sm:text-md text-sm text-[var(--primary)] cursor-pointer ml-1">Privacy Policy</span>
                                    <span className="font-sans sm:text-md text-sm text-gray-400">, and to receive periodic emails with updates.</span>
                                </span>
                            </div>

                            <button type="submit" className="sm:w-[360px] w-full px-3 py-2 font-sans text-md bg-[var(--primary)] text-center rounded-lg cursor-pointer mt-6">
                                Create Company Account
                            </button>

                            <div className="mt-12">
                                <span className="font-sans sm:text-md text-sm text-gray-400 text-center">Already have a company account? </span>
                                <Link href="/login/company" className="font-sans sm:text-md text-sm text-[var(--primary)] text-center cursor-pointer ml-1">Sign in</Link>
                            </div>

                        </form>
                        
                    </div>

                    <div className="flex flex-cl items-center justify-center sm:flex hidden flex-1 sm:ml-12">
                        <Image src="/images/Company.png" height={600} width={600} className="" alt="" />
                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default page