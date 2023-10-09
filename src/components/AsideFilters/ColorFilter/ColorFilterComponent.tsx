import React, { useEffect, useState } from "react";
import ColorOption from "./ColorOption";
import { updateColors } from "../../../utils/OptionFilters";
import { useProducts } from "../../../hooks/useProducts";

const ColorFilterComponent = () => {
  const {
    selectedColors,
    selectedPrice,
    updateSelectedColors,
    updateProducts,
    optionFilter,
    selectedSize,
  } = useProducts();

  const onSelectionHandler = (color: string) => {
    const newColors = updateColors(color, selectedColors);
    updateSelectedColors(newColors);
    updateProducts(optionFilter, newColors, selectedSize, selectedPrice);
  };

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
          return (
            <ColorOption
              color={color}
              key={`color-${color}-${id}`}
              setColor={() => onSelectionHandler(color)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ColorFilterComponent;
