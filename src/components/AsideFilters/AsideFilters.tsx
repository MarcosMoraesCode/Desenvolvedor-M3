import React from "react";
import ColorFilterComponent from "./ColorFilter/ColorFilterComponent";
import SizeFilterComponent from "./SizeFilter/SizeFilterComponent";
import PriceFilterComponent from "./PriceFilter/PriceFilterComponent";

const AsideFilters = () => {
  return (
    <aside className="aside-filters-component">
      <ColorFilterComponent />
      <SizeFilterComponent />
      <PriceFilterComponent />
    </aside>
  );
};

export default AsideFilters;
