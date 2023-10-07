import React from "react";
import ColorFilterComponent from "./ColorFilterComponent";
import SizeFilterComponent from "./SizeFilterComponent";
import PriceFilterComponent from "./PriceFilterComponent";

const AsideFilters = () => {
  return (
    <aside>
      <ColorFilterComponent />
      <SizeFilterComponent />
      <PriceFilterComponent />
    </aside>
  );
};

export default AsideFilters;
