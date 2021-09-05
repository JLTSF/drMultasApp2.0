import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../services/Api/Api";
import { AxiosResponse } from "axios";
import { Slide } from "../../components/Slide";
import { ListBar } from "../../components/ListBar";
import "./style.css";

type BrandT = {
  nome: string;
  codigo: string;
};

export const Home = () => {
  const [carsBrand, setCarsBrand] = useState<BrandT[]>();
  const [bikesBrand, setBikesBrand] = useState<BrandT[]>();
  const [truckBrand, setTruckBrand] = useState<BrandT[]>();

  useEffect(() => {
    api.get("/carros/marcas").then((response: AxiosResponse) => {
      setCarsBrand(response.data);
    });
    api.get("/motos/marcas").then((response: AxiosResponse) => {
      setBikesBrand(response.data);
    });
    api.get("/caminhoes/marcas").then((response: AxiosResponse) => {
      setTruckBrand(response.data);
    });
  }, []);

  if (!carsBrand || !bikesBrand || !truckBrand) {
    return (
      <>
        <Header />
        <p>Nada aqui brother</p>
      </>
    );
  }

  return (
    <>
      <div className="container-home">
        <Header />
        <Slide />
        <div className="box">
          <ListBar title="Carros" data={carsBrand} />
          <ListBar title="Motos" data={bikesBrand} />
          <ListBar title="Caminhões" data={truckBrand} />
        </div>
      </div>
    </>
  );
};
