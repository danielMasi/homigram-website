"use client";

import { useState } from "react";

type Testimonial = {
    name: string;
    body: string;
    initials: string;
    color: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Daniel Masi",
        body: "The process was fast, transparent and stress-free. I highly recommend Homigram to anyone looking for their next home.",
        initials: "DM",
        color: "bg-emerald-200 text-emerald-800",
    },
    {
        name: "Sarah Kimani",
        body: "I found a great apartment within days. The verified listings gave me confidence to make decisions quickly.",
        initials: "SK",
        color: "bg-amber-200 text-amber-800",
    },
    {
        name: "Michael Otieno",
        body: "As a landlord I love how effortless renting has become. Tenant screening and rent collection are truly hands-off.",
        initials: "MO",
        color: "bg-sky-200 text-sky-800",
    },
    {
        name: "Amina Hussein",
        body: "Every listing I viewed was exactly as described. Homigram made moving to a new city feel simple.",
        initials: "AH",
        color: "bg-rose-200 text-rose-800",
    },
];

export function Testimonials() {
    const [start, setStart] = useState(0);
    const total = testimonials.length;

    const prev = () => setStart((s) => (s - 1 + total) % total);
    const next = () => setStart((s) => (s + 1) % total);

    const visible = [testimonials[start], testimonials[(start + 1) % total]];

    return (
        <section className="w-full bg-background">
            <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                        Testimonial
                    </p>
                    <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[0.02em] sm:text-5xl lg:text-[56px] lg:leading-[62px] xl:text-[64px] xl:leading-[70px]">
                        What our <span className="text-brand">customers</span> say
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75">
                        Real stories from real people who found their homes through
                        homigram.
                    </p>
                </div>

                <div className="mt-10 flex items-center gap-3 sm:gap-6">
                    <NavButton direction="prev" onClick={prev} />

                    <div className="grid flex-1 grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
                        {visible.map((t) => (
                            <TestimonialCard key={t.name} testimonial={t} />
                        ))}
                    </div>

                    <NavButton direction="next" onClick={next} />
                </div>

                {/* Dots indicator */}
                <div className="mt-8 flex items-center justify-center gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Show testimonial ${i + 1}`}
                            onClick={() => setStart(i)}
                            className={
                                i === start
                                    ? "h-2 w-6 rounded-full bg-brand transition-all"
                                    : "h-2 w-2 rounded-full bg-brand/25 transition-all hover:bg-brand/50"
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <article className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
            <QuoteIcon />
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                {testimonial.body}
            </p>
            <hr className="mt-6 border-border/70" />
            <div className="mt-4 flex items-center gap-3">
                <span
                    aria-hidden
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${testimonial.color}`}
                >
                    {testimonial.initials}
                </span>
                <p className="text-sm font-bold text-brand">{testimonial.name}</p>
            </div>
        </article>
    );
}

function NavButton({
    direction,
    onClick,
}: {
    direction: "prev" | "next";
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={direction === "prev" ? "Previous testimonial" : "Next testimonial"}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-brand-foreground sm:h-12 sm:w-12"
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
            >
                {direction === "prev" ? (
                    <path d="m15 6-6 6 6 6" />
                ) : (
                    <path d="m9 6 6 6-6 6" />
                )}
            </svg>
        </button>
    );
}

function QuoteIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7 text-brand"
            aria-hidden
        >
            <path d="M7 7h4v4H8.5c0 2 1 3 3 3v2c-3.5 0-5.5-2-5.5-5.5V7H7Zm9 0h4v4h-2.5c0 2 1 3 3 3v2c-3.5 0-5.5-2-5.5-5.5V7H16Z" />
        </svg>
    );
}
