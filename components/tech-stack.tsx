import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DiVisualstudio, DiMsqlServer } from "react-icons/di";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiGo,
    SiPython,
    SiSharp,
    SiPhp,
    SiPostgresql,
    SiReact,
    SiAngular,
    SiNextdotjs,
    SiDotnet,
    SiLaravel,
    SiNodedotjs,
    SiReactivex,
    SiJquery,
    SiPandas,
    SiNumpy,
    SiTailwindcss,
    SiBootstrap,
    SiDocker,
    SiGit,
    SiGithub,
    SiPostman,
    SiSwagger,
    SiGraphql,
    SiGrafana,
    SiPrometheus,
    SiFigma,
    SiJupyter,
    SiMysql,
    SiGooglecloud,
} from "react-icons/si";
import { VscCode, VscVscode, VscAzure, VscAzureDevops } from "react-icons/vsc";
import { Database, BarChart3, TrendingUp } from "lucide-react";

const technologies = [
    // Languages
    { name: "HTML", category: "Languages", icon: SiHtml5 },
    { name: "CSS", category: "Languages", icon: SiCss3 },
    { name: "JavaScript", category: "Languages", icon: SiJavascript },
    { name: "TypeScript", category: "Languages", icon: SiTypescript },
    { name: "Go", category: "Languages", icon: SiGo },
    { name: "Python", category: "Languages", icon: SiPython },
    { name: "C#", category: "Languages", icon: SiSharp },
    { name: "PHP", category: "Languages", icon: SiPhp },
    { name: "SQL", category: "Languages", icon: Database },

    // Frameworks
    { name: "React", category: "Frameworks", icon: SiReact },
    { name: "Angular", category: "Frameworks", icon: SiAngular },
    { name: "Next.js", category: "Frameworks", icon: SiNextdotjs },
    { name: ".NET Core", category: "Frameworks", icon: SiDotnet },
    { name: "Laravel", category: "Frameworks", icon: SiLaravel },

    // Runtime/Libraries
    { name: "Node.js", category: "Libraries", icon: SiNodedotjs },
    { name: "Entity Framework", category: "Libraries", icon: SiDotnet },
    { name: "AutoMapper", category: "Libraries", icon: SiDotnet },
    { name: "RxJS", category: "Libraries", icon: SiReactivex },
    { name: "jQuery", category: "Libraries", icon: SiJquery },
    { name: "HTMX", category: "Libraries", icon: VscCode },
    // Data Analysis & Analytics
    { name: "Pandas", category: "Libraries", icon: SiPandas },
    { name: "NumPy", category: "Libraries", icon: SiNumpy },
    { name: "Matplotlib", category: "Libraries", icon: BarChart3 },
    { name: "Seaborn", category: "Libraries", icon: TrendingUp },

    // Styling
    { name: "TailwindCSS", category: "Styling", icon: SiTailwindcss },
    { name: "Bootstrap", category: "Styling", icon: SiBootstrap },

    // Tools & Technologies
    { name: "Docker", category: "Tools & Technologies", icon: SiDocker },
    { name: "Git", category: "Tools & Technologies", icon: SiGit },
    { name: "GitHub", category: "Tools & Technologies", icon: SiGithub },
    { name: "Postman", category: "Tools & Technologies", icon: SiPostman },
    { name: "Swagger", category: "Tools & Technologies", icon: SiSwagger },
    { name: "GraphQL", category: "Tools & Technologies", icon: SiGraphql },
    { name: "Grafana", category: "Tools & Technologies", icon: SiGrafana },
    {
        name: "Prometheus",
        category: "Tools & Technologies",
        icon: SiPrometheus,
    },
    { name: "Figma", category: "Tools & Technologies", icon: SiFigma },
    {
        name: "Visual Studio Code",
        category: "Tools & Technologies",
        icon: VscVscode,
    },
    {
        name: "Visual Studio",
        category: "Tools & Technologies",
        icon: DiVisualstudio,
    },
    {
        name: "Jupyter Notebook",
        category: "Tools & Technologies",
        icon: SiJupyter,
    },

    // Databases
    { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
    { name: "MySQL", category: "Database", icon: SiMysql },
    { name: "MS SQL Server", category: "Database", icon: DiMsqlServer },

    // Cloud & DevOps
    { name: "Azure", category: "Cloud & DevOps", icon: VscAzure },
    { name: "GCP", category: "Cloud & DevOps", icon: SiGooglecloud },
    { name: "Azure DevOps", category: "Cloud & DevOps", icon: VscAzureDevops },
];

const categoryColors = {
    Languages: "default",
    Frameworks: "secondary",
    Libraries: "outline",
    Styling: "default",
    "Tools & Technologies": "outline",
    Database: "secondary",
    "Cloud & DevOps": "default",
} as const;

const categoryOrder = [
    "Languages",
    "Frameworks",
    "Libraries",
    "Styling",
    "Database",
    "Tools & Technologies",
    "Cloud & DevOps",
];

export function TechStack() {
    const groupedTechnologies = categoryOrder
        .map((category) => ({
            category,
            techs: technologies.filter((tech) => tech.category === category),
        }))
        .filter((group) => group.techs.length > 0);

    return (
        <section className="py-12">
            <div className="space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Tech Stack
                    </h2>
                    <Separator className="w-20 mx-auto" />
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Technologies and tools I use to build modern
                        applications
                    </p>
                </div>

                {/* Grouped by Category */}
                <div className="space-y-8 max-w-6xl mx-auto">
                    {groupedTechnologies.map((group) => (
                        <div key={group.category} className="space-y-3">
                            <h3 className="text-lg font-semibold text-center md:text-left">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {group.techs.map((tech) => {
                                    const IconComponent = tech.icon;

                                    return (
                                        <Badge
                                            key={tech.name}
                                            variant={
                                                categoryColors[
                                                    tech.category as keyof typeof categoryColors
                                                ]
                                            }
                                            className="text-sm py-2 px-4 hover:scale-105 transition-transform cursor-default flex items-center gap-2"
                                        >
                                            <IconComponent size={14} />
                                            {tech.name}
                                        </Badge>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
