import React from "react";
import { organizationOptions } from "../../../utils/FiltersArrays";
import { OptionFilter } from "../../../ts/Typing";
import { useProducts } from "../../../hooks/useProducts";

type OrganizeDrawerProps = {
  closeDrawer: () => void;
};

const OrganizeDrawer = ({ closeDrawer }: OrganizeDrawerProps) => {
  const { updateOptionFilter } = useProducts();

  return (
    <div className="organize-drawer">
      <header className="drawer-header">
        <h2>ORDENAR</h2>{" "}
        <button onClick={closeDrawer} className="close-btn">
          <img src="../../../img/close_btn.png" alt="close button" />
        </button>
      </header>
      <ul>
        {organizationOptions.map((option, id) => {
          return (
            <li key={`option-${id}`}>
              <button
                className="organize-drawer-btn"
                type="button"
                onClick={() => {
                  closeDrawer();
                  updateOptionFilter(option.value as OptionFilter);
                }}
              >
                {option.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OrganizeDrawer;
