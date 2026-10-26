import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";
import { h2, lead } from "./ui";

type Plan = {
    role: string;
    subtitle: string;
    price: string;
    priceUnit: string;
    highlight: string;
    features: string[];
    cta: string;
    variant: "primary" | "outline";
};

const plans: Plan[] = [
    {
        role: "Landlords",
        subtitle: "Maximize returns with ease",
        price: "5%",
        priceUnit: "management fee|of monthly rent",
        highlight:
            "A fee that's designed to help landlords maximize returns while we handle the day-to-day management.",
        features: [
            "Professional property listing",
            "Tenant sourcing & screening",
            "Rent collection",
            "Maintenance coordination",
            "Tenant communication",
            "Occupancy support",
            "Owner updates & reporting",
        ],
        cta: "Get Started",
        variant: "primary",
    },
    {
        role: "Renters",
        subtitle: "Find homes you'll love",
        price: "Ksh 50",
        priceUnit: "per property location",
        highlight:
            "Unlock the exact location of any verified rental for just Ksh 50.",
        features: [
            "Verified listing and location",
            "Exact property location",
            "One-time payment",
            "No subscription",
        ],
        cta: "Unlock Location",
        variant: "outline",
    },
];

export function PricingSection() {
    return (
        <section id="pricing" className="relative w-full overflow-hidden bg-[#f7f7f6]">
            {/* Faded, desaturated sofa photo behind the plans, as in the design */}
            <Image
                src="/images/v1.1/find-interior.jpg"
                alt=""
                aria-hidden
                fill
                sizes="100vw"
                className="pointer-events-none object-cover opacity-15 grayscale"
            />

            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 px-6 py-14 lg:grid-cols-[378px_378px_1fr] lg:gap-[18px] lg:px-[38px] lg:pt-[80px] lg:pb-[90px]">
                {plans.map((plan) => (
                    <PricingCard key={plan.role} plan={plan} />
                ))}

                <div className="lg:pt-0 lg:pl-3">
                    <h2 className={h2}>
                        Simple,
                        <br />
                        transparent
                        <br />
                        <span className="text-brand">pricing</span>
                    </h2>
                    <p className={`${lead} mt-[100px] max-w-[330px] font-semibold`}>
                        Choose the plan that best fits your rhythm. No hidden fees, no
                        long-term contracts.
                    </p>
                </div>
            </div>
        </section>
    );
}

function PricingCard({ plan }: { plan: Plan }) {
    const isPrimary = plan.variant === "primary";
    const [unitTop, unitBottom] = plan.priceUnit.split("|");
    return (
        <div className="flex min-h-[600px] flex-col rounded-[28px] bg-card px-[22px] pt-12 pb-9 shadow-[0_6px_8px_rgba(0,0,0,0.28)]">
            <h3 className="text-xl font-semibold text-brand">{plan.role}</h3>
            <p className="mt-2 text-[17px] tracking-[0.06em] text-black">
                {plan.subtitle}
            </p>
            <hr className="mt-5 border-neutral-200" />

            <div className="mt-6 flex items-center gap-3">
                <span className="text-[42px] leading-none font-extrabold whitespace-nowrap text-brand">
                    {plan.price}
                </span>
                <span className="text-[15px] leading-tight font-bold text-black">
                    {unitTop}
                    {unitBottom && (
                        <span className="block text-[13px] font-normal">{unitBottom}</span>
                    )}
                </span>
            </div>

            <p className="mt-4 rounded-lg bg-muted px-2 py-3 text-[17px] leading-[35px] tracking-[0.06em] text-black">
                {plan.highlight}
            </p>

            <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                    <li
                        key={feature}
                        className="flex items-start gap-3 border-b border-neutral-200 pb-2 text-base tracking-[0.06em] text-black last:border-b-0"
                    >
                        <CheckIcon />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Link
                href="#download"
                className={
                    isPrimary
                        ? "mt-6 flex items-center justify-between rounded-md bg-brand px-12 py-2.5 text-base font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
                        : "mt-6 flex items-center justify-between rounded-md border border-brand bg-transparent px-12 py-2.5 text-base font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
                }
            >
                <span className="flex-1 text-center">{plan.cta}</span>
                <ArrowRightIcon />
            </Link>
        </div>
    );
}

function CheckIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 h-5 w-5 shrink-0 text-brand"
            aria-hidden
        >
            <circle cx="12" cy="12" r="9" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
