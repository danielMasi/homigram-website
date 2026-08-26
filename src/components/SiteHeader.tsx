import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { href: "/", label: "Home", active: true },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
];

export function SiteHeader() {
    return (
        <header className="w-full border-b border-border/60 bg-background">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/brand/HomiLogo.svg"
                        alt="Homigram logo"
                        width={40}
                        height={38}
                        priority
                        className="h-8 w-auto"
                    />
                    <span className="text-xl font-semibold tracking-tight">
                        homigram
                    </span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={
                                link.active
                                    ? "text-sm font-semibold text-foreground underline underline-offset-8 decoration-2"
                                    : "text-sm text-foreground/80 hover:text-foreground"
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="#get-started"
                    className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
                >
                    Get Started
                    <span aria-hidden>→</span>
                </Link>
            </div>
        </header>
    );
}
