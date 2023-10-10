import React, { useState } from "react";
import OrganizeDrawer from "./Mobile/OrganizeDrawer";
import FiltersDrawer from "./Mobile/FiltersDrawer";

const MobileFilters = () => {
  const [openOrganizeDrawer, setOrganizeDrawer] = useState(false);
  const [openFiltersDrawer, setFiltersDrawer] = useState(false);

  function closeOrganizeDrawerHandler() {
    setOrganizeDrawer(false);
  }

  function closeFiltersDrawerHandler() {
    setFiltersDrawer(false);
  }
  return (
    <div className="mobile-filter">
      <button
        onClick={() => {
          setFiltersDrawer(true);
        }}
      >
        Filtrar
      </button>
      <button
        className="no-border"
        onClick={() => {
          setOrganizeDrawer(true);
        }}
      >
        Ordenar
      </button>
      {openOrganizeDrawer ? (
        <OrganizeDrawer closeDrawer={closeOrganizeDrawerHandler} />
      ) : null}

      <FiltersDrawer
        isOpen={openFiltersDrawer}
        closeDrawer={closeFiltersDrawerHandler}
      />
    </div>
  );
};

export default MobileFilters;
