import React from "react";

interface InputColorProps {
  color: string;
}

const ColorInputOption = ({ color }: InputColorProps) => {
  const colorToLowerCase = color.toLowerCase();

  return (
    <li className="color-input-options">
      <input type={"checkbox"} id={colorToLowerCase} name={colorToLowerCase} />
      <label htmlFor={colorToLowerCase}>{color}</label>
    </li>
  );
};

export default ColorInputOption;
