import Image from "next/image";

export function ConfidenceSection() {
    return (
        <section className="w-full bg-muted">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
                <div className="relative h-125 w-full">
                    {/* Tall building on the left, full height */}
                    <div className="absolute left-0 top-0 h-full w-[54%] overflow-hidden rounded-2xl bg-card shadow-md">
                        <Image
                            src="/images/confidence-building.jpg"
                            alt="Residential high-rise against a blue sky"
                            fill
                            sizes="(min-width: 1024px) 28vw, 60vw"
                            className="object-cover"
                        />
                    </div>
                    {/* Interior next to it, bottom-aligned */}
                    <div className="absolute right-0 bottom-0 h-[78%] w-[44%] overflow-hidden rounded-2xl bg-card shadow-md">
                        <Image
                            src="/images/confidence-interior.jpg"
                            alt="Scandinavian living room with grey sofa"
                            fill
                            sizes="(min-width: 1024px) 22vw, 45vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                        Looking for a home?
                    </p>
                    <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[0.02em] sm:text-5xl lg:text-[56px] lg:leading-[62px] xl:text-[64px] xl:leading-[70px]">
                        Find your next home with{" "}
                        <span className="text-brand">confidence!</span>
                    </h2>
                    <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/75">
                        Renting should be exciting, not exhausting. Homigram helps you
                        discover verified homes, compare options with confidence, and move
                        into your next home faster.
                    </p>
                </div>
            </div>
        </section>
    );
}
