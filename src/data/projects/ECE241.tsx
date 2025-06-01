import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";

const Description = () => {
    return (
        <div>
            <div className="w-full h-1/3 justify-center flex">
                <video width="540" height="960" controls preload="none">
                    <source src="/ECE241/ECE241-Demo.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="p-4 flex flex-col gap-4">
                During my second year at University, I worked with a partner on
                creating a piano tiles game on a FPGA board within a three week
                period. My partner and I came up with a design and technical
                schematics for our game. We went through the documentation on
                creating tiles on a display and reading our song from memory as
                it was a crucial part of our project. With a passion for our
                project and the idea, we worked on implementing all the logic
                for our game on the board with the limited time that we had. Our
                piano tiles games would take inputs from the keyboard, and then
                plays the respective notes while displaying the respective tile
                on the screen. With the gameplay completed, we shifted our focus
                on wrapping up our project and presenting it to our fellow
                classmates and teaching assistants. Through this project, I
                strengthened my skills in Verilog, research and circuit design,
                and communication with a teammate.
            </div>
        </div>
    );
};

export const ECE241: Project = {
    title: "ECE241 - Digital Systems",
    location: "University of Toronto",
    date: "September 2024 - December 2024",
    Description: Description,
};
