import { JSX } from "react";

export type Project = {
    title: string;
    location?: string;
    date: string;
    Description: () => JSX.Element;
};

// export type ProjectCard = {};
