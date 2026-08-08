import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight">
          공부하고 만든 것들을 기록합니다
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          학습 노트와 프로젝트 경험을 정리하는 공간입니다.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-lg font-semibold tracking-tight">최근 포스트</h2>
        <ul className="flex flex-col gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`} className="group block">
                <p className="text-xs text-neutral-500 dark:text-neutral-500">
                  {post.date}
                </p>
                <h3 className="text-base font-medium group-hover:underline">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/posts"
          className="text-sm text-neutral-600 hover:underline dark:text-neutral-400"
        >
          모든 포스트 보기 →
        </Link>
      </section>
    </div>
  );
}
