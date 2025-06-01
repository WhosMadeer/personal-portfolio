import { ReactNode } from "react";

export const Dot = ({ children }: { children: string | ReactNode }) => {
    return (
        <div className="rounded-full bg-foreground text-white shadow aspect-square w-10 h-10 grid place-items-center">
            {children}
        </div>
    );
};
