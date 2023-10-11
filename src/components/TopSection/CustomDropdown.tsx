import React, { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { OptionFilter } from "../../ts/OptionFilter";
import { organizationOptions } from "../../utils/FiltersArrays";

const CustomDropdown = () => {
  const { updateOptionFilter } = useProducts();
  const [isOpen, setIsOpen] = useState(false);

  let customDropdown;

  if (isOpen) {
    customDropdown = (
      <>
        <ul className="custom-dropdown">
          {organizationOptions.map((option, id) => {
            return (
              <li key={`option-${id}`}>
                <button
                  className="organize-options-btn"
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    updateOptionFilter(option.value as OptionFilter);
                  }}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  return (
    <div className="dropdown-container">
      <button
        className="default-button"
        type="button"
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        Ordernar por:
        <span>
          <img src="../../img/Vector1.png" />
        </span>
      </button>

      {customDropdown}
      {isOpen ? (
        <div className="dropdown-backdrop" onClick={() => setIsOpen(false)} />
      ) : null}
    </div>
  );
};

export default CustomDropdown;
