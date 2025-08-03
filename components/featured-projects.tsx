import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js and Go. Features include user authentication, payment processing, inventory management, and real-time analytics.",
    technologies: ["Next.js", "Go", "PostgreSQL", "Docker", "Tailwind CSS"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/alexscott/ecommerce-platform",
  },
  {
    title: "Task Management API",
    description:
      "RESTful API for task management with advanced features like team collaboration, file attachments, and automated workflows. Built with C# and Entity Framework.",
    technologies: ["C#", "ASP.NET Core", "MS SQL Server", "Docker", "Azure"],
    demoUrl: "https://api.example.com",
    githubUrl: "https://github.com/alexscott/task-api",
  },
  {
    title: "Real-time Chat Application",
    description:
      "Modern chat application with real-time messaging, file sharing, and video calls. Features responsive design and offline message sync.",
    technologies: ["React", "Python", "WebSocket", "MySQL", "Bootstrap"],
    demoUrl: "https://chat.example.com",
    githubUrl: "https://github.com/alexscott/chat-app",
  },
]

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <Separator className="w-20 mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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
  )
}
