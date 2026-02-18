/**
 * ============================================
 * 홈 페이지 (/) — app/page.tsx
 * ============================================
 *
 * Next.js App Router에서는 폴더 구조가 곧 URL입니다.
 * "app/page.tsx" 파일이 있으면 그 폴더의 경로가 "/" (루트, 홈)이 됩니다.
 *
 * "use client":
 * - 이 지시어가 있으면 이 컴포넌트는 "클라이언트 컴포넌트"로 동작합니다.
 * - 브라우저에서 JavaScript가 실행되며, useState, onClick 같은 상호작용을 사용할 수 있습니다.
 * - "use client"가 없으면 기본적으로 "서버 컴포넌트" (서버에서만 렌더, 데이터 페칭 등에 유리)
 *
 * 참고: app/page.tsx → http://localhost:3000/
 */

"use client";

export default function Home() {
  return (
    <>
      Home Page
    </>
  );
}
