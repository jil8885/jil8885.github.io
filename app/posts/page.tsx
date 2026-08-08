import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "포스트 | jil8885",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold tracking-tight">포스트</h1>
      <ul className="flex flex-col gap-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="group block">
              <p className="text-xs text-neutral-500 dark:text-neutral-500">
                {post.date}
              </p>
              <h2 className="text-base font-medium group-hover:underline">
                {post.title}
              </h2>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {post.description}
              </p>
              {post.tags.length > 0 && (
                <div className="mt-2 flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
