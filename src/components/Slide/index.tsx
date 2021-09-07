import React from "react";

import "./style.css";

import slide1 from "../../assets/slide1.svg";

export const Slide = () => {
  return (
    <div className="container-slide">
      <div>
        <img src={slide1} alt="" />
      </div>
      <div>
        <p>Pesquise aqui o</p>
        <p>seu veículo</p>
      </div>
    </div>
  );
};
