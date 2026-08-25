'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import { X, Circle, SendHorizonal } from "lucide-react"

export const Chatbot = () => {

    const [showBubble, setShowBubble] = useState(false);
    const [openChatbot, setOpenChatbot] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<
        { role: "user" | "bot"; text: string }[]
    >([]);
    const [loading, setLoading] = useState(false);

    const chatBotBubbles = [
        "Hi! I'm Pip, the Corpnest chatbot.",
        "Need some help? Just click me!",
        "I'm here if you need anything.",
        "Got a question? Pip is here to help!",
        "Need help navigating Corpnest?",
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

    const sendMessage = async () => {
        
        if (!message.trim() || loading) return;

        const userMessage = message.trim();

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                text: userMessage,
            },
        ]);

        setMessage("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: userMessage,
                }),
            });

            const text = await res.text();

            console.log("STATUS:", res.status);
            console.log("RESPONSE:", text);

            if (!res.ok) {
                return;
            }

            const data = JSON.parse(text);

            setMessages((prev) => [
                ...prev,
                {
                    role: "bot",
                    text: data.response,
                },
            ]);

        } catch (error) {
            console.error("CHAT ERROR:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
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
                    onClick={() => setOpenChatbot(true)}
                />

            </div>

            {openChatbot && <div className="sm:h-auto h-[100dvh] sm:w-[480px] w-full fixed sm:top-6 top-0 sm:right-3 right-0 
                flex flex-col items-center justify-start rounded-lg z-2 p-3 bg-[rgba(0,0,0,0.3)]">

                <div className="w-full flex flex-row items-center p-3 bg-[var(--background)] rounded-t-lg">

                    <div className="w-full flex flex-row items-center gap-3">

                        <Image src="/images/Chatbot.png" height={52} width={52} alt=""  />

                        <div className="flex flex-col">

                            <span className="font-sans text-md font-semibold text-[var(--primary)]">PipBot</span>

                            <div className="flex flex-row items-center gap-2">
                                <Circle className="ml-auto h-2 w-2 text-green-500 bg-green-500 rounded-full cursor-pointer" />
                                <span className="font-sans text-xs font-semibold text-gray-400">Online now</span>
                            </div>
                            
                        </div>
                    
                    </div>

                    <X className="ml-auto h-6 w-6 cursor-pointer" onClick={() => setOpenChatbot(false)} />

                </div>

                <div className="sm:h-full min-h-[85vh] w-full bg-gray-700 flex flex-col rounded-b-lg">

                    <div className="flex-1 w-full overflow-y-auto p-3 flex flex-col gap-3">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`max-w-[80%] rounded-xl px-4 py-2 text-sm ${
                                    msg.role === "user"
                                        ? "ml-auto bg-[var(--dark)] text-white"
                                        : "mr-auto bg-white text-gray-700"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}

                        {loading && (
                            <div className="mr-auto rounded-xl bg-white px-4 py-2 text-sm text-gray-500">
                                Pip is typing...
                            </div>
                        )}
                    </div>

                    <div className="flex flex-row items-center border bg-white rounded-b-lg p-1">

                        <input
                            type="text"
                            placeholder="Ask about Corpnest..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    sendMessage();
                                }
                            }}
                            className="outline-none border-none p-3 text-sm text-gray-700 flex-1"
                        />

                        <div className="ml-auto bg-[var(--dark)] rounded-full cursor-pointer p-3">

                            <SendHorizonal className=" text-[var(--primary)] h-4 w-4" 
                            onClick={() => sendMessage()} />

                        </div>

                    </div>

                </div>

            </div>}
        </>
    )
}