# jil8885.github.io

Next.js(App Router) 기반 정적 블로그. `content/posts/*.md`에 마크다운 파일을 추가하면 자동으로 목록/상세 페이지가 생성됩니다.

## 새 글 작성

`content/posts/` 아래에 파일을 추가합니다.

```md
---
title: "제목"
date: "YYYY-MM-DD"
description: "한 줄 설명"
tags: ["태그1", "태그2"]
---

본문 내용
```

## 로컬 개발

```bash
npm install
npm run dev
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 정적 export 빌드 후 GitHub Pages로 자동 배포합니다.
