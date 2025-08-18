import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/post"; // the type we defined earlier

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((file) => file.endsWith(".mdx"))
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data } = matter(fileContents);

      return {
        slug: fileName.replace(/\.mdx$/, ""),
        title: data.title,
        date: data.date,
        description: data.description,
        author: data.author,
        tags: data.tags || [],
      } as Post;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // sort newest first
}
