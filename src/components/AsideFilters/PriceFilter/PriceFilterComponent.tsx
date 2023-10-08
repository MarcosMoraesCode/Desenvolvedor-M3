import React, { useState } from "react";
import PriceOption from "./PriceOption";

const PriceFilterComponent = () => {
  const [checked, setChecked] = useState(-1);

  const priceOptions = [
    { id: "price50", legend: "de R$0 até R$50", limit: "50" },
    { id: "price150", legend: "de R$51 até R$150", limit: "150" },
    { id: "price300", legend: "de R$151 até R$300", limit: "300" },
    { id: "price500", legend: "de R$301 até R$500", limit: "500" },
    { id: "price999", legend: "a partir de R$500", limit: "999" },
  ];

  return (
    <div className="price-filter">
      <h1>FAIXA DE PREÇO</h1>
      <div className="checkbox-prices">
        {priceOptions.map((option, id) => {
          return (
            <PriceOption
              key={`price-${option.id}-${id}}`}
              id={`id-${id}`}
              legend={option.legend}
              isChecked={id === checked}
              setChecked={() =>
                id !== checked ? setChecked(id) : setChecked(-1)
              }
              value={option.limit}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PriceFilterComponent;
