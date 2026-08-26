"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

const faqs: Faq[] = [
    {
        q: "How long until we deliver your product",
        a: "This platform was made specifically to make sure renting is easy, straight forward and transparent, to make everything easy for you.",
    },
    {
        q: "How do I create a homigram account?",
        a: "Sign up with your email or phone number and complete a short verification step. You'll be ready to browse listings or list a property in minutes.",
    },
    {
        q: "What fees do renters pay?",
        a: "Renters pay a one-time Ksh 50 fee to unlock the exact location of a verified rental. There are no subscriptions or hidden charges.",
    },
    {
        q: "How are listings verified?",
        a: "Every listing is confirmed by our team through documentation checks and on-site verification before it appears in search results.",
    },
    {
        q: "Can landlords manage multiple properties?",
        a: "Yes. Landlords can add and manage as many properties as they want from a single dashboard with full visibility on tenants and payments.",
    },
    {
        q: "What happens if there's a dispute?",
        a: "Our support team steps in to mediate any dispute between renters and landlords, backed by our terms of service and verified records.",
    },
    {
        q: "Is my payment secure?",
        a: "All payments run through PCI-compliant providers with encrypted transactions and clear receipts for every transaction on your account.",
    },
    {
        q: "How do I request a viewing?",
        a: "Tap 'Request Viewing' on any listing to send a message directly to the landlord. Confirmed viewings appear in your Messages tab.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="w-full bg-background">
            <div className="mx-auto w-full max-w-4xl px-6 py-14 lg:px-10 lg:py-20">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[0.02em] sm:text-5xl lg:text-[56px] lg:leading-[62px] xl:text-[64px] xl:leading-[70px]">
                        FAQ<span className="text-brand">s</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-foreground/75">
                        Find answers to the most common questions about our platform and
                        products.
                    </p>
                </div>

                <ul className="mt-10 space-y-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <li
                                key={faq.q + i}
                                className="overflow-hidden rounded-xl border border-border bg-card"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center gap-4 px-4 py-4 text-left"
                                >
                                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-brand">
                                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                                    </span>
                                    <span className="flex-1 text-sm font-bold text-foreground">
                                        {faq.q}
                                    </span>
                                    <ChevronIcon open={isOpen} />
                                </button>

                                {isOpen && (
                                    <div className="mx-4 mb-4 rounded-lg bg-muted px-4 py-4 text-sm leading-relaxed text-foreground/75">
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
                    ? "h-4 w-4 rotate-180 text-brand transition-transform"
                    : "h-4 w-4 text-brand/70 transition-transform"
            }
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}
