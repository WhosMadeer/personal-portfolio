import { ReactNode } from "react";
import { Dot } from "../composite/dot";
import { Separator } from "../ui/separator";
import { SkillList } from "./skills";

const SnapShipSkillsList = [
    "React",
    "Express",
    "Node.js",
    "Figma",
    "RESTful",
    "SOAP-WSDL",
    "Typescript",
    "Backend",
    "Frontend",
];

const SchoolList = ["Teamwork", "Leadership", "Communication", "Organization"];

const RoboticsList = [
    "Business",
    "Grant Writing",
    "Sponsorship",
    "Google Workspace Suite",
    "Seminar Living",
    ...SchoolList,
];

export function Experience() {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">Experience</h1>
            <div className="flex flex-col gap-4">
                <TimelineDetails
                    index={"01"}
                    title="SnapShip Solutions"
                    date="July 2022 - Present"
                    subtitle="Founding Full Stack Engineer"
                >
                    <div className="grid gap-4">
                        <ul className="list-disc list-inside">
                            <li>
                                Created a frontend application using React and
                                Typescript with Shadcn/UI components, building
                                over 70 customs components over 14 pages.
                            </li>
                            <li>
                                Used Express with Typescript to create a backend
                                REST API server.
                            </li>
                            <li>
                                Integrated REST and SOAP-WSDL APIs from FedEx,
                                UPS, GLS and Purolator for users to create,
                                track and cancel shipments and pickups.
                            </li>
                        </ul>
                        <div className="flex gap-2 flex-wrap">
                            <SkillList skills={SnapShipSkillsList} />
                        </div>
                    </div>
                </TimelineDetails>
                <TimelineDetails
                    index={"02"}
                    title="Western Technical Commercial School"
                    date="October 2021 - June 2023"
                    subtitle="Student Council President"
                >
                    <div className="grid gap-4">
                        <ul className="list-disc list-inside">
                            <li>
                                Led a group of 18 students to manage, run and
                                assist with school events focused on student
                                enjoyment.
                            </li>
                            <li>
                                Spearheaded logistics for assemblies, spirit
                                days and fundraisers while ensuring resources
                                were allocated efficiently.
                            </li>
                            <li>
                                Represented the student body in meetings with
                                school staff, addressing concerns and proposing
                                initiatives to improve student life.
                            </li>
                            <li>
                                Ran a Prom committee to administrate, manage and
                                setup two Proms, ensuring smooth execution from
                                planning to completion.
                            </li>
                        </ul>
                        <div className="flex gap-2 flex-wrap">
                            <SkillList skills={SchoolList} />
                        </div>
                    </div>
                </TimelineDetails>
                <TimelineDetails
                    index={"03"}
                    title="WARP7 Team 865 - FIRST Robotics"
                    date="September 2019 - June 2023"
                    subtitle="Director of Operations"
                >
                    <div className="grid gap-4">
                        <ul className="list-disc list-inside">
                            <li>
                                Managed a team of students to create
                                long-lasting partnerships with organizations
                                such as Wealthsimple Foundation, TD Bank,
                                Motorola Solutions, and Optimist Club of
                                Etobicoke.
                            </li>
                            <li>
                                Created two different 5 part business and
                                financial literacy seminar series for 10 teams
                                from all over Canada online, with guest speakers
                                from the industry.
                            </li>
                            <li>
                                Authored and presented applications for the
                                FIRST Impact Award, advocating for the team's
                                mission and accomplishments over multiple years
                            </li>
                        </ul>
                        <div className="flex gap-2 flex-wrap">
                            <SkillList skills={RoboticsList} />
                        </div>
                    </div>
                </TimelineDetails>
            </div>
        </div>
    );
}

interface TimelineDetailsProps extends ExperienceDetailsProps {
    index: string | ReactNode;
}

const TimelineDetails = ({
    index,
    title,
    date,
    subtitle,
    children,
}: TimelineDetailsProps) => {
    return (
        <div className="flex gap-6 w-full">
            <div className="flex flex-col items-center gap-2">
                <Dot>{index}</Dot>
                <Separator
                    orientation="vertical"
                    className="!h-[calc(100%-0.5rem-2rem)]"
                />
            </div>
            <ExperienceDetails title={title} date={date} subtitle={subtitle}>
                {children}
            </ExperienceDetails>
        </div>
    );
};

interface ExperienceDetailsProps {
    title: string;
    date: string;
    subtitle: string;
    children?: ReactNode;
}

const ExperienceDetails = ({
    title,
    date,
    subtitle,
    children,
}: ExperienceDetailsProps) => {
    return (
        <div className="flex flex-col gap-2 flex-auto w-full">
            <header className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <h1 className="font-semibold text-lg items-baseline flex-auto">
                        {title}
                    </h1>
                    <h1 className="text-lg items-end">{date}</h1>
                </div>
                <h1 className="text-lg">{subtitle}</h1>
            </header>
            <section>{children}</section>
        </div>
    );
};
