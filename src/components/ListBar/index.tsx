import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./style.css";

type ListProps = {
  title: string;
  type: string;
  data: BrandT[];
};

type BrandT = {
  nome: string;
  codigo: string;
};

export const ListBar = ({ title, data, type }: ListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen ? (
        <div className="container-listbar">
          <div className="title">
            <p>{title}</p>
            <button onClick={() => toggleMenu()}>
              {isOpen ? (
                <IoMdArrowDropup size="2rem" color="#fff" />
              ) : (
                <IoMdArrowDropdown size="2rem" color="#fff" />
              )}
            </button>
          </div>

          {isOpen ? (
            <div className="list">
              {data.map(({ nome, codigo }, index) => (
                <NavLink
                  to={`/brand/${type}/${nome}/${codigo}`}
                  key={index}
                  className="link"
                >
                  {nome}
                </NavLink>
              ))}
            </div>
          ) : (
            <div className="list disabled"></div>
          )}
        </div>
      ) : (
        <div className="container-listbar disabled">
          <div className="title">
            <p>{title}</p>
            <button onClick={() => toggleMenu()}>
              {isOpen ? (
                <IoMdArrowDropup size="2rem" color="#fff" />
              ) : (
                <IoMdArrowDropdown size="2rem" color="#fff" />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
