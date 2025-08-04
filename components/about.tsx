import { Separator } from "@/components/ui/separator";

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
                        I am a full-stack developer passionate about building
                        intuitive and reliable applications. My experience
                        includes both internal tools and public-facing
                        platforms, with notable projects like EDMS, a safety
                        device management system, and Studentwell, a wellbeing
                        platform for students. I enjoy working across the
                        technology stack, from crafting responsive user
                        interfaces to developing robust backend systems.
                    </p>

                    <p>
                        Writing maintainable code and solving real-world
                        problems drive my work, and I am always eager to learn
                        and tackle new challenges. I take pride in designing
                        solutions that enhance functionality and user
                        experience.
                    </p>

                    <p>
                        Outside of tech, I enjoy basketball, music production,
                        and working out, as they provide a balanced lifestyle
                        and allow me to explore new perspectives. I am currently
                        seeking full-time roles, internships, and freelance
                        opportunities, and I look forward to collaborating on
                        projects that make a meaningful impact.
                    </p>
                </div>
            </div>
        </section>
    );
}
