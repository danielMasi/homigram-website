import Image from "next/image";
import Link from "next/link";

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
        <section className="w-full bg-background">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                        How we handle your
                    </p>
                    <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[0.02em] sm:text-5xl lg:text-[56px] lg:leading-[62px] xl:text-[64px] xl:leading-[70px]">
                        Investment with <span className="text-brand">respect.</span>
                    </h2>

                    <ol className="mt-8 space-y-5">
                        {steps.map((step) => (
                            <li key={step.n} className="flex gap-3">
                                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-[11px] font-semibold text-brand-foreground">
                                    {step.n}
                                </span>
                                <div className="max-w-xs border-b border-brand/70 pb-3">
                                    <p className="text-sm font-bold text-foreground">
                                        {step.title}
                                    </p>
                                    <p className="mt-1 text-xs leading-relaxed text-foreground/70">
                                        {step.body}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <Link
                        href="#download"
                        className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
                    >
                        <span aria-hidden>📱</span>
                        Download the app
                        <span aria-hidden>→</span>
                    </Link>

                    <p className="mt-4 flex items-center gap-2 text-xs text-foreground/60">
                        <ShieldIcon />
                        Trusted by landlords. Built for performance.
                    </p>
                </div>

                {/* Right column — layered composition */}
                <div className="relative h-140 w-full">
                    {/* Main building image, centered */}
                    <div className="absolute inset-y-0 left-4 right-16 overflow-hidden rounded-2xl bg-card shadow-md">
                        <Image
                            src="/images/handle-building.jpg"
                            alt="Modern apartment building with glass balconies"
                            fill
                            sizes="(min-width: 1024px) 40vw, 90vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Floating living-room card, top-right */}
                    <div className="absolute right-0 top-4 h-[32%] w-[52%] overflow-hidden rounded-2xl bg-card p-1.5 shadow-xl ring-1 ring-border">
                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                            <Image
                                src="/images/handle-livingroom.jpg"
                                alt="Modern living room interior"
                                fill
                                sizes="(min-width: 1024px) 22vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Floating documents card, bottom-right */}
                    <div className="absolute right-0 bottom-6 h-[32%] w-[52%] overflow-hidden rounded-2xl bg-card p-1.5 shadow-xl ring-1 ring-border">
                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                            <Image
                                src="/images/handle-mortgage.jpg"
                                alt="Rental contract with keys and house model"
                                fill
                                sizes="(min-width: 1024px) 22vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ShieldIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-brand"
        >
            <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6Z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
