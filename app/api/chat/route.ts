import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
    try {
        console.log("1. API route reached");

        const { message } = await req.json();

        console.log("2. Message received:", message);

        if (!message) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        console.log("3. Calling Gemini...");

        const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: `
                You are PipBot, the helpful chatbot for Corpnest.

                Your job is to help users understand and navigate the Corpnest platform.

                Rules:
                - Be friendly and concise.
                - Answer questions about Corpnest clearly.
                - If you don't know something about Corpnest, say you don't know.
                - Don't make up Corpnest features.
                - Don't claim to perform actions you cannot perform.
                - Keep responses relatively short.
                - Corpnest is Free for early access.
                - Launch date will be posted soon.

                User message:
                ${message}
            `,
        });

        console.log("4. Gemini responded:", response.text);

        return NextResponse.json({
            response: response.text,
        });

    } catch (error) {
        console.error("GEMINI ERROR:", error);

        return NextResponse.json(
            {
                error: "Gemini request failed",
                details:
                    error instanceof Error
                        ? error.message
                        : String(error),
            },
            { status: 500 }
        );
    }
}