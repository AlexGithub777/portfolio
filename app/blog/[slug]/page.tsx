import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import CustomImage from "../../../components/CustomImage";
import { Navigation } from "../../../components/navigation";
import { MDXComponents } from "mdx/types";
import { BackButton } from "../../../components/BackButton";
import { formatDateNZ } from "@/lib/utils";

interface FrontMatter {
    title: string;
    date: string;
    description?: string;
    [key: string]: any;
}

const mdxComponents: MDXComponents = {
    img: CustomImage,
};

export async function generateStaticParams() {
    const postsDir = path.join(process.cwd(), "posts");
    const files = fs.readdirSync(postsDir);

    return files.map((file) => ({
        slug: file.replace(/\.mdx$/, ""),
    }));
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), "posts", `${slug}.mdx`);

    if (!fs.existsSync(filePath)) return notFound();

    const source = fs.readFileSync(filePath, "utf-8");

    const { content, frontmatter } = await compileMDX<FrontMatter>({
        source,
        components: mdxComponents,
        options: { parseFrontmatter: true },
    });

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container mx-auto px-4 py-8">
                <BackButton /> {/* client component */}
                <article className="prose prose-gray dark:prose-invert mx-auto max-w-3xl mt-4">
                    <header className="mb-8">
                        <h1 className="mb-2">{frontmatter.title}</h1>
                        <p className="text-muted-foreground text-sm">
                            {formatDateNZ(frontmatter.date)}
                        </p>
                        {frontmatter.description && (
                            <p className="text-muted-foreground mt-4 text-lg">
                                {frontmatter.description}
                            </p>
                        )}
                    </header>
                    <div className="prose-content">{content}</div>
                </article>
            </main>
        </div>
    );
}
