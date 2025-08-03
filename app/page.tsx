import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { FeaturedProjects } from "@/components/featured-projects"
import { BlogPosts } from "@/components/blog-posts"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 space-y-16">
        <Hero />
        <About />
        <TechStack />
        <FeaturedProjects />
        <BlogPosts />
        <ContactSection />
      </main>
    </div>
  )
}
