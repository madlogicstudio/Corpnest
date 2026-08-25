'use client'

import Image from "next/image"

function Trusted() {

    const logos = [12, 189, 47, 83, 102, 156];

    return (
        <div className="w-full flex flex-col items-center justify-center sm:py-12 py-6 sm:px-0 md:px-3 px-3">

            <div className="max-w-[1280px] w-full h-auto flex flex-col items-start justify-start gap-6">

                <span className="font-sans sm:text-lg text-md text-[var(--primary)]">Trusted by fast-growing companies worldwide</span>

                <div className="w-full flex sm:flex-row flex-col items-center justify-between py-12 px-3 sm:gap-0 gap-6 bg-[var(--dark)] rounded-lg">
                    {logos.map((id) => (
                        <Image
                            key={id}
                            src={`https://fakelogo.com/logo/${id}.png`}
                            width={160}
                            height={80}
                            alt="Trusted company"
                            className="brightness-0 invert sm:opacity-70 sm:hover:opacity-100 opactiy-100 transition duration-300 ease-in-out cursor-pointer"
                        />
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Trusted