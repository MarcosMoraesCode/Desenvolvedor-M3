import React, { useState } from "react";
import PriceOption from "./PriceOption";
import { Prices } from "../../../ts/Prices";
import { useProducts } from "../../../hooks/useProducts";
import { priceOptions } from "../../../utils/FiltersArrays";

const PriceFilterComponent = () => {
  const {
    updateSelectedPrice,
    updateProducts,
    optionFilter,
    selectedColors,
    selectedSize,
  } = useProducts();
  const [checked, setChecked] = useState(-1);

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
