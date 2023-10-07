import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";

const ProductSection = () => {
  const { products } = useProducts();
  const [organizedProducts, setOrganizedProducts] = useState();

  let fetchedProducts;

  if (products.length > 0) {
    fetchedProducts = products.map((product, id) => {
      return (
        <ProductCard
          key={`product-${id}`}
          name={product.name}
          color={product.color}
          date={product.date}
          id={product.id}
          image={product.image}
          parcelamento={product.parcelamento}
          price={product.price}
          size={product.size}
        />
      );
    });
  }

  // filtro do select será o último filtro

  return (
    <section className="products-section">
      <div className="products-container">{fetchedProducts}</div>
      <div className="load-btn-wrapper">
        <button className="load-products-btn" type="button">
          CARREGAR MAIS
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
