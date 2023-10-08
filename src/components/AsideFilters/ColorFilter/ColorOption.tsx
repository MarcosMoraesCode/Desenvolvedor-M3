import React from "react";

interface InputColorProps {
  color: string;
  setColor: () => void;
}

const ColorInputOption = ({ color, setColor }: InputColorProps) => {
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

export default ColorInputOption;
