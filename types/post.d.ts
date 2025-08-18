declare module "*.mdx" {
    let MDXComponent: (props: any) => JSX.Element;
    export default MDXComponent;
  
    // Explicitly use the Post type for metadata
    export const metadata: Post;
  }
  
  // General Post type for your blog
  export interface Post {
    slug: string;        // You’ll add this when importing
    title: string;
    date: string;
    description?: string;
    author?: string;
    tags?: string[];
    [key: string]: any;
  }
  