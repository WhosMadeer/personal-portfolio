import { Badge } from "../ui/badge";

const softSkills = [
    "Problem Solving",
    "Organization",
    "Time Management",
    "Teamwork",
    "Leadership",
    "Business Management",
    "Grant Writing",
];

const programmingLanguages = [
    "C",
    "C++",
    "PHP",
    "Javascript",
    "Typescript",
    "Python",
    "Java",
    "Verilog",
];

const frameworks = [
    "React",
    "Express",
    "Node.js",
    "Tailwind CSS",
    "Next.js",
    "pandas",
    "Flask",
    "shadcn/ui",
    "HeroUI",
];

const technologies = [
    "Git",
    "Firebase",
    "MySQL",
    "PostgreSQL",
    "GitHub",
    "Figma",
    "Linear",
    "Google Drive",
    "Notion",
];

export function SkillDisplay() {
    return (
        <div className="grid gap-8">
            <h1 className="text-4xl font-bold">Skills</h1>
            <div className="grid gap-4">
                <h2 className="text-xl font-medium">Soft Skills</h2>
                <div className="flex gap-2 flex-wrap">
                    <SkillList skills={softSkills} />
                </div>
                <h2 className="text-xl font-medium">Programming Languages</h2>
                <div className="flex gap-2 flex-wrap">
                    <SkillList skills={programmingLanguages} />
                </div>
                <h2 className="text-xl font-medium">Technologies</h2>
                <div className="flex gap-2 flex-wrap">
                    <SkillList skills={technologies} />
                </div>
                <h2 className="text-xl font-medium">Frameworks</h2>
                <div className="flex gap-2 flex-wrap">
                    <SkillList skills={frameworks} />
                </div>
            </div>
        </div>
    );
}

export const SkillList = ({ skills }: { skills: string[] }) => {
    return (
        <>
            {skills.map((skill) => (
                <SkillBadge skill={skill} key={skill} />
            ))}
        </>
    );
};

const SkillBadge = ({ skill }: { skill: string }) => {
    return (
        <Badge variant={"secondary"} className="shadow-2xl">
            {skill}
        </Badge>
    );
};
