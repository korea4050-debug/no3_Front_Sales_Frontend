# package.json 설명 (초보 개발자용)

> JSON 형식은 주석(//)을 지원하지 않아, 여기서 각 항목을 설명합니다.

## 파일 위치

`package.json` — 프로젝트 루트

---

## 주요 필드

### name, version, private

- **name**: `"sales_frontend"` — 프로젝트 이름 (npm에 배포하지 않으면 크게 상관 없음)
- **version**: `"0.1.0"` — 버전 번호
- **private**: `true` — npm에 실수로 배포되지 않도록 설정

---

### scripts (npm run 명령어)

| 명령어 | 실행 내용 |
|--------|-----------|
| `npm run dev` | `next dev` — 개발 서버 실행 (http://localhost:3000) |
| `npm run build` | `next build` — 프로덕션용 빌드 |
| `npm run start` | `next start` — 빌드된 앱 실행 |
| `npm run lint` | `eslint` — 코드 스타일/오류 검사 |

사용 예: 터미널에서 `npm run dev` 입력 시 개발 서버가 켜집니다.

---

### dependencies (실제 앱 동작에 필요한 패키지)

| 패키지 | 역할 |
|--------|------|
| **next** | Next.js 프레임워크 (라우팅, 서버/클라이언트 렌더링 등) |
| **react** | UI 라이브러리 (컴포넌트, 상태 등) |
| **react-dom** | React를 브라우저 DOM에 그리기 위한 패키지 |
| **styled-components** | CSS-in-JS — 컴포넌트에 스타일을 붙여서 사용 |

`npm install` 시 이 패키지들이 설치됩니다.

---

### devDependencies (개발할 때만 필요한 패키지)

| 패키지 | 역할 |
|--------|------|
| **@types/node** | Node.js 환경 타입 정의 (TypeScript용) |
| **@types/react** | React 타입 정의 |
| **@types/react-dom** | React DOM 타입 정의 |
| **eslint** | 린터 (코드 품질 검사) |
| **eslint-config-next** | Next.js 권장 ESLint 규칙 |
| **typescript** | TypeScript 컴파일러·언어 지원 |

`npm run build`나 `npm run dev` 할 때 사용되며, 사용자에게 배포되는 번들에는 포함되지 않습니다.

---

## 버전 표기 (^ 의미)

- `"next": "^16.1.6"` → 16.1.6 이상, 17.0.0 미만까지 자동 업데이트 허용
- `npm install` 할 때 이 범위 안에서 최신 버전이 설치됩니다.
