import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 | jil8885",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold tracking-tight">소개</h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        여기에 자기소개를 작성하세요. `app/about/page.tsx` 파일을 수정하면 됩니다.
      </p>
    </div>
  );
}
