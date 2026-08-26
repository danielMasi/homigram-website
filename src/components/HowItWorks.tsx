import Image from "next/image";
import Link from "next/link";

const steps = [
    {
        n: 1,
        title: "We Verify all our listings",
        body: "So that you can browse homes you can trust with accurate information and quality photos.",
    },
    {
        n: 2,
        title: "Find the right fit",
        body: "Search by location, budget, and amenities that matter most to you.",
    },
    {
        n: 3,
        title: "Easy viewing requests",
        body: "Get to physically view any and all properties of your liking, no middle men involved.",
    },
];

export function HowItWorks() {
    return (
        <section className="w-full bg-background">
            <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                            How it works
                        </p>
                        <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[0.02em] sm:text-5xl lg:text-[56px] lg:leading-[62px] xl:text-[64px] xl:leading-[70px]">
                            How do we <br />
                            <span className="text-brand">accomplish this?</span>
                        </h2>
                        <Link
                            href="#download"
                            className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
                        >
                            <span aria-hidden>📱</span>
                            Download the app
                            <span aria-hidden>→</span>
                        </Link>
                    </div>

                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted shadow-sm">
                        <Image
                            src="/images/how-it-works.jpg"
                            alt="Person exploring rentals on a smartphone"
                            fill
                            sizes="(min-width: 1024px) 50vw, 90vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {steps.map((step) => (
                        <div key={step.n} className="flex flex-col items-center text-center">
                            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-semibold text-brand-foreground">
                                {step.n}
                            </div>
                            <h3 className="mb-2 text-base font-semibold text-brand">
                                {step.title}
                            </h3>
                            <p className="max-w-xs text-sm leading-relaxed text-foreground/70">
                                {step.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
