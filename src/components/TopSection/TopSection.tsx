import React from "react";

const TopSection = () => {
  return (
    <section className="top-section">
      <h1>Blusas</h1>
      <select>
        <option>Mas recentes</option>
        <option>Menor preço</option>
        <option>Maior preço</option>
      </select>
    </section>
  );
};

export default TopSection;
