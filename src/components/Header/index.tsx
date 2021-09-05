import React from "react";
import "./style.css";

import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <div id="container-header">
      <img src={logo} alt="DR MULTAS" />
    </div>
  );
};
