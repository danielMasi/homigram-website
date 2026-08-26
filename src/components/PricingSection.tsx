import Link from "next/link";

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
        priceUnit: "management fee / of monthly rent",
        highlight:
            "A fee that's designed to help landlords maximize returns while we handle the day-to-day management.",
        features: [
            "Professional property valuation",
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
        <section className="w-full bg-background">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-[1.4fr_1fr] lg:gap-12 lg:px-10 lg:py-20">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {plans.map((plan) => (
                        <PricingCard key={plan.role} plan={plan} />
                    ))}
                </div>

                <div>
                    <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[0.02em] sm:text-5xl lg:text-[56px] lg:leading-[62px] xl:text-[64px] xl:leading-[70px]">
                        Simple, transparent{" "}
                        <span className="text-brand">pricing</span>
                    </h2>
                    <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/75">
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
    return (
        <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-lg">
            <h3 className="text-lg font-bold text-brand">{plan.role}</h3>
            <p className="mt-1 text-xs text-foreground/70">{plan.subtitle}</p>

            <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-brand">
                    {plan.price}
                </span>
                <span className="text-[11px] leading-tight text-foreground/60">
                    {plan.priceUnit}
                </span>
            </div>

            <p className="mt-3 rounded-lg bg-muted p-3 text-xs leading-relaxed text-foreground/75">
                {plan.highlight}
            </p>

            <ul className="mt-4 flex-1 space-y-2">
                {plan.features.map((feature) => (
                    <li
                        key={feature}
                        className="flex items-start gap-2 border-b border-border/60 pb-2 text-xs text-foreground/80 last:border-b-0"
                    >
                        <CheckIcon />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Link
                href="#get-started"
                className={
                    isPrimary
                        ? "mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
                        : "mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-brand bg-transparent px-4 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
                }
            >
                {plan.cta}
                <span aria-hidden>→</span>
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
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand"
            aria-hidden
        >
            <circle cx="12" cy="12" r="9" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
