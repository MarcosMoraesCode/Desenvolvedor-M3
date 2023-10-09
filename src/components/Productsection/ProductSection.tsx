import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";

const ProductSection = () => {
  const { products, selectedColors } = useProducts();
  const [productsShown, setProductShown] = useState(9); //Define a quantidade de produtos mostrados inicialmente

  const onClickHandler = () => {
    //Define quantos produtos a mais serão mostrados ao clicar no botão
    setProductShown(productsShown + 4);
  };

  let fetchedProducts;

  if (products.length > 0) {
    fetchedProducts = products
      .map((product, id) => {
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
      })
      .filter((_, id) => id < productsShown);
  }

  // filtro do select será o último filtro

  return (
    <section className="products-section">
      <div className="products-container">{fetchedProducts}</div>
      <div className="load-btn-wrapper">
        {productsShown >= products.length ? (
          <span className="span-limit">Todos os produtos foram exibidos.</span>
        ) : (
          <button
            onClick={() => onClickHandler()}
            className="load-products-btn"
            type="button"
          >
            CARREGAR MAIS
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
