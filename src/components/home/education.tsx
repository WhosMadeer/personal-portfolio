import { ReactNode } from "react";
import { Dot } from "../composite/dot";
import { Separator } from "../ui/separator";

export function Education() {
    return (
        <div className="grid gap-8">
            <h1 className="text-4xl font-bold">Education</h1>
            <div className="grid gap-4">
                <TimelineDetails
                    index={"01"}
                    school="University of Toronto, Toronto, ON"
                    date="September 2023 - April 2028 (Present)"
                    program="Bachelor of Applied Science and Engineering - Computer Engineering + PEY CO-OP"
                >
                    <span className="font-semibold">Relevant Courses: </span>
                    Fundamentals of OOP (C++), Fundamentals of Computer
                    Programming (C), Digital Systems, Introductory Electronics,
                    Circuit Analysis, Computer Organization (RISC V Assembly and
                    C), Hardware Design and Communication
                </TimelineDetails>
                <TimelineDetails
                    index={"02"}
                    school="Western Technical Commercial School"
                    date="September 2019 - June 2023"
                    program="Ontario Secondary School Diploma + Robotics and Informational Technology SHSM Certification"
                ></TimelineDetails>
            </div>
        </div>
    );
}

interface TimelineDetailsProps extends EducationDetailsProps {
    index: string | ReactNode;
}

const TimelineDetails = ({
    index,
    school,
    date,
    program,
    children,
}: TimelineDetailsProps) => {
    return (
        <div className="flex gap-6">
            <div className="flex flex-col items-center gap-2">
                <Dot>{index}</Dot>
                <Separator
                    orientation="vertical"
                    className="!h-[calc(100%-0.5rem-0.5rem-2.5rem)]"
                />
            </div>
            <EducationDetails school={school} date={date} program={program}>
                {children}
            </EducationDetails>
        </div>
    );
};

interface EducationDetailsProps {
    school: string;
    date: string;
    program: string;
    children?: ReactNode;
}

const EducationDetails = ({
    school,
    date,
    program,
    children,
}: EducationDetailsProps) => {
    return (
        <div className="grid gap-2 flex-auto">
            <header className="grid gap-2">
                <div className="grid">
                    <h1 className="font-semibold text-lg items-baseline flex-auto">
                        {school}
                    </h1>
                    <h1 className="text-lg items-end">{date}</h1>
                </div>
                <h1 className="text-lg">{program}</h1>
            </header>
            <section>{children}</section>
        </div>
    );
};
