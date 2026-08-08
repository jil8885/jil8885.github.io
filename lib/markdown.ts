import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import type { Root as MdastRoot, Code } from "mdast";
import type { Root as HastRoot, Element } from "hast";

export type TocItem = {
  depth: 2 | 3;
  id: string;
  text: string;
};

function remarkMermaid() {
  return (tree: MdastRoot) => {
    visit(tree, "code", (node: Code, index, parent) => {
      if (node.lang !== "mermaid" || !parent || index === undefined) return;
      parent.children[index] = {
        type: "html",
        value: `<pre class="mermaid">${node.value}</pre>`,
      };
    });
  };
}

function extractText(node: Element): string {
  return (node.children ?? [])
    .map((child) => {
      if (child.type === "text") return child.value;
      if (child.type === "element") return extractText(child);
      return "";
    })
    .join("");
}

function extractToc(toc: TocItem[]) {
  return () => (tree: HastRoot) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "h2" && node.tagName !== "h3") return;
      const id = typeof node.properties?.id === "string" ? node.properties.id : undefined;
      if (!id) return;
      toc.push({
        depth: node.tagName === "h2" ? 2 : 3,
        id,
        text: extractText(node),
      });
    });
  };
}

export async function renderMarkdown(content: string) {
  const toc: TocItem[] = [];

  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMermaid)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(extractToc(toc))
    .use(rehypePrettyCode, {
      theme: { dark: "github-dark", light: "github-light" },
      keepBackground: false,
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return { html: processed.toString(), toc };
}
