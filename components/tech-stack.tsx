import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const technologies = [
  { name: "Go", category: "Backend" },
  { name: "C#", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Laravel", category: "Backend" },
  { name: "Bootstrap", category: "Styling" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Docker", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "MS SQL Server", category: "Database" },
]

const categoryColors = {
  Backend: "default",
  Frontend: "secondary",
  Styling: "outline",
  DevOps: "destructive",
  Database: "default",
} as const

export function TechStack() {
  return (
    <section className="py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
          <Separator className="w-20 mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <Badge
              key={tech.name}
              variant={categoryColors[tech.category as keyof typeof categoryColors]}
              className="text-sm py-2 px-4 hover:scale-105 transition-transform cursor-default"
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
