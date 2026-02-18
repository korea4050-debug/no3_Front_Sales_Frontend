/**
 * ============================================
 * 루트 레이아웃 (Root Layout)
 * ============================================
 *
 * Next.js App Router에서 "모든 페이지에 공통으로 적용되는 레이아웃"입니다.
 * 이 파일이 있으면 해당 폴더(app) 아래의 모든 페이지가 이 레이아웃으로 감싸집니다.
 *
 * - children: 현재 접속한 URL에 해당하는 페이지 컴포넌트가 전달됩니다.
 *   예: /product 접속 시 → (dashboard)/product/page.tsx 내용이 children으로 옵니다.
 *
 * - 반드시 <html>과 <body>를 포함해야 하며, 한 앱에 하나만 있어야 합니다.
 */

/* 전역 스타일 적용 (CSS 변수, 리셋 등) */
import "./globals.css";
/* 좌측 네비게이션 바 컴포넌트 */
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar: 왼쪽 고정 메뉴 (Home, Product, Customer 등) */}
        <Sidebar />
        {/* main: 오른쪽 콘텐츠 영역. flex:1로 남은 공간을 모두 차지, padding으로 여백 확보 */}
        <main style={{ flex: 1, padding: 20 }}>{children}</main>
      </body>
    </html>
  );
}
