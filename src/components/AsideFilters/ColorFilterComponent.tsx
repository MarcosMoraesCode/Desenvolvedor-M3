import React from "react";
import ColorOption from "./ColorOption";

//Criar um db para fazer o map e otimizar, aprimorar
const ColorFilterComponent = () => {
  const colors = [
    "Amarelo",
    "Azul",
    "Branco",
    "Cinza",
    "Laranja",
    "Verde",
    "Vermelho",
    "Preto",
    "Rosa",
    "Vinho",
  ];

  return (
    <div className="color-filter">
      <h1>CORES</h1>
      <ul className="checkbox-colors">
        {colors.map((color, id) => {
          return <ColorOption color={color} key={`color-${color}-${id}`} />;
        })}
      </ul>
    </div>
  );
};

export default ColorFilterComponent;
