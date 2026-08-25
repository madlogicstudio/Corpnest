'use client'

type FeauteCardProps = {
    icon: React.ReactNode;
    title: string;
    text: string;
}

export const FeautreCard = ({icon, title, text} : FeauteCardProps) => {
    return (
        <div className="sm:min-w-[300px] w-full flex flex-col items-center justify-center p-6 gap-3 rounded-lg text-center bg-gray-700">
            <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                {icon}
            </div>
            <span className="font-sans sm:text-lg text-md text-[var(--primary)]">
                {title}
            </span>
            <span className="font-sans text-md ">
                {text}
            </span>
        </div>
    )
}
