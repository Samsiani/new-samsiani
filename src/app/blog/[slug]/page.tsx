import { BlogPostContent } from "./BlogPostContent";

export function generateStaticParams() {
  return [
    { slug: "web-trends-2024" },
    { slug: "seo-tips" },
    { slug: "ui-ux-principles" },
  ];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostContent slug={slug} />;
}
