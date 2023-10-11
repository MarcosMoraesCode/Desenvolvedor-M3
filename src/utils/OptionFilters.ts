import { OptionFilter } from "../ts/OptionFilter";
import { Prices } from "../ts/Prices";
import { Product } from "../ts/Product";
import { Sizes } from "../ts/Sizes";

//Converte a data do formato String para o tempo em dias
export const convertStringDateToNumber = (stringDate: string): number => {
  const date = new Date(stringDate);

  const today = new Date();

  let todayDateInDays =
    today.getFullYear() * 365 + today.getMonth() * 30 + today.getDay();

  let productDateInDays =
    date.getFullYear() * 365 + date.getMonth() * 30 + date.getDay();

  return todayDateInDays - productDateInDays;
};

// Ordena os produtos de acordo com a opção selecionada
export const organizeProducts = (option: OptionFilter, products: Product[]) => {
  let organizedProducts;

  switch (option) {
    case "cheaper":
      organizedProducts = products.sort((a, b) => a.price - b.price);

      break;
    case "expensive":
      organizedProducts = products.sort((a, b) => b.price - a.price);

      break;
    case "recent":
      organizedProducts = products.sort(
        (a, b) =>
          convertStringDateToNumber(a.date) - convertStringDateToNumber(b.date)
      );

      break;
    case "none":
      organizedProducts = products;
      break;
    default:
      break;
  }
  return organizedProducts;
};

// Filtra produtos pelas cores selecionadas
export const filterByColors = (
  colors: string[],
  products: Product[]
): Product[] => {
  const filteredProducts: Product[] = [];

  products.forEach((product) => {
    colors.forEach((color) => {
      if (color === product.color) {
        filteredProducts.push(product);
      }
    });
  });

  return filteredProducts;
};

// Gerencia array de cores selecionadas pelo usuário
export const updateColorsArr = (color: string, colors: string[]) => {
  let newColors: string[] = [];
  let colorExists = false;

  colors.forEach((arrColor) => {
    if (arrColor === color) {
      colorExists = true;
      newColors = colors.filter((arrColor) => arrColor !== color);
    }
  });

  if (colorExists) {
    return newColors;
  } else {
    colors.push(color);

    return colors;
  }
};

// Filtra produtos pelo tamanho selecionado
export const filterBySize = (size: Sizes, products: Product[]) => {
  if (size === "none") {
    return products;
  } else {
    const filteredProducts = products.filter((product) => {
      if (product.size.includes(size)) {
        return product;
      }
    });

    return filteredProducts;
  }
};

// Filtra produtos pela faixa de preço selecionada
export const filterByPrice = (price: Prices, products: Product[]) => {
  if (price === "none") {
    return products;
  } else {
    const filteredProducts = products.filter((product) => {
      if (product.price > price[0] && product.price <= price[1]) {
        console.log(product.price, typeof product.price, price, typeof price);
        return product;
      }
    });
    console.log("filtrado na função de preço", filteredProducts);
    return filteredProducts;
  }
};
