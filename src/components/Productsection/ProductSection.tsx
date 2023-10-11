import React, { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import {
  getScreenSize,
  getTernaryOptionByScreenSize,
  organizeProductsByScreenSize,
} from "../../utils/SizeChecker";

const ProductSection = () => {
  const { products } = useProducts();
  //Define a quantidade de produtos mostrados inicialmente a depender do tamanho da tela
  const [productsShownDesktop, setProductShownDesktop] = useState(9);
  const [productsShownMobile, setProductShownMobile] = useState(4);
  const [productsShownTablet, setProductShownTablet] = useState(6);
  const [productsShownWideScreen, setProductShownWideScreen] = useState(12);

  const screenSize = getScreenSize();
  let productsMessage = "Nenhum produto foi encontrado.";

  const loadMoreProducts = () => {
    switch (screenSize) {
      case "ultrawide-screen":
        setProductShownWideScreen(productsShownWideScreen + 4);
        break;
      case "desktop-screen":
        setProductShownDesktop(productsShownDesktop + 3);
        break;
      case "tablet-screen":
        setProductShownTablet(productsShownTablet + 3);
        break;
      case "mobile-screen":
        setProductShownMobile(productsShownMobile + 4);
      default:
        break;
    }
  };

  const checkingScreenSize = getTernaryOptionByScreenSize(
    products,
    productsShownWideScreen,
    productsShownDesktop,
    productsShownTablet,
    productsShownMobile
  );

  let fetchedProducts;

  if (products.length > 0) {
    productsMessage = "Todos os produtos foram exibidos.";

    fetchedProducts = organizeProductsByScreenSize(
      products,
      productsShownWideScreen,
      productsShownDesktop,
      productsShownTablet,
      productsShownMobile
    );
  }

  return (
    <section className="products-section">
      <div className="products-container">{fetchedProducts}</div>
      <div className="load-btn-wrapper">
        {checkingScreenSize ? (
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
