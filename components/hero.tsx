"use client";

import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";
import { Mail, ArrowDown, Download } from "lucide-react";
import Image from "next/image";

export function Hero() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 40;
            const elementPosition = element.offsetTop - offset;

            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Profile Image */}
                <div className="order-2 md:order-1 flex justify-center">
                    <div className="relative">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                            <Image
                                src="/_static/images/avatar.jpg"
                                alt="Alex Scott - Full-Stack Developer"
                                width={320}
                                height={320}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-primary-foreground font-bold text-xl">
                                AS
                            </span>
                        </div>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="order-1 md:order-2 text-center md:text-left space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Alex Scott
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                            Full-Stack Developer
                        </p>
                    </div>

                    <p className="text-lg text-muted-foreground max-w-lg">
                        Hi, I'm Alex, a full-stack developer from New Zealand
                        with a degree in Computer Systems. I specialise in
                        building functional and user-friendly applications that
                        address real-world problems. My experience spans various
                        industries, with notable projects including EDMS, a
                        safety device management system, and Studentwell, a
                        platform dedicated to student wellbeing. I am currently
                        open to full-time roles, internships and freelance
                        opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button
                            size="lg"
                            onClick={() => scrollToSection("projects")}
                            className="group hover:cursor-pointer"
                        >
                            View My Work
                            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => scrollToSection("contact")}
                            className="hover:cursor-pointer"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Me
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a
                                href="/_static/Resume_2025_it.pdf"
                                download="Alex_Scott_Resume.pdf"
                                className="flex items-center gap-2"
                            >
                                <Download className="w-4 h-4" />
                                Download Resume
                            </a>
                        </Button>
                    </div>

                    <div className="flex gap-4 justify-center md:justify-start pt-4">
                        <Button variant="ghost" size="icon" asChild>
                            <a
                                href="https://github.com/AlexGithub777"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiGithub className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a
                                href="https://www.linkedin.com/in/alex-scott-43124026b/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiLinkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a
                                href="https://discord.com/users/924175200898125825"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiDiscord className="h-5 w-5" />
                                <span className="sr-only">Discord</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
