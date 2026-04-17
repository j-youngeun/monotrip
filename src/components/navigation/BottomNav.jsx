import { NavLink } from "react-router-dom";

const navItems = [
  {
    to: "/",
    label: "홈",
    icon: "https://www.figma.com/api/mcp/asset/ecf7fa1a-5236-4917-885b-e5b09aef91ce",
  },
  {
    to: "/explore",
    label: "탐색",
    icon: "https://www.figma.com/api/mcp/asset/d72349e5-26c5-4788-b565-7860c057074d",
  },
  {
    to: "/shorts",
    label: "숏츠",
    icon: "https://www.figma.com/api/mcp/asset/d50b3c89-5638-4b84-946e-c0857873acd2",
  },
  {
    to: "/community",
    label: "커뮤니티",
    icon: "https://www.figma.com/api/mcp/asset/eabdb260-4a7e-4e54-8c3f-f3bd2b0cd86c",
  },
  {
    to: "/profile",
    label: "마이페이지",
    icon: "https://www.figma.com/api/mcp/asset/b4829ee8-9791-420d-b9db-ec11d5a8dbdb",
  },
];

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="주요 메뉴">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive ? "bottom-nav__item is-active" : "bottom-nav__item"
          }
        >
          <img
            className="bottom-nav__image"
            src={item.icon}
            alt={item.label}
            loading="lazy"
          />
        </NavLink>
      ))}
    </nav>
  );
}
