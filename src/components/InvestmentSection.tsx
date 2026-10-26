import Image from "next/image";
import { eyebrow, h2, lead } from "./ui";

export function InvestmentSection() {
    return (
        <section className="relative w-full overflow-hidden bg-muted">
            {/* Decorative dot patterns from the design */}
            <Image
                src="/brand/DotCube.svg"
                alt=""
                aria-hidden
                width={150}
                height={125}
                className="pointer-events-none absolute top-8 right-4 hidden select-none lg:block xl:right-[20px]"
            />
            <Image
                src="/brand/DotCube.svg"
                alt=""
                aria-hidden
                width={64}
                height={140}
                className="pointer-events-none absolute bottom-[100px] left-2 hidden h-[140px] w-16 object-cover object-left opacity-60 select-none xl:block"
            />

            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-10 px-6 py-12 lg:grid-cols-[584px_1fr] lg:gap-[45px] lg:px-[70px] lg:pt-[144px] lg:pb-[100px]">
                <div className="relative mx-auto h-[440px] w-full max-w-[460px] lg:mx-0 lg:h-[570px] lg:max-w-none">
                    <div className="absolute top-0 left-0 h-full w-[65%] overflow-hidden rounded-[30px]">
                        <Image
                            src="/images/v1.1/invest-building.jpg"
                            alt="Apartment building in bright sunlight"
                            fill
                            sizes="(min-width: 1024px) 380px, 65vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute right-0 bottom-0 h-[67%] w-[45%] overflow-hidden rounded-br-[30px] rounded-tr-lg">
                        <Image
                            src="/images/v1.1/invest-corridor.jpg"
                            alt="Bright apartment corridor"
                            fill
                            sizes="(min-width: 1024px) 265px, 45vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="lg:pt-1">
                    <p className={eyebrow}>Own a rental property?</p>
                    <h2 className={`${h2} mt-8`}>
                        Maximize Your
                        <br />
                        <span className="text-brand">Investment</span>
                    </h2>
                    <p className={`${lead} mt-14 max-w-[400px]`}>
                        Managing rental property shouldn&apos;t feel like a full-time job.
                        Homigram helps you attract quality tenants while we handle the
                        day-to-day operations.
                    </p>
                </div>
            </div>
        </section>
    );
}
