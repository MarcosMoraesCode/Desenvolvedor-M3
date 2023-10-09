import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { OptionFilter } from "../../ts/OptionFilter";

const TopSection = () => {
  const { updateOptionFilter } = useProducts();

  const selectHandler = (value: OptionFilter) => {
    updateOptionFilter(value);
  };

  return (
    <section className="top-section">
      <h1>Blusas</h1>
      <select
        onChange={(e) => {
          selectHandler(e.currentTarget.value as OptionFilter);
        }}
      >
        <option disabled selected value="none">
          Ordernar por:
        </option>
        <option value="recent">Mais recentes</option>
        <option value="cheaper">Menor preço</option>
        <option value="expensive">Maior preço</option>
      </select>
    </section>
  );
};

export default TopSection;
