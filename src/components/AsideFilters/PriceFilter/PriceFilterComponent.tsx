import React, { useState } from "react";
import PriceOption from "./PriceOption";
import { Prices } from "../../../ts/Prices";
import { useProducts } from "../../../hooks/useProducts";

const PriceFilterComponent = () => {
  const {
    updateSelectedPrice,
    updateProducts,
    optionFilter,
    selectedColors,
    selectedSize,
  } = useProducts();
  const [checked, setChecked] = useState(-1);

  const priceOptions = [
    { id: "price50", legend: "de R$0 até R$50", limit: [0, 50] as Prices },
    { id: "price150", legend: "de R$51 até R$150", limit: [50, 150] as Prices },
    {
      id: "price300",
      legend: "de R$151 até R$300",
      limit: [150, 300] as Prices,
    },
    {
      id: "price500",
      legend: "de R$301 até R$500",
      limit: [300, 500] as Prices,
    },
    {
      id: "price999",
      legend: "a partir de R$500",
      limit: [500, 1000000] as Prices,
    },
  ];

  const onClickHandler = (id: number, price: Prices) => {
    if (checked !== id) {
      setChecked(id);
      updateSelectedPrice(price);
      updateProducts(optionFilter, selectedColors, selectedSize, price);
    } else {
      setChecked(-1);
      updateSelectedPrice("none");
      updateProducts(optionFilter, selectedColors, selectedSize, "none");
    }
  };

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
              setChecked={() => onClickHandler(id, option.limit)}
              value={option.legend}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PriceFilterComponent;
