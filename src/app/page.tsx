import { ResumeCard } from "@/components/composite/resume-card";
import { CoreValues } from "@/components/home/core-values";
import { Education } from "@/components/home/education";
import { Experience } from "@/components/home/experience";
import { IntroCard } from "@/components/home/intro-card";
import { SkillDisplay } from "@/components/home/skills";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col place-content-center overflow-y-scroll gap-40 py-20 max-w-full overflow-x-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center md:h-screen">
                <div className="min-h-fit">
                    <IntroCard />
                </div>

                <div className="flex flex-col gap-2 min-h-fit">
                    <Image
                        src={"/Portrait.jpeg"}
                        alt="portrait"
                        width={799}
                        height={1424}
                        className="shadow-xl rounded-xl w-fit aspect-auto max-w-full object-contain h-auto"
                    />
                    <ResumeCard />
                </div>
            </div>
            <div className="mx-5 lg:mx-10 grid gap-35">
                <Experience />
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
                    <SkillDisplay />
                    <Education />

                    <CoreValues />
                </div>
            </div>
        </div>
    );
}
