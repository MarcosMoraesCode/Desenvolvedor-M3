import React, { useState } from "react";
import OrganizeDrawer from "./Mobile/OrganizeDrawer";

const MobileFilters = () => {
  const [openOrganizeDrawer, setOrganizeDrawer] = useState(false);

  function closeOrganizeDrawerHandler() {
    console.log("clicou pra fechar");
    setOrganizeDrawer(false);
  }
  return (
    <div className="mobile-filter">
      <button className="button">Filtrar</button>
      <button
        className="button"
        onClick={() => {
          setOrganizeDrawer(true);
        }}
      >
        Ordenar
      </button>
      {openOrganizeDrawer ? (
        <OrganizeDrawer closeDrawer={closeOrganizeDrawerHandler} />
      ) : null}
    </div>
  );
};

export default MobileFilters;
