# CursorReadME — Sales Frontend 구조 설계

> Cursor/개발자용 프로젝트 구조 및 설계 문서 (Sales 관리 프론트엔드)

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | sales_frontend (Sales System) |
| **목적** | 영업/판매 관리 시스템의 프론트엔드 |
| **프레임워크** | Next.js 16 (App Router) |
| **언어** | TypeScript |

---

## 2. 기술 스택

| 구분 | 기술 | 버전/비고 |
|------|------|-----------|
| **런타임/빌드** | Node.js | — |
| **프레임워크** | Next.js | ^16.1.6 |
| **UI** | React | ^19.2.3 |
| **스타일** | styled-components, CSS Modules, globals.css | styled-components ^6.3.8 |
| **언어** | TypeScript | ^5 |
| **린트** | ESLint + eslint-config-next | ^9, 16.1.6 |

---

## 3. 디렉터리 구조 (상세)

```
no3_Front_Sales_Frontend/
├── .git/                    # Git 저장소
├── .next/                   # Next.js 빌드 산출물 (자동 생성)
├── node_modules/            # 의존성 패키지
├── public/                  # 정적 자산 (이미지, 아이콘 등)
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
│   └── file.svg
├── src/
│   ├── app/                 # Next.js App Router 진입점
│   │   ├── (dashboard)/     # Route Group: 대시보드 레이아웃 공유
│   │   │   ├── product/     # 상품 페이지
│   │   │   │   └── page.tsx
│   │   │   ├── customer/    # 고객 페이지
│   │   │   │   └── page.tsx
│   │   │   ├── promotion/   # 프로모션 페이지
│   │   │   │   └── page.tsx
│   │   │   └── channel/     # 채널 페이지
│   │   │       └── page.tsx
│   │   ├── globals.css      # 전역 스타일 + CSS 변수
│   │   ├── layout.tsx       # 루트 레이아웃 (Sidebar + main)
│   │   ├── page.tsx         # 홈(/) 페이지
│   │   └── page.module.css  # 홈 페이지용 CSS Module (선택)
│   └── components/          # 재사용 컴포넌트
│       └── Sidebar.tsx      # 공통 사이드바 네비게이션
├── CursorReadME.md          # 본 문서 (Cursor/구조 설계)
├── README.md                # 프로젝트 소개 및 실행 방법
├── eslint.config.mjs        # ESLint 설정
├── next.config.ts           # Next.js 설정
├── package.json             # 의존성 및 스크립트
├── tsconfig.json            # TypeScript 설정 (paths: @/* → ./src/*)
└── .gitignore
```

### 3.1 경로 별칭 (Path Alias)

- **`@/*`** → **`./src/*`**
- 예: `import Sidebar from "@/components/Sidebar"`  
- 설정 위치: `tsconfig.json` → `compilerOptions.paths`

---

## 4. 라우팅 구조 (App Router)

| URL 경로 | 파일 경로 | 설명 |
|----------|-----------|------|
| `/` | `src/app/page.tsx` | 홈 |
| `/product` | `src/app/(dashboard)/product/page.tsx` | 상품 |
| `/customer` | `src/app/(dashboard)/customer/page.tsx` | 고객 |
| `/promotion` | `src/app/(dashboard)/promotion/page.tsx` | 프로모션 |
| `/channel` | `src/app/(dashboard)/channel/page.tsx` | 채널 |

- **Route Group** `(dashboard)`: URL에 포함되지 않으며, 나중에 `layout.tsx`를 두어 대시보드 전용 레이아웃을 공유할 수 있음.

---

## 5. 레이아웃 및 컴포넌트 설계

### 5.1 루트 레이아웃 (`src/app/layout.tsx`)

- **역할**: 전체 페이지 공통 구조
- **구성**:
  - `Sidebar`: 좌측 고정 (220px, #1e293b 배경)
  - `main`: 우측 콘텐츠 영역 (`flex: 1`, `padding: 20`)
- **주의**: 현재 `{children}`이 두 번 렌더링되고 있음 → 하나만 두고 `main` 안에만 넣는 것이 의도에 맞음.

### 5.2 Sidebar (`src/components/Sidebar.tsx`)

- **역할**: 앱 전체 네비게이션
- **기술**: `styled-components` (Aside), `next/link`로 클라이언트 내비게이션
- **메뉴 항목** (상수 `menus`):
  - Home `/`
  - Product `/product`
  - Customer `/customer`
  - Promotion `/promotion`
  - Channel `/channel`

### 5.3 페이지 컴포넌트

- **홈** (`app/page.tsx`): `"use client"` 사용, 현재 "Home Page" 텍스트만 표시
- **대시보드 페이지들** (product, customer, promotion, channel): 각각 해당 도메인명 + "Page" 텍스트 표시 (추가 기능 확장 예정)

---

## 6. 스타일링 전략

| 방식 | 사용처 | 비고 |
|------|--------|------|
| **globals.css** | 전역 리셋, CSS 변수, 다크모드 미디어쿼리 | `:root`, `body`, `*`, `a` 등 |
| **styled-components** | Sidebar (Aside) | 컴포넌트 단위 스타일 |
| **인라인 style** | 레이아웃 flex/패딩, Sidebar 내부 간격 | 빠른 프로토타입용 |
| **CSS Modules** | `page.module.css` | 페이지 단위 스타일 (선택) |

- **테마**: `globals.css`의 `--background`, `--foreground` 및 `prefers-color-scheme: dark` 지원.

---

## 7. 설정 파일 요약

| 파일 | 역할 |
|------|------|
| **package.json** | `sales_frontend`, Next/React/styled-components/TS 의존성, `dev`/`build`/`start`/`lint` 스크립트 |
| **tsconfig.json** | ES2017, strict, `@/*` → `./src/*`, Next 플러그인 |
| **next.config.ts** | Next.js 옵션 (현재 기본값) |
| **eslint.config.mjs** | ESLint + Next 권장 설정 |

---

## 8. 확장 및 개발 가이드

### 8.1 새 페이지 추가

1. `src/app/(dashboard)/[기능명]/page.tsx` 생성 (또는 새 Route Group 생성).
2. `src/components/Sidebar.tsx`의 `menus` 배열에 `{ path: "/경로", label: "표시명" }` 추가.

### 8.2 공통 컴포넌트 배치

- **경로**: `src/components/` (예: `Button.tsx`, `Table.tsx`, `Modal.tsx`).
- **임포트**: `import X from "@/components/X"`.

### 8.3 API/데이터 계층 (추가 시 권장)

- `src/lib/` 또는 `src/services/`: API 클라이언트, 유틸 함수.
- `src/hooks/`: 데이터 페칭/상태용 커스텀 훅.
- `src/types/`: 공통 TypeScript 타입/인터페이스.

### 8.4 상태 관리 (추가 시)

- 전역 상태가 필요하면 React Context, Zustand, TanStack Query 등 도입 시 `src/store/` 또는 `src/context/` 등으로 분리 권장.

---

## 9. 알려진 이슈 및 개선 제안

| 항목 | 내용 |
|------|------|
| **레이아웃 중복 렌더** | `layout.tsx`에서 `{children}`이 두 번 사용됨. 콘텐츠는 `<main>` 안에만 한 번 렌더하도록 수정 권장. |
| **dashboard 레이아웃 미사용** | `(dashboard)` 그룹에 `layout.tsx` 없음. 대시보드 공통 헤더/푸터가 필요하면 해당 폴더에 `layout.tsx` 추가 권장. |
| **접근성/시맨틱** | Sidebar에 `nav`, `aria-label` 등 추가 시 유지보수 및 접근성 개선에 유리. |

---

## 10. 실행 및 빌드

```bash
# 개발 서버 (기본 http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린트
npm run lint
```

---

*이 문서는 프로젝트 구조와 설계를 Cursor 및 개발자가 빠르게 파악할 수 있도록 정리한 것입니다. 구조가 변경되면 이 문서를 함께 업데이트하는 것을 권장합니다.*
