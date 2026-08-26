'use client'

import Image from "next/image"
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaTiktok
} from "react-icons/fa";

function Footer() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-4 sm:px-0 md:px-3 px-3 border-t border-gray-800">

            <div className="max-w-[1280px] w-full flex sm:flex-row flex-col items-start justify-start gap-12 py-20">

                <div className="flex-2 flex flex-col items-start justify-start gap-3">

                    <div className="flex flex-row items-center justify-start gap-3">
                        <Image src="/Icon.png" height={32} width={32} alt="" className="cursor-pointer"/>
                        <span className="font-sans font-bold text-xl tracking-[0.1em] cursor-pointer">Corpnest</span>
                    </div>

                    <div className="flex flex-row items-center justify-start gap-3 py-6">
                        <FaFacebook className="h-7 w-7 text-gray-400 cursor-pointer hovered" />
                        <FaInstagram className="h-7 w-7 text-gray-400 cursor-pointer hovered" />
                        <FaTwitter className="h-7 w-7 text-gray-400 cursor-pointer hovered" />
                        <FaYoutube className="h-7 w-7 text-gray-400 cursor-pointer hovered" />
                        <FaTiktok className="h-7 w-7 text-gray-400 cursor-pointer hovered" />
                    </div>

                    <div className="flex flex-col items-start justify-start gap-3">
                        <span className="font-sans text-md text-gray-400">Get product updates and news from Corpnest.</span>
                        <input type="email" name="" placeholder="Your email" className="sm:w-[320px] w-full bg-[var(--dark)] sm:w-full w-auto outline-none border border-gray-600 rounded-lg p-2 sm:text-md text-sm" />
                        <span className="sm:w-[320px] w-full bg-[var(--secondary)] rounded-lg rounded-lg px-3 py-2 sm:text-md text-sm text-center cursor-pointer">Subscribe</span>
                    </div>

                </div>

                <div className="flex-1 flex flex-col items-start justify-start gap-3">

                    <span className="font-sans text-md">Product</span>

                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Pricing</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Feature Catalog</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Launch Week</span>

                </div>

                <div className="flex-1 flex flex-col items-start justify-start gap-3">

                    <span className="font-sans text-md">Resources</span>

                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Blog</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Support</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">System Status</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Become a Partner</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Partner Catalog</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Security & Compliance</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">SOC2</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">HIPAA</span>

                </div>

                <div className="flex-1 flex flex-col items-start justify-start gap-3">

                    <span className="font-sans text-md">Developers</span>

                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Documentation</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Changelog</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">RRS</span>

                </div>

                <div className="flex-1 flex flex-col items-start justify-start gap-3">

                    <span className="font-sans text-md">Company</span>

                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Company</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Careers</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">General Availability</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Legal Hub</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Privacy Policy</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Privacy Settings</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Acceptable Use Policy</span>
                    <span className="font-sans text-md text-gray-400 cursor-pointer hovered">Contact Us</span>

                </div>

            </div>

            <div className="max-w-[1280px] w-full flex flex-row items-center justify-start gap-3 border-t border-gray-800 pt-8">
                <span className="font-sans text-sm text-gray-400">© 2026 Corpnest, Madlogicstudio.</span>
            </div>


        </div>
    )
}

export default Footer