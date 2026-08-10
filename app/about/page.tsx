import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 | jil8885",
};

const hyuabotTags = [
  "Kotlin",
  "SpringBoot",
  "PostgreSQL",
  "Kubernetes",
  "GraphQL",
  "Android",
  "iOS"
];

const nglTags = [
  "Python",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "AWS Lambda",
  "AWS SQS",
  "AWS DynamoDB",
  "Google Driver SDK",
  "Google Navigation SDK"
];

const LINKS = [
  { label: "GitHub", href: "https://github.com/jil8885" },
  { label: "GitHub (휴아봇)", href: "https://github.com/hyuabot-developers" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jeongin-lee-b16148170" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">소개</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          안녕하세요, 이정인입니다.
          <br />
          <br />
          저는 한양대학교 ERICA에서 컴퓨터공학과를 졸업하고, 동 대학원에서 인공지능융합학과 석사 과정을 마쳤습니다.
          석사 과정에서는 효율적인 물류 운송을 위한 트럭 배차 인공지능 관련 연구를 진행하였으며,
          현재는 미국 현지에서 실사용하는 컨테이너 운송 및 물류 관리 시스템과 운전자 앱의 백엔드 개발과 인프라 운영을 담당하고 있습니다.
          <br />
          <br />
          저는 확장 가능하고 안정적인 백엔드 아키텍처를 설계하고 구축하는 일에 집중하고 있습니다.
          내가 만든 소프트웨어를 통해 많은 사람들이 업무 효율을 높이거나 더욱 편리한 일상을 누리는 모습에 큰 보람을 느끼며,
          누구나 매일 신뢰하고 사용할 수 있는 백엔드 서비스를 만들어 꾸준히 운영하는 것을 지향합니다.
          <br />
          <br />
          학창 시절 1인 개발로 시작해 전교생의 90% 이상이 사용하는 학내 대표 플랫폼 "휴아봇"을 7년 넘게 큰 장애 없이 안정적으로 운영해오며,
          백엔드 응답 속도 최적화와 정교한 데이터 모델링의 중요성을 깊이 체감했습니다.
          Kotlin(SpringBoot), Python, Go 등 비즈니스 요구사항에 맞는 언어와 프레임워크를 유연하게 활용히며,
          백엔드 서비스 운영의 연장선으로 Kubernetes 및 AWS 클라우드 인프라를 직접 다름으로써 서버리스 아키텍처 전환을 통한 운영 비용 절감 및 API 응답 지연 단축 등 개발부터 배포, 운영까지 안정적으로 책임지는 백엔드 개발자로 성장해 왔습니다.
          <br />
          <br />
          꾸준히 마주하는 백엔드 개발 과정에서의 기술적 도전 과제와 트러블슈팅 경험, 그리고 새로 배운 지식들을 공유하고자 블로그를 운영하고 있습니다.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-lg font-semibold tracking-tight">주요 프로젝트</h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium">휴아봇</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            한양대학교 ERICA 캠퍼스 정보 서비스인 '휴아봇'을 2017년부터 직접 기획 및 개발하여 운영하고 있습니다.
            셔틀버스·시내버스 시간표, 지하철 도착 정보, 식단표 등 파편화되어 있던 학내 정보를 통합하여 카카오톡 챗봇과 모바일 앱으로 제공합니다.
            전교생의 90% 이상(10,000명+)이 이용하는 학내 대표 플랫폼으로 자리 잡았습니다.
            <br />
            <br />
            1인 개발자로서 Kotlin(Spring Boot) 백엔드 구축, GraphQL 도입을 통한 API 통신 효율화, 그리고 백엔드 운영의 연장선으로 Kubernetes 기반의 인프라 구축까지 서비스의 전 생애 주기를 직접 관리해 왔습니다.
            지속적인 아키텍처 리팩토링을 통해 API 응답 속도를 꾸준히 향상시켰으며, 7년이 넘ㅇ는 기간 동안 큰 장애 없이 서비스를 안정적으로 제공해 오고 있습니다.
          </p>
          <br />
          <div className="flex flex-wrap gap-2">
          {hyuabotTags.map((item) => (
            <span
              key={item}
              className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
            >
              {item}
            </span>
          ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium">NGL Transportation TMS/YMS</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            미국 현지에서 실사용하는 컨테이너 운송 관리 시스템(TMS) 및 야적장 관리 시스템(YMS), 그리고 운전자 앱(NGL Go)의 백엔드 개발과 인프라 운영을 담당하고 있습니다.
            주문 생성부터 트럭 배차, 창고 운영, 배송 추적 및 OCR 기반의 서류 처리까지 물류 운송의 전 과정을 전산화한 시스템입니다.
            <br />
            <br />
            Django와 FastAPI를 조합한 멀티 백엔드 구조로 API 응답 시간을 단축하였으며, 백엔드 안정성 및 운영의 효율화를 위해 AWS Lambda, SQS, Dynamo 기반의 서버리스 아키텍처 리팩토링을 주도하여 인프라 운영 비용을 60% 절감했습니다.
            또한 Google Driver SDK 및 Naviagation SDK 연동 및 실시간 배차 대시보드 구축을 통해 CS 발생 빈도도 줄이며 250대의 트럭에 대한 배차 및 일 1,000건 이상의 주문을 안정적으로 처리하는 물류 에코시스템을 완성했습니다.
          </p>
          <br />
          <div className="flex flex-wrap gap-2">
          {nglTags.map((item) => (
            <span
              key={item}
              className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
            >
              {item}
            </span>
          ))}
          </div>
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
