import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { getScreenSize } from "../../utils/SizeChecker";

const ProductSection = () => {
  const { products, selectedColors } = useProducts();
  const [productsShownDesktop, setProductShownDesktop] = useState(9); //Define a quantidade de produtos mostrados inicialmente
  const [productsShownMobile, setProductShownMobile] = useState(4);
  const onClickHandler = () => {
    screenSize === "desktop-screen"
      ? setProductShownDesktop(productsShownDesktop + 4)
      : setProductShownMobile(productsShownMobile + 4);
    //Define quantos produtos a mais serão mostrados ao clicar no botão
  };

  let fetchedProducts;

  const screenSize = getScreenSize();

  if (products.length > 0) {
    if (screenSize === "desktop-screen") {
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
        .filter((_, id) => id < productsShownDesktop);
    } else {
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
        .filter((_, id) => id < productsShownMobile);
    }
  }

  return (
    <section className="products-section">
      <div className="products-container">{fetchedProducts}</div>
      <div className="load-btn-wrapper">
        {screenSize === "desktop-screen" ? (
          productsShownDesktop >= products.length
        ) : productsShownMobile >= products.length ? (
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
