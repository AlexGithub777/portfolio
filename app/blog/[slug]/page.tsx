import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import CustomImage from "../../../components/CustomImage";
import { MDXComponents } from "mdx/types"; // Correct import for MDX components

// Define your frontmatter type
interface FrontMatter {
    title: string;
    date: string;
    description?: string;
    [key: string]: any; // Allow additional properties
}

// MDX components you want to use inside posts
const mdxComponents: MDXComponents = {
    img: CustomImage,
    // Add other components as needed
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
        <article className="prose">
            <h1>{frontmatter.title}</h1>
            <p className="text-sm text-gray-500">{frontmatter.date}</p>
            {content}
        </article>
    );
}
