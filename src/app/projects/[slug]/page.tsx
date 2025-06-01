import { projectList } from "@/data/projects-list";
import { Project } from "@/types/project";
import Link from "next/link";

export default async function Projects({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    console.log(slug);

    const project: Project | undefined = projectList[slug];

    console.log(project);

    if (!project) {
        return (
            <div>
                not a project, check out the{" "}
                <Link href={"/projects"}>list here</Link> !
            </div>
        );
    }

    const { title, Description, date, location } = project;

    return (
        <div className="w-full md:px-20">
            <header className="w-full justify-content text-center">
                <h1 className="font-semibold text-6xl items-baseline">
                    {title}
                </h1>
                <h2 className="text-2xl items-baseline flex gap-4 w-full flex-auto justify-center">
                    <span>{location}</span> <span>|</span> <span>{date}</span>
                </h2>
            </header>

            <section>
                <Description />
            </section>
        </div>
    );
}
