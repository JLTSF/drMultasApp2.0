import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../services/Api/Api";
import { AxiosResponse } from "axios";
import { Slide } from "../../components/Slide";
import "./style.css";

type Model = {
  nome: string;
  codigo: string;
};

type BrandParams = {
  brand: string;
};

export const Brand = () => {
  const [carsModel, setCarsModel] = useState<Model[]>();
  const params = useParams<BrandParams>();

  const brand = params.brand;
  useEffect(() => {
    api
      .get(`/carros/marcas/${brand}/modelos`)
      .then((response: AxiosResponse) => {
        setCarsModel(response.data.modelos);
      });
  }, []);

  if (!carsModel) {
    return (
      <>
        <Header />
        <Slide />
        <Link to="/">Voltar</Link>
        <p>Nada aqui brother</p>
      </>
    );
  }

  return (
    <>
      <div className="container-brand">
        <Header />
        <Slide />
        <Link to="/">Voltar</Link>
        <div className="box-brand">
          {carsModel.map(({ nome }, index) => (
            <p key={index}>{nome}</p>
          ))}
        </div>
      </div>
    </>
  );
};
