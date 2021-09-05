import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import "./style.css";

type ListProps = {
  title: string;
  data: BrandT[];
};

type BrandT = {
  nome: string;
  codigo: string;
};

export const ListBar = ({ title, data }: ListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
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
            {data.map(({ nome }, index) => (
              <p key={index}>{nome}</p>
            ))}
          </div>
        ) : (
          <div className="list disabled"></div>
        )}
      </div>
    </>
  );
};
