import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { Product } from "../ts/Product";

// Informa a resolução do dispositivo do usuário
export function getScreenSize() {
  const width = window.innerWidth;

  if (width < 720) {
    return "mobile-screen";
  } else if (width >= 720 && width < 1023) {
    return "tablet-screen";
  } else if (width >= 1024 && width < 1779) {
    return "desktop-screen";
  } else if (width >= 1780 && width < 2560) {
    return "ultrawide-screen";
  }
}

// Organiza produtos em tela de acordo com o tamanho do dispositivo do usuário
export function organizeProductsByScreenSize(
  products: Product[],
  productsShownWideScreen: number,
  productsShownDesktop: number,
  productsShownTablet: number,
  productsShownMobile: number
) {
  const screenSize = getScreenSize();

  let fetchedProducts: JSX.Element[] = [];

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
      fetchedProducts = []; // Certifique-se de lidar com o caso padrão
      break;
  }

  return fetchedProducts;
}

//Verifica se há necessidade de renderizar botão de carregar mais produtos a depender da tela
export const getTernaryOptionByScreenSize = (
  products: Product[],
  productsShownWideScreen: number,
  productsShownDesktop: number,
  productsShownTablet: number,
  productsShownMobile: number
) => {
  let ternaryOption;
  const screenSize = getScreenSize();
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
