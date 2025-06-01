"use client";

import { Download, FileUser, Mail, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

export function ResumeCard() {
    return (
        <Card>
            <CardContent>
                <div className="flex gap-2">
                    <div className="grid gap-1">
                        <h2 className="font-bold text-lg">Contact:</h2>
                        <a
                            href="https://www.linkedin.com/in/mahir-khandaker-engineering/"
                            className="flex gap-1 items-center text-foreground"
                        >
                            <Search className="h-4" /> LinkedIn
                        </a>
                        <a
                            href="mailto:mahirkhandaker@gmail.com"
                            className="flex gap-1 items-center text-foreground"
                        >
                            <Mail className="h-4" />
                            mahirkhandaker@gmail.com
                        </a>
                    </div>
                    <Button
                        className="h-21 w-21 ml-auto"
                        variant={"secondary"}
                        onClick={() => {
                            window.open(
                                "/resume/Mahir's Resume.pdf",
                                "_blank",
                                "download",
                            );
                        }}
                    >
                        <Download />
                        Resume
                    </Button>
                    {/* <a
                        href="/resume/Mahir's Resume.pdf"
                        download={"Mahir's Resume"}
                        target="_blank"
                        className="h-21 w-21 grid place-content-center justify-items-center border text-secondary-foreground shadow-xs hover:bg-secondary rounded-md ml-auto"
                    >
                        <Download />
                        Resume
                    </a> */}
                </div>
            </CardContent>
        </Card>
    );
}
