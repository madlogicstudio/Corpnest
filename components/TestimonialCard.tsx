'use client'

import Image from "next/image"

type TestimonialCardProps = {
    social: string;
    image: string;
    name: string;
    text: string;
}

export const TestimonialCard = ({social, image, name, text}: TestimonialCardProps) => {
    return (
        <div className="flex flex-col items-start justify-center gap-3 p-6 bg-[var(--dark)] rounded-lg 
            text-gray-400 hover:text-white border border-gray-700 hover:border-gray-300 transition duration-300 ease-in-out cursor-pointer">
            
            <div className="flex flex-row items-center gap-3">
                <div className="flex flex-col items-center justify-center rounded-full relative">
                    <Image src={social} height={24} width={24} className="absolute top-0 left-0 rounded-full" alt="" />
                    <Image src={image} height={62} width={62} className="rounded-full" alt="" />
                </div>
                <span className="font-sans sm:text-lg text-md text-[var(--primary)]">
                    {name}
                </span>
            </div>
            
            <span className="font-sans text-md">
                {text}
            </span>
            
        </div>
    )
}
