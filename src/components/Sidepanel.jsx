import React from "react";
import SidepanelLink from "./SidepanelLink";

function Sidepanel() {
  return (
    <>
      <div className="sidebar d-flex flex-column flex-shrink-0">
        <div className="authorDiv">Jean Neymar</div>

        <SidepanelLink to="/">Accueil</SidepanelLink>
        <SidepanelLink to="/about">A Propos</SidepanelLink>
        <SidepanelLink to="/books">Oeuvres</SidepanelLink>
      </div>
    </>
  );
}

export default Sidepanel;
