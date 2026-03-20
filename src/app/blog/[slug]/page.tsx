import { BlogPostContent } from "./BlogPostContent";
import wpPosts from "@/data/wp/blog-posts.json";

export function generateStaticParams() {
  return wpPosts.map((p: any) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostContent slug={slug} />;
}
