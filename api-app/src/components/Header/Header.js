import React from "react";

import { Link } from "react-router-dom";

import Back from "../../images/back-button.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={Back} alt="arrow-left" style={{ width: "50px" }}></img>
        </Link>
      </div>
    </header>
  );
}

export default Header;
