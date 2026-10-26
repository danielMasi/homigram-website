import Image from "next/image";
import { h2, lead } from "./ui";

type Stat = {
    label: string;
    value: string;
    icon: React.ReactNode;
};

const stats: Stat[] = [
    { label: "Apartments", value: "5+", icon: <BuildingIcon /> },
    { label: "Active Users", value: "150+", icon: <UsersIcon /> },
    { label: "Happy Customers", value: "98 %", icon: <SmileyIcon /> },
    { label: "Money Back Guarantee", value: "100 %", icon: <ShieldIcon /> },
];

export function WhyChoose() {
    return (
        <section className="relative w-full overflow-hidden bg-muted">
            {/* Decorative blobs */}
            <div
                aria-hidden
                className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand/20"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-24 bottom-8 h-64 w-64 rounded-full bg-brand/10"
            />

            {/* Dot pattern top-right */}
            <Image
                src="/brand/DotCube.svg"
                alt=""
                aria-hidden
                width={120}
                height={120}
                className="pointer-events-none absolute right-8 top-8 select-none lg:right-16 lg:top-12"
            />

            <div className="relative mx-auto w-full max-w-[1210px] px-6 py-14 text-center lg:px-[35px] lg:pt-8 lg:pb-[100px]">
                <h2 className={h2}>
                    Why choose <span className="text-brand">homigram?</span>
                </h2>
                <p className={`${lead} mx-auto mt-8 max-w-4xl`}>
                    We make renting easy, transparent and reliable. Everything you need
                    all in one place.
                </p>

                <div className="relative mt-16 grid grid-cols-2 gap-8 rounded-[30px] bg-dark p-8 shadow-xl md:grid-cols-4 md:gap-6 md:px-12 md:pt-12 md:pb-24">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="inline-flex h-[76px] w-[76px] items-center justify-center rounded-full bg-brand/20 text-brand [&_svg]:h-9 [&_svg]:w-9">
                                {stat.icon}
                            </div>
                            <p className="mt-8 text-3xl font-semibold tracking-[0.08em] text-white sm:text-[44px] sm:leading-none">
                                {stat.value}
                            </p>
                            <p className="mt-4 text-sm font-semibold tracking-[0.06em] text-white sm:text-base">
                                {stat.label}
                            </p>
                            <span
                                aria-hidden
                                className="mt-5 h-0.5 w-16 rounded-full bg-brand"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* Inline icons */
function BuildingIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
        >
            <path d="M4 20V9l5-3v14" />
            <path d="M9 20V6l6-4 6 4v14" />
            <path d="M4 20h17" />
            <path d="M12 8h2M12 12h2M12 16h2" />
        </svg>
    );
}
function UsersIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
        >
            <circle cx="9" cy="8" r="3" />
            <circle cx="17" cy="9" r="2.5" />
            <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
            <path d="M14 20a5 5 0 0 1 8-4" />
        </svg>
    );
}
function SmileyIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <circle cx="9" cy="10" r=".8" fill="currentColor" />
            <circle cx="15" cy="10" r=".8" fill="currentColor" />
        </svg>
    );
}
function ShieldIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
        >
            <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6Z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
