'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

export const Chatbot = () => {

    const [showBubble, setShowBubble] = useState(false);

    const chatBotBubbles = [
        "Hi! I'm Pip, the CorpNest chatbot.",
        "Need some help? Just click me!",
        "I'm here if you need anything.",
        "Got a question? Pip is here to help!",
        "Need help navigating CorpNest?",
        "Click me and let's get started!",
        "How can I help you today?",
    ];

    const [currentBubble, setCurrentBubble] = useState("");

    useEffect(() => {
        const showRandomBubble = () => {
            const randomIndex = Math.floor(
                Math.random() * chatBotBubbles.length
            );

            setCurrentBubble(chatBotBubbles[randomIndex]);
            setShowBubble(true);

            setTimeout(() => {
                setShowBubble(false);
            }, 6000);
        };

        const interval = setInterval(showRandomBubble, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="group fixed bottom-0 right-0 flex flex-col items-center p-3">

            {showBubble && (
                <div className="
                    absolute bottom-22 right-4 w-46
                    rounded-xl bg-white px-4 py-2
                    text-sm text-gray-700 shadow-lg
                    pointer-events-none
                ">
                    {currentBubble}
                </div>
            )}

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