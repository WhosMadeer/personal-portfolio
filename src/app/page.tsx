import { Education } from "@/components/home/education";
import { Experience } from "@/components/home/experience";
import { IntroCard } from "@/components/home/intro-card";
import { SkillDisplay } from "@/components/home/skills";
import Image from "next/image";

export default function Home() {
    return (
        <div className="grid place-content-center w-screen overflow-y-scroll gap-40 py-20">
            <div className="w-full grid grid-cols-2 gap-10 items-center justify-items-center h-screen">
                <IntroCard />
                <Image
                    src={"/Portrait.jpeg"}
                    alt="portrait"
                    width={400}
                    height={400}
                    className="shadow-xl rounded-xl"
                />
            </div>
            <div className="mx-10 grid gap-30">
                <Experience />
                <div className="grid grid-cols-3 gap-12">
                    <SkillDisplay />
                    <Education />
                </div>
            </div>
        </div>
    );
}
