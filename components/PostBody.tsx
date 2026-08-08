"use client";

import { useEffect, useRef } from "react";

export function PostBody({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const codeBlocks = container.querySelectorAll<HTMLPreElement>(
      "pre:not(.mermaid)"
    );
    codeBlocks.forEach((pre) => {
      if (pre.dataset.copyEnhanced) return;
      pre.dataset.copyEnhanced = "true";

      const wrapper = document.createElement("div");
      wrapper.className = "group relative";
      pre.before(wrapper);
      wrapper.appendChild(pre);

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "복사";
      button.className =
        "absolute right-2 top-2 rounded border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs text-neutral-200 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-neutral-700";
      button.addEventListener("click", () => {
        navigator.clipboard.writeText(pre.textContent ?? "");
        button.textContent = "복사됨";
        setTimeout(() => {
          button.textContent = "복사";
        }, 1500);
      });
      wrapper.appendChild(button);
    });

    const mermaidBlocks =
      container.querySelectorAll<HTMLElement>(".mermaid");
    if (mermaidBlocks.length > 0) {
      import("mermaid").then(({ default: mermaid }) => {
        mermaid.initialize({ startOnLoad: false, theme: "neutral" });
        mermaid.run({ nodes: Array.from(mermaidBlocks) });
      });
    }
  }, [html]);

  return (
    <div
      ref={ref}
      className="prose prose-neutral max-w-none dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
