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
        demoUrl: "", // Optional: link to a live demo or case study
        githubUrl: "", // Optional: link to repo if public
        screenShot: "/edms-screenshot.png", // Optional: path to screenshot
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
        demoUrl: "",
        githubUrl: "",
        screenShot: "/studentwell-screenshot.png", // Optional: path to screenshot
    },
    {
        title: "FlexTime",
        description:
            "A WordPress-based site for booking fitness classes and personal training sessions. Customised theme and backend.",
        technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "jQuery"],
        demoUrl: "",
        githubUrl: "",
        screenShot: "/flextime-screenshot.png", // Optional: path to screenshot
    },
    {
        title: "Hawke's Bay Basketball Courts Finder",
        description:
            "A simple interactive map showing public basketball courts in the Hawke’s Bay area.",
        technologies: ["HTML", "CSS", "JavaScript"],
        demoUrl: "",
        githubUrl: "",
        screenShot: "/basketball-courts-map.png", // Optional: path to screenshot
    },
    {
        title: "Phone Repair Booking System",
        description:
            "A frontend prototype for scheduling phone repairs, built with React and Bootstrap.",
        technologies: ["React", "Bootstrap", "JavaScript", "CSS"],
        demoUrl: "",
        githubUrl: "",
        screenShot: "/phone-repair-booking.png", // Optional: path to screenshot
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
        demoUrl: "",
        githubUrl: "",
        screenShot: "/enterprise-notes-screenshot.png", // Optional: path to screenshot
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
                            className="flex flex-col hover:shadow-lg transition-shadow"
                        >
                            <CardHeader>
                                <CardTitle className="text-xl">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="text-sm leading-relaxed">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className="flex-1 bg-transparent"
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
                                    className="flex-1 bg-transparent"
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
