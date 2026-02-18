/**
 * ============================================
 * Sidebar 컴포넌트 — 공통 좌측 메뉴
 * ============================================
 *
 * 앱 전체에서 공통으로 쓰는 "좌측 네비게이션 바"입니다.
 * layout.tsx에서 한 번만 불러오면 모든 페이지에 나타납니다.
 *
 * 사용 기술:
 * - React: UI 구성
 * - styled-components: <Aside>처럼 태그에 스타일을 붙인 "스타일드 컴포넌트"로 사용
 * - next/link: 페이지 이동 시 전체 새로고침 없이 클라이언트에서만 이동 (SPA 경험)
 */

import React from "react";
import styled from "styled-components";
import Link from "next/link";

/**
 * 메뉴 목록 데이터
 * path: 이동할 URL 경로
 * label: 사이드바에 보여줄 글자
 * 새 메뉴를 추가할 때는 여기에 항목만 추가하면 됩니다.
 */
const menus = [
  { path: "/", label: "Home" },
  { path: "/product", label: "Product" },
  { path: "/customer", label: "Customer" },
  { path: "/promotion", label: "Promotion" },
  { path: "/channel", label: "Channel" },
];

/**
 * styled-components로 만든 <aside> 스타일
 * - 백틱(`) 안에 일반 CSS처럼 작성합니다.
 * - 이 컴포넌트는 고유한 클래스명으로 렌더되므로 다른 .aside와 스타일이 섞이지 않습니다.
 */
const Aside = styled.aside`
  width: 220px;
  background-color: #1e293b;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => {
  return (
    <Aside>
      {/* 앱 제목 */}
      <h2 style={{ marginBottom: 20 }}>Sales System</h2>
      {/* 메뉴 리스트. listStyle 제거로 불릿 없음, flex:1로 아래쪽까지 공간 채움 */}
      <ul style={{ listStyle: "none", padding: 0, flex: 1 }}>
        {menus.map((item) => (
          <li key={item.path} style={{ marginBottom: 12 }}>
            {/* Next.js Link: href로 이동 경로, 클릭 시 클라이언트 라우팅 */}
            <Link
              href={item.path}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Aside>
  );
};

export default Sidebar;
