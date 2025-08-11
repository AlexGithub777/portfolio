import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "EDMS (Emergency Device Management System)",
        description:
            "An internal tool used to track fire extinguishers and other safety devices. Includes mapping features, device history, and maintenance scheduling.",
        technologies: [
            "Go",
            "PostgreSQL",
            "Docker",
            "Bootstrap",
            "jQuery",
            "Leaflet",
            "JavaScript",
        ],
        demoUrl: "https://edms.alexscottdev.com",
        githubUrl: "https://github.com/AlexGithub777/EDMS",
        screenShot: "/_static/images/edms.png",
    },
    {
        title: "Studentwell",
        description:
            "A student wellness platform for tracking moods, planning exercise and sleep, and visualizing habits. Built as a capstone project.",
        technologies: [
            "PHP",
            "Laravel",
            "MySQL",
            "Bootstrap",
            "Chart.js",
            "JavaScript",
        ],
        demoUrl: "https://studentwell.alexscottdev.com",
        githubUrl: "https://github.com/AlexGithub777/Studentwell",
        screenShot: "/_static/images/studentwell.png",
    },
    {
        title: "FlexTime",
        description:
            "A WordPress-based site for booking fitness classes and personal training sessions. Customised theme and backend.",
        technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "jQuery"],
        demoUrl: "https://flextime.alexscottdev.com",
        githubUrl: "https://github.com/AlexGithub777/FlexTime",
        screenShot: "/_static/images/flextime.png",
    },
    {
        title: "Hawke's Bay Basketball Courts Finder",
        description:
            "A simple interactive map showing public basketball courts in the Hawke's Bay area.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Google Maps",
            "Google Fonts",
        ],
        demoUrl: "https://bball.alexscottdev.com/index.html",
        githubUrl:
            "https://github.com/AlexGithub777/Hawkes-Bay-Basketball-Court-Finder",
        screenShot: "/_static/images/bball.png",
    },
    {
        title: "Phone Fix Repair Booking System",
        description:
            "A frontend prototype for scheduling phone repairs, built with React and Bootstrap.",
        technologies: ["React", "Bootstrap", "JavaScript", "CSS"],
        demoUrl: "https://phone-repair.alexscottdev.com",
        githubUrl: "https://github.com/AlexGithub777/Phone-Fix-Booking-System",
        screenShot: "/_static/images/phone-repair.png",
    },
    {
        title: "Enterprise Notes",
        description:
            "Internal note-taking app for logging and sharing project updates within teams.",
        technologies: [
            "Go",
            "PostgreSQL",
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
        ],
        demoUrl: "https://notes.alexscottdev.com",
        githubUrl: "https://github.com/AlexGithub777/EnterpriseNotes",
        screenShot: "/_static/images/notes.png",
    },
];

export function FeaturedProjects() {
    return (
        <section id="projects" className="py-12">
            <div className="space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Featured Projects
                    </h2>
                    <Separator className="w-20 mx-auto" />
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my recent work and technical expertise
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="group flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border"
                        >
                            {/* Image Container with Overlay */}
                            <div className="relative overflow-hidden h-48">
                                <Image
                                    src={project.screenShot}
                                    alt={`${project.title} screenshot`}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="flex gap-3">
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            asChild
                                            className="bg-white/90 hover:bg-white text-black"
                                        >
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Demo
                                            </a>
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            asChild
                                            className="bg-white/90 hover:bg-white text-black"
                                        >
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="mr-2 h-4 w-4" />
                                                Code
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <CardHeader className="pb-3">
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="text-sm leading-relaxed">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-1 pt-0">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter className="flex gap-2 pt-4">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors"
                                >
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Demo
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors"
                                >
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
