/**
 * ============================================
 * ESLint 설정 (eslint.config.mjs)
 * ============================================
 *
 * ESLint는 코드 스타일·잠재적 버그를 찾아주는 "린터"입니다.
 * 이 파일에서 어떤 규칙을 쓸지, 어떤 폴더를 검사에서 제외할지 정합니다.
 *
 * - defineConfig: ESLint 9+ 플랫 설정 방식에서 설정 객체를 정의할 때 사용
 * - nextVitals: Next.js 권장 코어 웹 바이탈·접근성 관련 규칙
 * - nextTs: Next + TypeScript 프로젝트용 규칙
 * - globalIgnores: 린트 검사하지 않을 폴더/파일 (빌드 결과물 등)
 *
 * 실행: npm run lint
 */

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Next 기본 ignore를 명시적으로 설정 (필요 시 여기에 추가)
  globalIgnores([
    ".next/**",      // Next 빌드 출력
    "out/**",        // 정적 내보내기 출력
    "build/**",      // 빌드 폴더
    "next-env.d.ts", // Next 자동 생성 타입 선언
  ]),
]);

export default eslintConfig;
