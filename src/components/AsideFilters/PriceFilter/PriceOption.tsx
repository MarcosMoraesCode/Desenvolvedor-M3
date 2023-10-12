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
        id={`price-${id}`}
        name="range"
        onChange={setChecked}
        checked={isChecked}
        value={value}
      />
      <label htmlFor={`price-${id}`}>{legend}</label>
    </div>
  );
};

export default PriceOption;
