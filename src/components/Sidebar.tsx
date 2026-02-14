import React from "react";
import styled from "styled-components"
import Link from 'next/link';

const menus = [
    {path: "/", label: "Home"},
    {path: "/product", label: "Product"},
    {path: "/customer", label: "Customer"},
    {path: "/promotion", label: "Promotion"},
    {path: "/channel", label: "Channel"},
]

const Aside = styled.aside`
    width: 220px;
    background-color: #1e293b;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
`

const Sidebar = () => {
    return (
        <Aside>
            <h2 style={{marginBottom: 20}}>Sales System</h2>
            <ul style={{listStyle: 'none', padding: 0, flex: 1}}>
                {menus.map((item) => (
                    <li key={item.path} style={{marginBottom: 12}}>
                        <Link
                            href={item.path}
                            style={{color: "#fff", textDecoration: "none"}}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </Aside>
    )
}

export default Sidebar;