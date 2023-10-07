import React from "react";
import AsideFilters from "../AsideFilters/AsideFilters";
import ProductCard from "../Product/ProductCard";

const ProductSection = () => {
  return (
    <section className="products-section">
      <div className="products-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="load-btn-wrapper">
        <button className="load-products-btn" type="button">
          CARREGAR MAIS
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
