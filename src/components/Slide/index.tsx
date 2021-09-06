import React from "react";

import "./style.css";

import left2 from "../../assets/left2.svg";
import right from "../../assets/right.svg";

export const Slide = () => {
  return (
    <div className="container-slide">
      <div>
        <img src={left2} alt="" />
      </div>
      <div>
        <p>Pesquise aqui o</p>
        <p>seu veículo</p>
      </div>
    </div>
  );
};
