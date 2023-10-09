import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { OptionFilter } from "../../ts/OptionFilter";
import CustomDropdown from "./CustomDropdown";
import MobileFilters from "./MobileFilters";

const TopSection = () => {
  const { updateOptionFilter } = useProducts();

  const selectHandler = (value: OptionFilter) => {
    updateOptionFilter(value);
  };

  return (
    <section className="top-section">
      <h1>Blusas</h1>
      <MobileFilters />
      <CustomDropdown />
    </section>
  );
};

export default TopSection;
