import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Book, ChartLine, LayoutTemplate } from "lucide-react";

export function CoreValues() {
    return (
        <div className="grid gap-8 w-full">
            <h1 className="text-4xl font-bold">Core Values</h1>
            <div className="grid gap-4 items-center max-w-full">
                <CoreValueCard title="Innovative" icon={<ChartLine />}>
                    I am driven to create new solutions, improve existing
                    systems, and think beyond conventional methods.
                </CoreValueCard>
                <CoreValueCard title="Lifelong Learning" icon={<Book />}>
                    Engineering is ever-evolving, so I need to stay curious and
                    committed to learn new skills.
                </CoreValueCard>

                <CoreValueCard title="Adaptable" icon={<LayoutTemplate />}>
                    As a student who's working full time, I had to learn how to
                    manage my time and stay organizated
                </CoreValueCard>
            </div>
        </div>
    );
}

interface CoreValueCardProps {
    title: string;
    icon: ReactNode;
    children?: ReactNode;
}

const CoreValueCard = ({ title, children, icon }: CoreValueCardProps) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex gap-2 font-bold text-lg">
                    {icon} {title}
                </div>
            </CardHeader>
            <CardContent className="flex-wrap w-full">{children}</CardContent>
        </Card>
    );
};
