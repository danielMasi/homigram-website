import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "./icons";
import { buttonPrimary, eyebrow, h2 } from "./ui";

const steps = [
    {
        n: 1,
        title: "Quality tenant sourcing",
        body: "Reach more qualified renters and reduce vacancy periods.",
    },
    {
        n: 2,
        title: "Reliable Rent Collection",
        body: "Stay on top of payments with organized rent management.",
    },
    {
        n: 3,
        title: "Peace of Mind",
        body: "Spend less time managing your property and more time growing your investment.",
    },
];

export function HandleInvestment() {
    return (
        <section className="w-full bg-[#fbfcfe]">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-6 py-14 lg:grid-cols-[447px_1fr] lg:gap-0 lg:px-[70px] lg:pt-[18px] lg:pb-[50px]">
                <div>
                    <p className={eyebrow}>How we handle your</p>
                    <h2 className={`${h2} mt-8`}>
                        Investment
                        <br />
                        with <span className="text-brand">respect.</span>
                    </h2>

                    <ol className="mt-8 space-y-3">
                        {steps.map((step) => (
                            <li key={step.n} className="flex gap-4">
                                <span className="inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-brand text-sm text-brand-foreground">
                                    {step.n}
                                </span>
                                <div className="max-w-[245px] border-b border-brand/80 pb-2">
                                    <p className="text-lg font-bold leading-[30px] text-black">
                                        {step.title}
                                    </p>
                                    <p className="mt-1 text-[17px] leading-[19px] tracking-[0.06em] text-black">
                                        {step.body}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <Link href="#download" className={`${buttonPrimary} mt-8`}>
                        <PhoneIcon />
                        Download the app
                    </Link>

                    <p className="mt-9 flex items-center gap-2 text-base text-neutral-500">
                        <ShieldIcon />
                        Trusted by landlord. Built for performance.
                    </p>
                </div>

                {/* Layered composition: building with two framed photos on its right edge. */}
                <div className="relative mx-auto h-[620px] w-full max-w-[460px] lg:mx-0 lg:h-[792px] lg:max-w-[693px]">
                    <div className="absolute top-[90px] left-0 h-[calc(100%-90px)] w-[72%] overflow-hidden rounded-[28px] max-lg:top-[60px] max-lg:h-[calc(100%-60px)]">
                        <Image
                            src="/images/v1.1/handle-building.jpg"
                            alt="Modern apartment building with glass balconies"
                            fill
                            sizes="(min-width: 1024px) 498px, 70vw"
                            className="object-cover"
                        />
                    </div>

                    <FramedPhoto
                        src="/images/v1.1/handle-living.jpg"
                        alt="Modern living room interior"
                        className="top-0"
                    />
                    <FramedPhoto
                        src="/images/v1.1/handle-mortgage.jpg"
                        alt="Rental contract with a house model on a desk"
                        className="top-[62%] max-lg:top-[60%]"
                    />
                </div>
            </div>
        </section>
    );
}

interface FramedPhotoProps {
    src: string;
    alt: string;
    className: string;
}

function FramedPhoto({ src, alt, className }: FramedPhotoProps) {
    return (
        <div
            className={`absolute right-0 aspect-[292/222] w-[42%] rounded-[28px] bg-white p-2 shadow-lg ${className}`}
        >
            <div className="relative h-full w-full overflow-hidden rounded-[22px]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 276px, 40vw"
                    className="object-cover"
                />
            </div>
        </div>
    );
}

function ShieldIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-neutral-500"
            aria-hidden
        >
            <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6Z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
