import Image from "next/image";
import Link from "next/link";
import { h2, lead } from "./ui";

interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    body: string;
}

function InfoCard({ icon, title, body }: InfoCardProps) {
    return (
        <div className="rounded-md bg-card px-6 pt-2 pb-5 shadow-[0_6px_10px_rgba(0,0,0,0.22)]">
            <div className="-mt-0.5 mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand/20 text-brand shadow-md">
                {icon}
            </div>
            <h3 className="text-[17px] font-bold text-brand">{title}</h3>
            <p className="mt-1 text-sm leading-5 tracking-[0.05em] text-black">
                {body}
            </p>
            <Link
                href="#pricing"
                className="mt-4 inline-block text-[13px] font-semibold text-brand hover:text-brand-hover"
            >
                More Information
            </Link>
        </div>
    );
}

export function Hero() {
    return (
        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-6 pt-6 pb-16 xl:grid-cols-[640px_1fr] xl:gap-8 xl:px-[70px] xl:pt-8 xl:pb-10">
            <div>
                <h1 className={h2}>
                    Rent or List,
                    <br />
                    <span className="text-brand sm:whitespace-nowrap">
                        We handle the rest.
                    </span>
                </h1>

                <div className="mt-10 max-w-xl space-y-1">
                    <p className={lead}>
                        House hunting no longer has to be tiring, time-consuming, or
                        stressful. Discover the right properties, explore your options, and
                        find the right place to call home.
                    </p>
                    <p className={lead}>
                        List your property once and let us handle the rest. Homigram takes
                        care of the rental process while you maintain complete visibility
                        from anywhere.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-[240px_240px]">
                    <InfoCard
                        icon={<UserIcon />}
                        title="For Renters"
                        body="Find quality homes that suit your lifestyle and budget"
                    />
                    <InfoCard
                        icon={<HomeIcon />}
                        title="For Landlords"
                        body="List your property and we’ll take care of the management"
                    />
                </div>
            </div>

            {/* Hero visual: phone mockup and two property photos, taken from the Figma frame. */}
            <div className="flex items-start gap-1.5 xl:-mr-10 xl:mt-[28px]">
                <Image
                    src="/images/v1.1/hero-phone.jpg"
                    alt="Homigram app showing popular rentals in Nairobi"
                    width={237}
                    height={497}
                    priority
                    className="h-auto w-[42%] shrink-0 xl:w-[237px]"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-3.5 xl:w-[265px] xl:flex-none">
                    <Image
                        src="/images/v1.1/hero-building.jpg"
                        alt="Modern apartment building at dusk"
                        width={265}
                        height={271}
                        priority
                        className="h-auto w-full rounded-md"
                    />
                    <Image
                        src="/images/v1.1/hero-interior.jpg"
                        alt="Bright living room with city view"
                        width={265}
                        height={201}
                        className="h-auto w-full rounded-md"
                    />
                </div>
            </div>
        </section>
    );
}

const iconProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-[18px] w-[18px]",
    "aria-hidden": true,
};

function UserIcon() {
    return (
        <svg {...iconProps}>
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 20a7 7 0 0 1 14 0" />
        </svg>
    );
}

function HomeIcon() {
    return (
        <svg {...iconProps}>
            <path d="M4 11 12 4l8 7v9H4Z" />
            <path d="M10 20v-5h4v5" />
        </svg>
    );
}
