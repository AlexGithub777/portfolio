import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Building Scalable APIs with Go and PostgreSQL",
    description:
      "Learn how to design and implement high-performance APIs using Go's concurrency features and PostgreSQL's advanced capabilities. We'll cover connection pooling, query optimization, and deployment strategies.",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "scalable-apis-go-postgresql",
  },
  {
    title: "Modern Frontend Architecture with Next.js 14",
    description:
      "Explore the latest features in Next.js 14 including the App Router, Server Components, and streaming. Discover how to build fast, SEO-friendly applications with excellent developer experience.",
    date: "2024-01-08",
    readTime: "12 min read",
    slug: "nextjs-14-architecture",
  },
]

export function BlogPosts() {
  return (
    <section id="blog" className="py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Blog Posts</h2>
          <Separator className="w-20 mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing insights and learnings from my development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{post.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button variant="ghost" className="p-0 h-auto font-medium group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
