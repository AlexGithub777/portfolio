import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/getPosts";
import { formatDateNZ } from "@/lib/utils"; // <-- new import

export function BlogPosts() {
    const blogPosts = getAllPosts(); // dynamically loads posts

    return (
        <section id="blog" className="py-12">
            <div className="space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Latest Blog Posts
                    </h2>
                    <Separator className="w-20 mx-auto" />
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Sharing insights and learnings from my development
                        journey
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {blogPosts.map((post, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-lg transition-shadow"
                        >
                            <CardHeader>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{formatDateNZ(post.date)}</span>
                                </div>
                                <CardTitle className="text-xl leading-tight">
                                    {post.title}
                                </CardTitle>
                                <CardDescription className="text-sm leading-relaxed">
                                    {post.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="p-0 h-auto font-medium group"
                                >
                                    <a href={`/blog/${post.slug}`}>
                                        Read More
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
