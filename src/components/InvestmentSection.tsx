import Image from "next/image";

export function InvestmentSection() {
    return (
        <section className="relative w-full overflow-hidden bg-muted">
            {/* Decorative dot pattern in the top-right corner */}
            <Image
                src="/brand/DotCube.svg"
                alt=""
                aria-hidden
                width={140}
                height={140}
                className="pointer-events-none absolute right-8 top-10 select-none lg:right-16 lg:top-14"
            />

            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
                <div className="relative h-125 w-full">
                    {/* Large building on the left */}
                    <div className="absolute left-0 top-0 h-full w-[65%] overflow-hidden rounded-2xl bg-card shadow-md">
                        <Image
                            src="/images/investment-building.jpg"
                            alt="Apartment building exterior in bright sunlight"
                            fill
                            sizes="(min-width: 1024px) 32vw, 65vw"
                            className="object-cover"
                        />
                    </div>
                    {/* Interior overlaps the bottom-right of the building */}
                    <div className="absolute right-0 bottom-0 h-[52%] w-[48%] overflow-hidden rounded-2xl bg-card shadow-xl ring-4 ring-muted">
                        <Image
                            src="/images/investment-interior.jpg"
                            alt="Modern apartment hallway"
                            fill
                            sizes="(min-width: 1024px) 24vw, 48vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                        Own a rental property?
                    </p>
                    <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[0.02em] sm:text-5xl lg:text-[56px] lg:leading-[62px] xl:text-[64px] xl:leading-[70px]">
                        Maximize Your <br />
                        <span className="text-brand">Investment</span>
                    </h2>
                    <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/75">
                        Managing rental property shouldn&apos;t feel like a full-time job.
                        Homigram helps you attract quality tenants while we handle the
                        day-to-day operations.
                    </p>
                </div>
            </div>
        </section>
    );
}
