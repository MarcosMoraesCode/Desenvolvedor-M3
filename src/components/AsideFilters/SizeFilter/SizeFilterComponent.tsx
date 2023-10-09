import React, { useState } from "react";
import SizeOption from "./SizeOption";
import { Sizes, useProducts } from "../../../hooks/useProducts";
import { filterBySize } from "../../../utils/OptionFilters";

const SizeFilterComponent = () => {
  const {
    updateSelectedSize,
    products,
    updateProducts,
    optionFilter,
    selectedColors,
  } = useProducts();

  const [checked, setChecked] = useState(-1);

  const sizeFilters = [
    "P",
    "M",
    "G",
    "GG",
    "U",
    "36",
    "38",
    "40",
    "36",
    "38",
    "40",
  ];

  const onClickHandler = (id: number, size: Sizes) => {
    if (checked !== id) {
      setChecked(id);
      updateSelectedSize(size);
      updateProducts(optionFilter, selectedColors, size);
    } else {
      setChecked(-1);
      updateSelectedSize("none");
      updateProducts(optionFilter, selectedColors, "none");
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
