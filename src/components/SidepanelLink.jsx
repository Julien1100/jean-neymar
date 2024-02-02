import React from "react";
import { Link, useLocation } from "react-router-dom";

function SidepanelLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <>
      <li className={`list-group ${isActive ? "active-link" : ""}`}>
        <Link to={to}>{children}</Link>
      </li>
    </>
  );
}

export default SidepanelLink;
