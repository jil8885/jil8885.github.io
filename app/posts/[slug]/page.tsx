import type { Metadata } from "next";
import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { PostBody } from "@/components/PostBody";
import { TableOfContents } from "@/components/TableOfContents";
import { Comments } from "@/components/Comments";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: `${post.title} | jil8885`,
    description: post.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <p className="text-xs text-neutral-500 dark:text-neutral-500">
          {post.date}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">
          {post.title}
        </h1>
        {post.tags.length > 0 && (
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </header>
      <TableOfContents toc={post.toc} />
      <PostBody html={post.contentHtml} />
      <Comments />
    </article>
  );
}
