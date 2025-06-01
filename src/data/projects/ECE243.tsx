import { Project } from "@/types/project";

const Description = () => {
    return (
        <div>
            <div className="w-full h-1/3 justify-center flex">
                <video width="3840" height="2160" controls preload="none">
                    <source src="/ECE243/ECE243-Demo.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="p-4 flex flex-col gap-4">
                During my second year at University, I worked with a partner on
                creating a Pokemon Battle Simulator written in C on a FPGA board
                within a three week period. We worked together to come up with a
                design and technical schematics for our game. Using Git, we
                collaborated on different parts of our game, where I would start
                by creating the structure of the code with the functions that we
                would need to play the game. Together, we went through
                documentation to implement inputs using GPIO pins, creating
                graphics using a MATLAB script and displaying assets and playing
                audio on the FPGA board. Throughout the three weeks, we would
                work together to develop parts of our game and then combine them
                together. This project gave me the chance to apply what I have
                learned in lecture, in the documentation, and within the
                industry to create a fun game and practice my skills in team
                management, design and coding.
            </div>
        </div>
    );
};

export const ECE243: Project = {
    title: "ECE243",
    location: "University of Toronto",
    date: "January 2025 - April 2025",
    Description: Description,
};
