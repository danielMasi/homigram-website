import Image from "next/image";
import Link from "next/link";

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
];

const legalLinks = [
    { href: "#terms", label: "Terms of Use" },
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#legal", label: "Legal Notice" },
];

export function SiteFooter() {
    return (
        <footer className="w-full bg-neutral-900 text-white">
            <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
                    {/* Brand column */}
                    <div>
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/brand/HomiLogo.svg"
                                alt="Homigram logo"
                                width={32}
                                height={30}
                                className="h-7 w-auto"
                            />
                            <span className="text-lg font-bold text-brand">
                                homigram
                            </span>
                        </Link>

                        <p className="mt-4 max-w-xs text-sm font-semibold leading-relaxed">
                            The smartest way to find, list and manage rental properties
                        </p>

                        <ul className="mt-6 space-y-3 text-sm">
                            <ContactItem icon={<MailIcon />}>
                                support@homigram.co.ke
                            </ContactItem>
                            <ContactItem icon={<PhoneIcon />}>
                                +254 712 345 678
                            </ContactItem>
                            <ContactItem icon={<PinIcon />}>Nairobi, Kenya</ContactItem>
                        </ul>

                        <div className="mt-6 flex gap-3">
                            <SocialLink href="#" label="Facebook">
                                <FacebookIcon />
                            </SocialLink>
                            <SocialLink href="#" label="Instagram">
                                <InstagramIcon />
                            </SocialLink>
                            <SocialLink href="#" label="X (Twitter)">
                                <XIcon />
                            </SocialLink>
                            <SocialLink href="#" label="LinkedIn">
                                <LinkedInIcon />
                            </SocialLink>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:text-center">
                        <h4 className="text-lg font-bold text-brand">Quick Links</h4>
                        <ul className="mt-4 space-y-3 text-sm font-semibold">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white transition-colors hover:text-brand"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="md:text-right">
                        <h4 className="text-lg font-bold text-brand">Legal</h4>
                        <ul className="mt-4 space-y-3 text-sm font-semibold">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white transition-colors hover:text-brand"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function ContactItem({
    icon,
    children,
}: {
    icon: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <li className="flex items-center gap-3">
            <span className="text-brand">{icon}</span>
            <span className="font-semibold">{children}</span>
        </li>
    );
}

function SocialLink({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand/20 text-brand transition-colors hover:bg-brand hover:text-white"
        >
            {children}
        </Link>
    );
}

/* Icons */
function iconStroke() {
    return {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
        className: "h-5 w-5",
        "aria-hidden": true,
    };
}

function MailIcon() {
    return (
        <svg {...iconStroke()}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    );
}
function PhoneIcon() {
    return (
        <svg {...iconStroke()}>
            <path d="M4 5c0 9 6 15 15 15l2-4-5-2-2 2c-3-1-5-3-6-6l2-2-2-5-4 2Z" />
        </svg>
    );
}
function PinIcon() {
    return (
        <svg {...iconStroke()}>
            <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12Z" />
            <circle cx="12" cy="9" r="2.5" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
            <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8Z" />
        </svg>
    );
}
function InstagramIcon() {
    return (
        <svg {...iconStroke()} className="h-4 w-4">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
        </svg>
    );
}
function XIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-3.5 w-3.5">
            <path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l7-8L2 3h6l4 5 6-5Z" />
        </svg>
    );
}
function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
            <path d="M5 3.5A1.5 1.5 0 1 1 5 6.5 1.5 1.5 0 0 1 5 3.5ZM3.5 8h3v12h-3V8Zm5 0h3v1.7c.6-1 1.9-2 3.7-2 3 0 4.3 2 4.3 5V20h-3v-6c0-1.5-.5-2.5-2-2.5s-2.5 1-2.5 2.5V20h-3V8Z" />
        </svg>
    );
}
