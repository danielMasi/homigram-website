const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
};

export function ArrowRightIcon({ className = "h-3 w-7" }: { className?: string }) {
    return (
        <svg viewBox="0 0 28 12" strokeWidth={1.4} className={className} {...stroke}>
            <path d="M1 6h25M21 1l5 5-5 5" />
        </svg>
    );
}

export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" strokeWidth={1.6} className={className} {...stroke}>
            <rect x="7" y="2.5" width="10" height="19" rx="2" />
            <path d="M11 18.5h2" />
        </svg>
    );
}
