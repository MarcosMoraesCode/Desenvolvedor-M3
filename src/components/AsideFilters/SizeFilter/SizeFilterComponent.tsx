import React, { useState } from "react";
import SizeOption from "./SizeOption";
import { useProducts } from "../../../hooks/useProducts";
import { Sizes } from "../../../ts/Sizes";
import { sizeFilters } from "../../../utils/FiltersArrays";

const SizeFilterComponent = () => {
  const {
    updateSelectedSize,
    selectedPrice,
    updateProducts,
    optionFilter,
    selectedColors,
  } = useProducts();

  const [checked, setChecked] = useState(-1);

  const onClickHandler = (id: number, size: Sizes) => {
    if (checked !== id) {
      setChecked(id);
      updateSelectedSize(size);
      updateProducts(optionFilter, selectedColors, size, selectedPrice);
    } else {
      setChecked(-1);
      updateSelectedSize("none");
      updateProducts(optionFilter, selectedColors, "none", selectedPrice);
    }
  };

  return (
    <div className="size-filter">
      <h1>TAMANHOS</h1>
      <div className="size-selection-container">
        {sizeFilters.map((sizeFilter, id) => {
          return (
            <SizeOption
              key={`size-${id}`}
              size={sizeFilter as Sizes}
              setChecked={() => onClickHandler(id, sizeFilter as Sizes)}
              isChecked={id === checked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SizeFilterComponent;
