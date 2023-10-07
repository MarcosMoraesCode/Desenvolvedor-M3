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
  }
  return organizedProducts;
};
