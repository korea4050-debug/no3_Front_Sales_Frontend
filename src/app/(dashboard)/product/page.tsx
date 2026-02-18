/**
 * ============================================
 * 상품(Product) 페이지 — URL: /product
 * ============================================
 *
 * Next.js App Router 규칙:
 * - "(dashboard)" 는 "Route Group"이라서 URL에 포함되지 않습니다.
 *   즉, 이 파일의 경로는 /product 이지 /dashboard/product 가 아닙니다.
 * - app/(dashboard)/product/page.tsx → /product 로 접근합니다.
 *
 * page.tsx 파일명은 반드시 "page"여야 해당 폴더가 라우트가 됩니다.
 * 여기에 상품 목록, 등록, 수정 등 UI를 추가하면 됩니다.
 */

import React from "react";

const Page = () => {
  return (
    <div>
      Product Page
    </div>
  );
};

export default Page;
