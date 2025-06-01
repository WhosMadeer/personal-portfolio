import { Project } from "@/types/project";
import Image from "next/image";

const Description = () => {
    return (
        <div>
            <div className="w-full relative flex flex-col justify-center p-4 text-center">
                <Image
                    src={"/ECE295/PCB.jpg"}
                    alt="PCB"
                    width={1053}
                    height={373}
                    className="object-fit rounded-xl shadow place-self-center"
                />
                <span>Final PCB for ECE295</span>
            </div>
            <div className="p-4">
                In January 2025, I participated in a course titled ECE295 -
                Hardware Design and Communication, where I collaborated in a
                team of three to design and implement a subsystem for a flexible
                radio transceiver (FLRTRX). Our task involved creating,
                designing, and building four essential circuit components: a
                limiter, an RX passive bandpass filter, a Gilbert Cell RX mixer,
                and a lowpass active filter. These components were developed to
                limit the input signals and effectively mix them to meet the
                operational requirements of the transceiver. Over the course of
                four months, our team embarked on a rigorous process of
                learning, researching, and refining potential designs for the
                subsystem.
                <div className="w-full relative flex flex-col justify-center p-4 text-center">
                    <Image
                        src={"/ECE295/BJT-Mixer.jpeg"}
                        alt="BJT Mixer"
                        width={4032}
                        height={3024}
                        className="object-fit w-1/2 place-self-center rounded-xl shadow"
                    />
                    <span>BJT Mixer from prototyping</span>
                </div>
                To validate our designs, we extensively utilized LTSpice to
                create circuit simulations and test output responses for each
                component, ensuring alignment with performance specifications.
                Once the designs were finalized, we transitioned to hands-on
                testing on breadboards, using diodes, capacitors, inductors,
                MOSFETs, and op-amps to evaluate real-world performance. Our
                work also encompassed the creation of a PCB layout using Altium
                Designer, where we successfully integrated over 50
                surface-mounted and through-hole components. The final subsystem
                was assembled through careful soldering of components onto the
                PCB. To further verify and optimize our design, we developed
                unit testing scripts in Python to simulate inputs and generate
                output plots, ensuring the subsystem met the requirements of the
                FLRTRX. This experience not only honed my technical skills in
                hardware design and circuit analysis but also strengthened my
                teamwork, problem-solving abilities, and understanding of
                electronic systems development.
            </div>
        </div>
    );
};

export const ECE295: Project = {
    title: "ECE295 - Hardware Design",
    location: "University of Toronto",
    date: "January 2025 - April 2025",
    Description: Description,
};
