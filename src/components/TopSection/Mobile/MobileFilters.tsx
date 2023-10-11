import React, { useState } from "react";
import OrganizeDrawer from "./OrganizeDrawer";
import FiltersDrawer from "./FiltersDrawer";

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
        className="with-border"
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
