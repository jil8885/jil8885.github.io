import type { TocItem } from "@/lib/markdown";

export function TableOfContents({ toc }: { toc: TocItem[] }) {
  if (toc.length === 0) return null;

  return (
    <nav className="rounded-lg border border-neutral-200 p-4 text-sm dark:border-neutral-800">
      <p className="mb-2 font-medium text-neutral-700 dark:text-neutral-300">
        목차
      </p>
      <ul className="flex flex-col gap-1">
        {toc.map((item) => (
          <li key={item.id} className={item.depth === 3 ? "ml-4" : undefined}>
            <a
              href={`#${item.id}`}
              className="text-neutral-500 hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
