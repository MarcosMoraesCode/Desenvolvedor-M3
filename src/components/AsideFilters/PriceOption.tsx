import React from "react";

interface InputPricesProps {
  legend: string;
  id: string;
}

const PriceOption = ({ legend, id }: InputPricesProps) => {
  return (
    <div className="price-input-options">
      <input type="checkbox" id={id} name="range" />
      <label htmlFor={id}>{legend}</label>
    </div>
  );
};

export default PriceOption;
