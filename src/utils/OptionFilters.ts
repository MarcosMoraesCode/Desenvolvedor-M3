import { OptionFilter } from "../hooks/useProducts";
import { Product } from "../ts/Product";

export const convertStringDateToNumber = (stringDate: string): number => {
  const date = new Date(stringDate);

  const today = new Date();

  let todayDateInDays =
    today.getFullYear() * 365 + today.getMonth() * 30 + today.getDay();

  let productDateInDays =
    date.getFullYear() * 365 + date.getMonth() * 30 + date.getDay();

  return todayDateInDays - productDateInDays;
};

export const organizeProducts = (option: OptionFilter, products: Product[]) => {
  let organizedProducts;

  switch (option) {
    case "cheaper":
      organizedProducts = products.sort((a, b) => a.price - b.price);
      console.log("organizados por mais barato", organizedProducts);
      break;
    case "expensive":
      organizedProducts = products.sort((a, b) => b.price - a.price);
      console.log("organizados por mais caro", organizedProducts);
      break;
    case "recent":
      organizedProducts = products.sort(
        (a, b) =>
          convertStringDateToNumber(a.date) - convertStringDateToNumber(b.date)
      );
      console.log("organizados por mais recente", organizedProducts);
      break;
    case "none":
      organizedProducts = products;
      break;
    default:
      break;
  }
  return organizedProducts;
};

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

export const updateColors = (color: string, colors: string[]) => {
  let newColors: string[] = [];
  let colorExists = false;

  colors.forEach((arrColor) => {
    if (arrColor === color) {
      colorExists = true;
      newColors = colors.filter((arrColor) => arrColor !== color);
    }
  });

  if (colorExists) {
    // console.log("retornando as cores, menos a " + color, newColors);
    return newColors;
  } else {
    colors.push(color);

    // console.log("retornando as cores, mais a " + color, colors);
    return colors;
  }
};
