import { NavLink } from "react-router-dom";

const items = [
  { name: "Home", to: "/", exact: "true" },
  { name: "AboutUs", to: "/about-us" },
  { name: "Profile", to: "/profile" },
];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to} className={item.isActive ? "liactive" : ""}>
              <NavLink
                to={item.to}
                className={(navData) => (navData.isActive ? "activeLink" : "")}
                exact={item.exact || "false"}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
