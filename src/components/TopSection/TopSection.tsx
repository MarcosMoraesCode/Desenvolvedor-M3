import React from "react";
import CustomDropdown from "./CustomDropdown";
import MobileFilters from "./Mobile/MobileFilters";

const TopSection = () => {
  return (
    <section className="top-section">
      <h1>Blusas</h1>
      <MobileFilters />
      <CustomDropdown />
    </section>
  );
};

export default TopSection;
