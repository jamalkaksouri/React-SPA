import { NavLink } from "react-router-dom";

const items = [
  { name: "Dashboard", to: "/profile/dashboard" },
  { name: "Downloads", to: "/profile/downloads" },
];

const SideBar = () => {
  return (
    <aside>
      <ul>
        {items.map((tab) => {
          return (
            <li className="nested">
              <NavLink
                to={tab.to}
                className={(tabLink) => (tabLink.isActive ? "activeTab" : "")}
              >
                {tab.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
