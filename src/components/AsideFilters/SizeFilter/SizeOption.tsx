import React from "react";
import { Sizes } from "../../../hooks/useProducts";

interface SizeOptionProps {
  size: Sizes;
  isChecked: boolean;
  setChecked: () => void;
}

const SizeOption = ({ size, isChecked, setChecked }: SizeOptionProps) => {
  return (
    <div
      onClick={() => setChecked()}
      className={`${isChecked ? "size-option-checked" : "size-option"}`}
    >
      {size}
    </div>
  );
};

export default SizeOption;
