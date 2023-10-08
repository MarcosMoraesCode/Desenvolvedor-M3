import React, { useState } from "react";
import SizeOption from "./SizeOption";

const SizeFilterComponent = () => {
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

  return (
    <div className="size-filter">
      <h1>TAMANHOS</h1>
      <div className="size-selection-container">
        {sizeFilters.map((sizeFilter, id) => {
          return (
            <SizeOption
              key={`size-${id}`}
              size={sizeFilter}
              setChecked={() => setChecked(id)}
              isChecked={id === checked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SizeFilterComponent;
