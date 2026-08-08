import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 | jil8885",
};

const INTERESTS = [
  "Backend",
  "FastAPI",
  "Go",
  "Rust",
  "인프라 자동화",
  "Flutter / Kotlin / Swift",
  "크롤링 / 봇",
];

const LINKS = [
  { label: "GitHub", href: "https://github.com/jil8885" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jeongin-lee-b16148170" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">소개</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          안녕하세요, 이정인입니다. 경기도 안산에서 한양대학교 ERICA 캠퍼스
          컴퓨터공학과를 졸업하고, 현재 같은 학교에서 인공지능 전공 석사
          과정을 밟고 있습니다. 백엔드와 인프라 자동화에 관심이 많고, 사람들이
          매일 쓰는 서비스를 만들고 꾸준히 운영하는 일을 좋아합니다.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold tracking-tight">관심 분야</h2>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((item) => (
            <span
              key={item}
              className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-lg font-semibold tracking-tight">주요 프로젝트</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium">HYUabot</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            한양대학교 ERICA 캠퍼스 정보를 제공하는 캠퍼스 정보 서비스입니다.
            2017년부터 운영 중이며, 셔틀버스·시내버스 시간표, 지하철
            도착정보, 학식 메뉴, 열람실 좌석, 학사일정 등을 카카오톡 챗봇과
            앱·웹으로 제공합니다. API 백엔드, 카카오톡 챗봇 백엔드,
            Android/iOS 앱, 인프라까지 직접 구축하고 운영하고 있습니다.
          </p>
          <a
            href="https://github.com/hyuabot-developers"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-neutral-500 hover:underline dark:text-neutral-500"
          >
            github.com/hyuabot-developers ↗
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium">NGL Transportation TMS/YMS</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            물류 운송관리시스템(TMS)과 야드관리시스템(YMS)을 개발하고
            있습니다. FastAPI 기반 백엔드, 모바일 앱, 관리자 대시보드 등
            실제 운송 현장에서 쓰이는 시스템을 만들고 있습니다.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium">그 외</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            QuickHanyang(학교 사이트를 더 편하게 쓰기 위한 크롬 확장), 셔틀버스
            시간표 크롤러, 카카오톡 테마 등 학교 생활을 편하게 만드는 소규모
            도구들을 종종 만듭니다.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold tracking-tight">연락처</h2>
        <ul className="flex flex-col gap-1 text-sm">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-600 hover:underline dark:text-neutral-400"
              >
                {link.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
