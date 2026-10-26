import Image from "next/image";
import { eyebrow, h2, lead } from "./ui";

export function ConfidenceSection() {
    return (
        <section id="about" className="w-full bg-muted">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-10 px-6 py-12 lg:grid-cols-[539px_1fr] lg:gap-[104px] lg:px-[70px] lg:pt-8 lg:pb-32">
                <div className="relative mx-auto h-[420px] w-full max-w-[540px] lg:mx-0 lg:h-[560px]">
                    <div className="absolute top-0 left-0 h-full w-[57.5%] overflow-hidden rounded-lg">
                        <Image
                            src="/images/v1.1/find-building.jpg"
                            alt="Residential high-rise against a blue sky"
                            fill
                            sizes="(min-width: 1024px) 311px, 60vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute right-0 bottom-0 h-[70.5%] w-[41%] overflow-hidden rounded-lg">
                        <Image
                            src="/images/v1.1/find-interior.jpg"
                            alt="Living room with grey sofa and wooden tables"
                            fill
                            sizes="(min-width: 1024px) 223px, 40vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="lg:pt-1">
                    <p className={eyebrow}>Looking for a home?</p>
                    <h2 className={`${h2} mt-8`}>
                        Find your next home with{" "}
                        <span className="text-brand">confidence!</span>
                    </h2>
                    <p className={`${lead} mt-14 max-w-md`}>
                        Renting should be exciting, not exhausting. Homigram helps you
                        discover verified homes, compare options with confidence, and move
                        into your next home faster.
                    </p>
                </div>
            </div>
        </section>
    );
}
