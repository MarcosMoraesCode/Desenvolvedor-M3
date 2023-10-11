import React from "react";
import { getScreenSize } from "../../../utils/SizeChecker";

interface ColorOptionProps {
  color: string;
  setColor: () => void;
}

const ColorOption = ({ color, setColor }: ColorOptionProps) => {
  const colorToLowerCase = color.toLowerCase();

  const size = getScreenSize()?.toLocaleLowerCase();

  return (
    <li className="color-input-options">
      <input
        type={"checkbox"}
        id={`${size}-${colorToLowerCase}`}
        name={colorToLowerCase}
        onChange={setColor}
      />
      <label htmlFor={`${size}-${colorToLowerCase}`}>{color}</label>
    </li>
  );
};

export default ColorOption;
