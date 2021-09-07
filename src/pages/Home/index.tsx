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
        {/* <Header /> */}
        <svg
          className="spinner-home"
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
