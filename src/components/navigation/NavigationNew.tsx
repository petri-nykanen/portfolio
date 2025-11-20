import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  pathName: string[];
}

const NavigationNew = ({ pathName }: Props) => {
  return (
    <nav id="nav" style={{ textAlign: "center", padding: "10px 0" }}>
      {pathName.map((path) => (
        <NavLink
          key={path}
          to={`/portfolio/${path.length > 0 ? path : ""}`}
          style={{
            margin: "0 10px",
            color: "white",
            textDecoration: "none",
            textShadow: "1px 1px 2px black",
          }}
        >
          {path.length ? path.charAt(0).toUpperCase() + path.slice(1) : "Home"}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavigationNew;
