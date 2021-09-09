import React, { useEffect, useState } from "react";
// Importa a funcionalidade do react responsavel por detectar mudança de status no HTML
import { Header } from "../../components/Header";

import { api } from "../../services/Api/Api";
// Importa o resultado da chamada ja em JSON
import { AxiosResponse } from "axios";

import { Slide } from "../../components/Slide";

import { ListBar } from "../../components/ListBar";

import { Spinner } from "../../components/Spinner";

import "./style.css";

type BrandT = {
  nome: string;
  codigo: string;
};

export const Home = () => {
  const [carsBrand, setCarsBrand] = useState<BrandT[]>();
  const [bikesBrand, setBikesBrand] = useState<BrandT[]>();
  const [trucksBrand, setTrucksBrand] = useState<BrandT[]>();

  useEffect(() => {
    api.get("/carros/marcas").then((response: AxiosResponse) => {
      setCarsBrand(response.data);
    });
    api.get("/motos/marcas").then((response: AxiosResponse) => {
      setBikesBrand(response.data);
    });
    api.get("/caminhoes/marcas").then((response: AxiosResponse) => {
      setTrucksBrand(response.data);
    });
  }, []);

  if (!carsBrand || !bikesBrand || !trucksBrand) {
    return (
      <>
        <div className="spinner-home">
          <Spinner />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container-home">
        <Header />
        <Slide />
        <div className="box">
          <ListBar type="carros" title="Carros" data={carsBrand} />
          <ListBar type="motos" title="Motos" data={bikesBrand} />
          <ListBar type="caminhoes" title="Caminhões" data={trucksBrand} />
        </div>
      </div>
    </>
  );
};
