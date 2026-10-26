"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";
import { h2, lead } from "./ui";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="w-full bg-background">
            <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-[70px] lg:pt-12 lg:pb-10">
                <div className="text-center">
                    <h2 className={h2}>
                        FAQ<span className="text-brand">s</span>
                    </h2>
                    <p className={`${lead} mx-auto mt-14 max-w-3xl`}>
                        Find answers to the most common questions about our platform and
                        products.
                    </p>
                </div>

                <ul className="mt-10 space-y-1.5">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <li
                                key={faq.q + i}
                                className="overflow-hidden rounded-md border border-neutral-200 bg-card"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center gap-4 px-4 py-[18px] text-left"
                                >
                                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dcebdc] text-brand ring-1 ring-brand/20">
                                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                                    </span>
                                    <span className="flex-1 text-base font-bold tracking-[0.06em] text-black">
                                        {faq.q}
                                    </span>
                                    <ChevronIcon open={isOpen} />
                                </button>

                                {isOpen && (
                                    <div className="border-t border-neutral-200 bg-[#e3ede3] px-7 py-6 text-base tracking-[0.04em] text-black">
                                        {faq.a}
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

function iconProps() {
    return {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
        className: "h-4 w-4",
        "aria-hidden": true,
    };
}

function PlusIcon() {
    return (
        <svg {...iconProps()}>
            <path d="M12 5v14M5 12h14" />
        </svg>
    );
}

function MinusIcon() {
    return (
        <svg {...iconProps()}>
            <path d="M5 12h14" />
        </svg>
    );
}

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className={
                open
                    ? "h-6 w-6 rotate-180 text-brand transition-transform"
                    : "h-6 w-6 text-brand transition-transform"
            }
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}
