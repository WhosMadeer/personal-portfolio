import { Project } from "@/types/project";
import { ECE241 } from "./projects/ECE241";
import { ECE295 } from "./projects/ECE295";
import { ECE243 } from "./projects/ECE243";

export const projectList: { [key: string]: Project } = {
    ECE295: ECE295,
    ECE241: ECE241,
    ECE243: ECE243,
};

export type ProjectListKey = keyof typeof projectList;
