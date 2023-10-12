import React from "react";

interface ColorOptionProps {
  color: string;
  setColor: () => void;
}

const ColorOption = ({ color, setColor }: ColorOptionProps) => {
  const colorToLowerCase = color.toLowerCase();

  return (
    <li className="color-input-options">
      <input
        type={"checkbox"}
        id={colorToLowerCase}
        name={colorToLowerCase}
        onChange={setColor}
      />
      <label htmlFor={colorToLowerCase}>{color}</label>
    </li>
  );
};

export default ColorOption;
