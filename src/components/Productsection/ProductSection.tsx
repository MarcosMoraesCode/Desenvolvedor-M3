import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { getScreenSize } from "../../utils/SizeChecker";

const ProductSection = () => {
  const { products, selectedColors } = useProducts();
  const [productsShownDesktop, setProductShownDesktop] = useState(9); //Define a quantidade de produtos mostrados inicialmente
  const [productsShownMobile, setProductShownMobile] = useState(4);
  const [productsShownTablet, setProductShownTablet] = useState(6);
  const [productsShownWideScreen, setProductShownWideScreen] = useState(12);

  const onClickHandler = () => {
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

    // screenSize === "desktop-screen"
    //   ? setProductShownDesktop(productsShownDesktop + 4)
    //   : setProductShownMobile(productsShownMobile + 4);
    //Define quantos produtos a mais serão mostrados ao clicar no botão
  };

  const screenSize = getScreenSize();
  let productsMessage = "Nenhum produto foi encontrado.";

  const screenSizeTernaryOption = () => {
    let ternaryOption;
    switch (screenSize) {
      case "ultrawide-screen":
        ternaryOption = productsShownWideScreen >= products.length;
        break;
      case "desktop-screen":
        ternaryOption = productsShownDesktop >= products.length;
        break;
      case "tablet-screen":
        ternaryOption = productsShownTablet >= products.length;
        break;
      case "mobile-screen":
        ternaryOption = productsShownMobile >= products.length;
        break;
      default:
        break;
    }
    return ternaryOption;
  };

  const checkingScreenSize = screenSizeTernaryOption();

  let fetchedProducts;

  if (products.length > 0) {
    productsMessage = "Todos os produtos foram exibidos.";

    switch (screenSize) {
      case "ultrawide-screen":
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
          .filter((_, id) => id < productsShownWideScreen);
        break;
      case "desktop-screen":
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
        break;
      case "tablet-screen":
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
          .filter((_, id) => id < productsShownTablet);
        break;
      case "mobile-screen":
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
        break;
      default:
        break;
    }
  }
  //   if (screenSize === "desktop-screen") {
  //     fetchedProducts = products
  //       .map((product, id) => {
  //         return (
  //           <ProductCard
  //             key={`product-${id}`}
  //             name={product.name}
  //             color={product.color}
  //             date={product.date}
  //             id={product.id}
  //             image={product.image}
  //             parcelamento={product.parcelamento}
  //             price={product.price}
  //             size={product.size}
  //           />
  //         );
  //       })
  //       .filter((_, id) => id < productsShownDesktop);
  //   } else {
  //     fetchedProducts = products
  //       .map((product, id) => {
  //         return (
  //           <ProductCard
  //             key={`product-${id}`}
  //             name={product.name}
  //             color={product.color}
  //             date={product.date}
  //             id={product.id}
  //             image={product.image}
  //             parcelamento={product.parcelamento}
  //             price={product.price}
  //             size={product.size}
  //           />
  //         );
  //       })
  //       .filter((_, id) => id < productsShownMobile);
  //   }
  // }

  return (
    <section className="products-section">
      <div className="products-container">{fetchedProducts}</div>
      <div className="load-btn-wrapper">
        {checkingScreenSize ? (
          <span className="span-limit">{productsMessage}</span>
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
