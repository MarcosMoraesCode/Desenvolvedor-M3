import React from "react";
import { Prices } from "../../../ts/Prices";
import { getScreenSize } from "../../../utils/SizeChecker";

interface InputPricesProps {
  legend: string;
  id: string;
  setChecked: () => void;
  isChecked: boolean;
  value: string;
}

const PriceOption = ({
  legend,
  id,
  isChecked,
  setChecked,
  value,
}: InputPricesProps) => {
  const size = getScreenSize()?.toLocaleLowerCase();

  return (
    <div className="price-input-options">
      <input
        type="checkbox"
        id={`price-${id}-${size}`}
        name="range"
        onChange={setChecked}
        checked={isChecked}
        value={value}
      />
      <label htmlFor={`price-${id}-${size}`}>{legend}</label>
    </div>
  );
};

export default PriceOption;
