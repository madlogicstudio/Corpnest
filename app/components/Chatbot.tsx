'use client'

import Image from "next/image"

export const Chatbot = () => {
    return (
        <div className="group fixed bottom-0 right-0 flex flex-col items-center p-3">

            <div className="w-46
                absolute bottom-22 right-4
                rounded-xl bg-white px-4 py-2
                text-sm text-gray-700 shadow-lg
                opacity-0 translate-y-2
                transition-all duration-200
                group-hover:opacity-100
                group-hover:translate-y-0
                pointer-events-none
            ">
                Hi! How can I help you?
            </div>

            <Image
                src="/images/Chatbot.png"
                className="cursor-pointer"
                height={80}
                width={80}
                alt="Chatbot"
            />

        </div>
    )
}