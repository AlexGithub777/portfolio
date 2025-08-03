import { Separator } from "@/components/ui/separator"

export function About() {
  return (
    <section id="about" className="py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <Separator className="w-20 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            With over 5 years of experience in full-stack development, I've had the privilege of working on diverse
            projects ranging from enterprise applications to innovative startups. My journey began with a Computer
            Science degree, but my real education came from building real-world solutions and constantly adapting to new
            technologies.
          </p>

          <p>
            I believe in writing clean, maintainable code and following best practices. Whether it's architecting
            scalable backend systems with Go and C#, crafting responsive frontends with React and Angular, or optimizing
            database performance, I approach each challenge with curiosity and attention to detail.
          </p>

          <p>
            When I'm not coding, you'll find me contributing to open-source projects, writing technical blog posts, or
            exploring the latest developments in web technologies. I'm always excited to collaborate on projects that
            push boundaries and create meaningful user experiences.
          </p>
        </div>
      </div>
    </section>
  )
}
