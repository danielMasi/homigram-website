import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "./icons";
import { buttonPrimary, eyebrow, h2, lead } from "./ui";

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
        <section className="w-full overflow-hidden bg-background">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-[70px]">
                <div className="grid grid-cols-1 items-start gap-10 pt-12 lg:grid-cols-[463px_1fr] lg:gap-0 lg:pt-6">
                    <div className="lg:pt-12">
                        <p className={eyebrow}>How it works</p>
                        <h2 className={`${h2} mt-4`}>
                            How do we
                            <br />
                            <span className="text-brand">
                                accomplish
                                <br />
                                this?
                            </span>
                        </h2>
                        <Link href="#download" className={`${buttonPrimary} mt-10`}>
                            <PhoneIcon />
                            Download the app
                            <ArrowRightIcon />
                        </Link>
                    </div>

                    {/* Photo bleeds to the right edge of the page, as in the design. */}
                    <div className="relative aspect-[745/338] w-full lg:-mr-[70px] lg:w-[calc(100%+70px)]">
                        <Image
                            src="/images/v1.1/how-woman.jpg"
                            alt="Woman browsing rentals on her phone"
                            fill
                            sizes="(min-width: 1024px) 745px, 100vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                <ol className="grid grid-cols-1 gap-10 py-14 md:grid-cols-3 md:gap-6 lg:pt-6 lg:pb-[70px]">
                    {steps.map((step) => (
                        <li key={step.n} className="flex flex-col items-center text-center">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-base text-brand-foreground">
                                {step.n}
                            </span>
                            <h3 className="mt-5 text-lg font-semibold text-brand lg:text-xl">
                                {step.title}
                            </h3>
                            <p className={`${lead} mt-4 max-w-[340px]`}>{step.body}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
