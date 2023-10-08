import React from "react";

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
  return (
    <div className="price-input-options">
      <input
        type="checkbox"
        id={id}
        name="range"
        onChange={setChecked}
        checked={isChecked}
        value={value}
      />
      <label htmlFor={id}>{legend}</label>
    </div>
  );
};

export default PriceOption;
