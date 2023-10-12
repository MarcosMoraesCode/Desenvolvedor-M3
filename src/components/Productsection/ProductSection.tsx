import React, { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";

const ProductSection = () => {
  const { products } = useProducts();
  //Define a quantidade de produtos mostrados inicialmente a depender do tamanho da tela
  const [productsShown, setProductShown] = useState(9);

  let productsMessage = "Nenhum produto foi encontrado.";

  const loadMoreProducts = () => {
    //O valor +3 é apenas para poder carregar mais de uma vez
    setProductShown(productsShown + 3);
  };

  let fetchedProducts;

  if (products.length > 0) {
    productsMessage = "Todos os produtos foram exibidos.";

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

  return (
    <section className="products-section">
      <div className="products-container">{fetchedProducts}</div>
      <div className="load-btn-wrapper">
        {productsShown >= products.length ? (
          <span className="span-limit">{productsMessage}</span>
        ) : (
          <button
            onClick={() => loadMoreProducts()}
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
