import React from "react";

const PriceFilterComponent = () => {
  return (
    <div className="price-filter">
      <h1>FAIXA DE PREÇO</h1>
      <div className="checkbox-prices">
        <div>
          <input type="checkbox" id="price50" name="range" />
          <label htmlFor="price50">de R$0 até R$50</label>
        </div>
        <div>
          <input type="checkbox" id="price150" name="range" />
          <label htmlFor="price150">de R$51 até R$150</label>
        </div>
        <div>
          <input type="checkbox" id="price300" name="range" />
          <label htmlFor="price300">de R$151 até R$300</label>
        </div>
        <div>
          <input type="checkbox" id="price500" name="range" />
          <label htmlFor="price500">de R$301 até R$500</label>
        </div>
        <div>
          <input type="checkbox" id="price999" name="range" />
          <label htmlFor="price999">a partir de R$500 </label>
        </div>
      </div>
    </div>
  );
};

export default PriceFilterComponent;
