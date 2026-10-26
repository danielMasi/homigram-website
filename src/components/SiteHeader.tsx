import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";

const navLinks = [
    { href: "/", label: "Home", active: true },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
];

export function SiteHeader() {
    return (
        <header className="w-full bg-background">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-[70px] lg:pt-11 lg:pb-8">
                <Link href="/" className="flex items-center gap-2.5">
                    <Image
                        src="/brand/HomiLogo.svg"
                        alt="Homigram logo"
                        width={40}
                        height={38}
                        priority
                        className="h-9 w-auto"
                    />
                    <span className="text-xl tracking-tight text-neutral-900 sm:text-[26px]">
                        homigram
                    </span>
                </Link>

                <nav className="hidden items-center gap-12 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={
                                link.active
                                    ? "text-base font-semibold text-brand underline decoration-2 underline-offset-4"
                                    : "text-base text-foreground transition-colors hover:text-brand"
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="#pricing"
                    className="inline-flex items-center gap-3 rounded-md bg-brand px-4 py-2.5 sm:w-[200px] sm:justify-between sm:px-7 text-base font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
                >
                    Get Started
                    <ArrowRightIcon />
                </Link>
            </div>
        </header>
    );
}
