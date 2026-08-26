import Image from "next/image";
import Link from "next/link";

function InfoCard({
    icon,
    title,
    body,
}: {
    icon: React.ReactNode;
    title: string;
    body: string;
}) {
    return (
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-brand">
                {icon}
            </div>
            <h3 className="mb-1 text-sm font-semibold text-brand">{title}</h3>
            <p className="mb-3 text-xs leading-relaxed text-foreground/70">{body}</p>
            <Link
                href="#more"
                className="text-xs font-semibold text-brand hover:text-brand-hover"
            >
                More Information
            </Link>
        </div>
    );
}

export function Hero() {
    return (
        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
            <div>
                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[0.02em] sm:text-5xl lg:text-[56px] lg:leading-[62px] xl:text-[64px] xl:leading-[70px]">
                    Rent or List,
                    <br />
                    <span className="whitespace-nowrap text-brand">
                        We handle the rest.
                    </span>
                </h1>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/75">
                    <p>
                        House hunting no longer has to be tiring, time-consuming, or
                        stressful. Discover the right properties, explore your options, and
                        find the right place to call home.
                    </p>
                    <p>
                        List your property once and let us handle the rest. Homigram takes
                        care of the rental process while you maintain complete visibility
                        from anywhere.
                    </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <InfoCard
                        icon={<span aria-hidden>👤</span>}
                        title="For Renters"
                        body="Find quality homes that suit your lifestyle and budget"
                    />
                    <InfoCard
                        icon={<span aria-hidden>🏠</span>}
                        title="For Landlords"
                        body="List your property and we'll take care of the management"
                    />
                </div>
            </div>

            {/* Hero visual — phone mockup + two property image slots + floating card. Swap placeholders for <Image> later. */}
            <div className="relative w-full">
                <div className="grid h-full grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] gap-3">
                    <PhoneMockup />
                    <div className="flex flex-col gap-4">
                        <div className="relative flex-[1.4] overflow-hidden rounded-2xl bg-muted shadow-sm">
                            <Image
                                src="/images/hero-building.jpg"
                                alt="Modern apartment building exterior"
                                fill
                                sizes="(min-width: 1024px) 30vw, 90vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="relative flex-1 overflow-hidden rounded-2xl bg-muted shadow-sm">
                            <Image
                                src="/images/hero-interior.jpg"
                                alt="Modern living room interior"
                                fill
                                sizes="(min-width: 1024px) 30vw, 90vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <FloatingManageCard />
            </div>
        </section>
    );
}

function PhoneMockup() {
    const listings = [
        { img: "/images/listing-1.jpg", title: "Modern 2BR Apartment", loc: "Kilimani, Nairobi", price: "KES 65,000" },
        { img: "/images/listing-2.jpg", title: "Cozy Studio Apartment", loc: "Westlands, Nairobi", price: "KES 45,000" },
        { img: "/images/listing-3.jpg", title: "3BR Apartment", loc: "Lavington, Nairobi", price: "KES 120,000" },
    ];

    return (
        <div className="relative mx-auto w-full max-w-56 -rotate-3">
            {/* Physical side buttons — sit on top of the bezel, rotate with the phone */}
            <span className="absolute left-0 top-[14%] z-30 h-4 w-1 -translate-x-1/2 rounded-l-sm bg-neutral-700" />
            <span className="absolute left-0 top-[22%] z-30 h-7 w-1 -translate-x-1/2 rounded-l-sm bg-neutral-700" />
            <span className="absolute left-0 top-[32%] z-30 h-7 w-1 -translate-x-1/2 rounded-l-sm bg-neutral-700" />
            <span className="absolute right-0 top-[24%] z-30 h-9 w-1 translate-x-1/2 rounded-r-sm bg-neutral-700" />

            <div className="relative aspect-10/20 w-full overflow-hidden rounded-4xl border-10 border-neutral-900 bg-white shadow-2xl ring-1 ring-neutral-700/40">
                {/* Dynamic island */}
                <div className="absolute left-1/2 top-1.5 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-neutral-900" />

                {/* Status bar */}
                <div className="relative flex items-center justify-between px-5 pt-2.5 text-[10px] font-semibold text-neutral-900">
                    <span>9:41</span>
                    <span className="flex items-center gap-1">
                        <SignalIcon />
                        <WifiIcon />
                        <BatteryIcon />
                    </span>
                </div>

                {/* Screen content */}
                <div className="flex flex-col gap-2.5 px-4 pt-4 pb-16">
                    <div>
                        <p className="text-[10px] text-foreground/60">Welcome Home 👋</p>
                        <h4 className="mt-0.5 text-base font-bold leading-tight text-neutral-900">
                            Find a place
                            <br />
                            you&apos;ll love.
                        </h4>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 shadow-sm">
                        <SearchIcon />
                        <span className="text-[9px] text-foreground/50">
                            Search by location or property name
                        </span>
                    </div>

                    <div className="flex gap-1.5">
                        <Chip icon={<PinIcon />} label="Location" />
                        <Chip icon={<TagIcon />} label="Rent" />
                        <Chip icon={<SlidersIcon />} label="Filters" />
                    </div>

                    <div className="mt-0.5 flex items-center justify-between">
                        <p className="text-xs font-bold text-neutral-900">Popular Rentals</p>
                        <p className="text-[9px] font-semibold text-brand">See all</p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        {listings.map((l) => (
                            <div
                                key={l.title}
                                className="flex items-center gap-2 rounded-lg border border-border bg-white p-1.5"
                            >
                                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-md">
                                    <Image
                                        src={l.img}
                                        alt={l.title}
                                        fill
                                        sizes="44px"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-[9px] font-bold text-neutral-900">
                                        {l.title}
                                    </p>
                                    <p className="truncate text-[8px] text-foreground/60">
                                        {l.loc}
                                    </p>
                                    <p className="mt-0.5 text-[9px] font-bold text-brand">
                                        {l.price}{" "}
                                        <span className="font-normal text-foreground/50">
                                            / month
                                        </span>
                                    </p>
                                </div>
                                <HeartIcon className="text-foreground/40" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom nav */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-around border-t border-border bg-white px-3 pt-2 pb-3">
                    <NavItem icon={<HomeIcon />} label="Home" active />
                    <NavItem icon={<HeartIcon />} label="Saved" />
                    <NavItem icon={<MessageIcon />} label="Messages" />
                    <NavItem icon={<UserIcon />} label="Profile" />
                </div>
            </div>
        </div>
    );
}

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div className="flex flex-1 items-center justify-center gap-1 rounded-full border border-border bg-white px-2 py-1 text-[8px] font-medium text-neutral-800">
            {icon}
            {label}
            <span className="text-foreground/50">▾</span>
        </div>
    );
}

function NavItem({
    icon,
    label,
    active = false,
}: {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}) {
    return (
        <div
            className={
                active
                    ? "flex flex-col items-center gap-0.5 text-brand"
                    : "flex flex-col items-center gap-0.5 text-foreground/50"
            }
        >
            <span
                className={
                    active
                        ? "inline-flex h-5 w-5 items-center justify-center rounded-md bg-brand text-brand-foreground"
                        : "inline-flex h-5 w-5 items-center justify-center"
                }
            >
                {icon}
            </span>
            <span className="text-[8px] font-semibold">{label}</span>
        </div>
    );
}

/* Tiny inline SVG icons (12–14px) */
function iconProps(extra = "") {
    return {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
        className: `h-3 w-3 ${extra}`.trim(),
    };
}
function SearchIcon() {
    return (
        <svg {...iconProps("text-foreground/50")}>
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
        </svg>
    );
}
function PinIcon() {
    return (
        <svg {...iconProps("text-brand")}>
            <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12Z" />
            <circle cx="12" cy="9" r="2.5" />
        </svg>
    );
}
function TagIcon() {
    return (
        <svg {...iconProps("text-brand")}>
            <path d="M20 12 12 20l-8-8V4h8Z" />
            <circle cx="8" cy="8" r="1.2" />
        </svg>
    );
}
function SlidersIcon() {
    return (
        <svg {...iconProps("text-brand")}>
            <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" />
            <circle cx="14" cy="6" r="1.5" />
            <circle cx="10" cy="12" r="1.5" />
            <circle cx="18" cy="18" r="1.5" />
        </svg>
    );
}
function HeartIcon({ className = "" }: { className?: string }) {
    return (
        <svg {...iconProps(className)}>
            <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
        </svg>
    );
}
function HomeIcon() {
    return (
        <svg {...iconProps()}>
            <path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1Z" />
        </svg>
    );
}
function MessageIcon() {
    return (
        <svg {...iconProps()}>
            <path d="M4 5h16v11H8l-4 4Z" />
        </svg>
    );
}
function UserIcon() {
    return (
        <svg {...iconProps()}>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20a8 8 0 0 1 16 0" />
        </svg>
    );
}
function SignalIcon() {
    return (
        <svg viewBox="0 0 16 12" fill="currentColor" className="h-2.5 w-3">
            <rect x="0" y="8" width="2.5" height="4" rx="0.5" />
            <rect x="4" y="6" width="2.5" height="6" rx="0.5" />
            <rect x="8" y="3" width="2.5" height="9" rx="0.5" />
            <rect x="12" y="0" width="2.5" height="12" rx="0.5" />
        </svg>
    );
}
function WifiIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-2.5 w-3">
            <path d="M12 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-5-6.5a7 7 0 0 1 10 0l-1.5 1.5a5 5 0 0 0-7 0Zm-3-3a11 11 0 0 1 16 0l-1.5 1.5a9 9 0 0 0-13 0Z" />
        </svg>
    );
}
function BatteryIcon() {
    return (
        <svg viewBox="0 0 26 12" fill="none" className="h-2.5 w-5">
            <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="currentColor" />
            <rect x="2" y="2" width="18" height="8" rx="1.5" fill="currentColor" />
            <rect x="23.5" y="4" width="2" height="4" rx="1" fill="currentColor" />
        </svg>
    );
}

function FloatingManageCard() {
    return (
        <div className="absolute left-1/2 top-1/2 w-64 -translate-y-1/2 rounded-xl bg-card p-5 shadow-xl ring-1 ring-border">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-brand">
                <span aria-hidden>🏠</span>
            </div>
            <h3 className="mb-1 text-sm font-semibold">List. Relax. We Manage.</h3>
            <p className="mb-3 text-xs leading-relaxed text-foreground/70">
                We handle tenant screening, rent collection, maintenance and more.
            </p>
            <Link
                href="#learn-more"
                className="text-xs font-semibold text-brand hover:text-brand-hover"
            >
                Learn more →
            </Link>
        </div>
    );
}
