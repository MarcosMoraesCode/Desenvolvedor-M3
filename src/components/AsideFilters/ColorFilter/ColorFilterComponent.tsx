import React, { useState } from "react";
import ColorOption from "./ColorOption";
import { updateColorsArr } from "../../../utils/OptionFilters";
import { useProducts } from "../../../hooks/useProducts";
import { colors } from "../../../utils/FiltersArrays";

const ColorFilterComponent = () => {
  const {
    selectedColors,
    selectedPrice,
    updateSelectedColors,
    updateProducts,
    optionFilter,
    selectedSize,
  } = useProducts();

  const [showAllOptions, setShowAllOptions] = useState(false);

  const onSelectionHandler = (color: string) => {
    const newColors = updateColorsArr(color, selectedColors);
    updateSelectedColors(newColors);
    updateProducts(optionFilter, newColors, selectedSize, selectedPrice);
  };

  let shownOptions;

  if (showAllOptions) {
    shownOptions = colors.map((color, id) => {
      return (
        <ColorOption
          color={color}
          key={`color-${color}-${id}`}
          setColor={() => onSelectionHandler(color)}
        />
      );
    });
  } else {
    shownOptions = colors
      .map((color, id) => {
        return (
          <ColorOption
            color={color}
            key={`color-${color}-${id}`}
            setColor={() => onSelectionHandler(color)}
          />
        );
      })
      .filter((_, id) => id < 5);
  }

  return (
    <div className="color-filter">
      <h1>CORES</h1>
      <ul className="checkbox-colors">{shownOptions}</ul>
      <button
        className={`${showAllOptions ? "hide-colors-btn" : "show-colors-btn"}`}
        onClick={() => setShowAllOptions(true)}
      >
        Ver todas as cores
        <span>
          <img src="../../img/Vector1.png" />
        </span>
      </button>
    </div>
  );
};

export default ColorFilterComponent;
