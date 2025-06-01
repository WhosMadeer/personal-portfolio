"use client";

import { ReactNode } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitGraph, Search } from "lucide-react";

export function IntroCard() {
    return (
        <Card className="h-fit md:ml-40 md:mr-10 mx-5">
            <CardHeader>
                <CardTitle className="text-4xl font-extrabold">
                    Hello! I'm Mahir
                </CardTitle>
                <CardDescription className="text-lg">
                    Computer Engineering Student at University of Toronto
                </CardDescription>
                {/* <CardAction>Card Action</CardAction> */}
            </CardHeader>
            <CardContent>
                <p>
                    I'm Mahir Khandaker and I'm a second year Computer
                    Engineering student at the University of Toronto. I am also
                    the founding engineer for SnapShip Solutions - a tech based
                    startup - for 3 years. In this position, I learned how to
                    built full stack applications with React and Express with
                    Typescript. As a student, I have strong skills in time
                    management, organization and teamwork. Everyday, I am
                    looking for a new challenge to grow as a person and to meet
                    new people and create life long connections
                </p>
            </CardContent>
            <CardFooter>
                <div className="flex gap-2 justify-center w-full">
                    <SocialLink
                        title="LinkedIn"
                        link="https://www.linkedin.com/in/mahir-khandaker-engineering/"
                        icon={<Search />}
                    />
                    <SocialLink
                        title="Github"
                        link="https://github.com/WhosMadeer"
                        icon={<GitGraph />}
                    />
                </div>
            </CardFooter>
        </Card>
    );
}

interface SocialLinkProps {
    title: string;
    link: string;
    icon: ReactNode;
}

const SocialLink = ({ title, link, icon }: SocialLinkProps) => {
    return (
        <Button
            variant={"outline"}
            className="min-w-40"
            onClick={() => {
                window.open(link, "_blank");
            }}
        >
            {icon} {title}
        </Button>
    );
};
