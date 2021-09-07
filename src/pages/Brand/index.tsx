import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../services/Api/Api";
import { AxiosResponse } from "axios";
import { Slide } from "../../components/Slide";
import "./style.css";

import { collect } from "collect.js";

type Model = {
  nome: string;
  codigo: string;
};

type BrandParams = {
  brand: string;
  type: string;
  id: string;
};

export const Brand = () => {
  const [carsModel, setCarsModel] = useState<Model[]>();
  const params = useParams<BrandParams>();
  const brand = params.brand;
  const type = params.type;
  const id = params.id;

  useEffect(() => {
    api.get(`/${type}/marcas/${id}/modelos`).then((response: AxiosResponse) => {
      setCarsModel(response.data.modelos);
    });
  }, []);

  if (!carsModel) {
    return (
      <>
        <Header />
        <Slide />

        <svg
          className="spinner-brand"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="25 25 50 50"
        >
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="5"
            stroke="#0b3a5e"
            strokeLinecap="round"
            strokeDashoffset="0"
            strokeDasharray="100, 200"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              values="0;-30;-124"
              dur="1.25s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dasharray"
              values="0,200;110,200;110,200"
              dur="1.25s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </>
    );
  }

  const items = collect(carsModel)
    .reverse()
    .map((item) => item);

  return (
    <>
      <div className="container-brand">
        <Header />
        <Slide />
        <div className="back">
          <Link to="/">Voltar</Link>
        </div>
        <div className="back">
          <p>{brand}</p>
        </div>
        <div className="box-brand">
          {items.map(({ nome }, index) => (
            <p key={index}>{nome}</p>
          ))}
        </div>
      </div>
    </>
  );
};
