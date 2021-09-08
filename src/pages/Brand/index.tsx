import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../services/Api/Api";
import { AxiosResponse } from "axios";
import { Slide } from "../../components/Slide";
import { Spinner } from "../../components/Spinner";
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
        <div className="spinner-brand">
          <Spinner />
        </div>
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
