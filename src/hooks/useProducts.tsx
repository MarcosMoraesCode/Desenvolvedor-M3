import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../ts/Product";
import {
  filterByColors,
  filterBySize,
  organizeProducts,
  updateColors,
} from "../utils/OptionFilters";

const ProductContext = createContext({} as ProductContextProps);

export type OptionFilter = "expensive" | "cheaper" | "recent" | "none";
export type Sizes =
  | "none"
  | "P"
  | "M"
  | "G"
  | "GG"
  | "U"
  | "36"
  | "38"
  | "40"
  | "36"
  | "38"
  | "40";

type ProductContextProps = {
  allProducts: Product[];
  products: Product[];
  optionFilter: OptionFilter;
  selectedColors: string[];
  selectedSize: Sizes;
  updateProducts: (option: OptionFilter, colors: string[], size: Sizes) => void;
  searchProducts: () => void;
  updateOptionFilter: (option: OptionFilter) => void;
  updateSelectedColors: (colors: string[]) => void;
  updateSelectedSize: (size: Sizes) => void;
};

type ProductProviderProps = {
  children: ReactNode;
};

export function ProductProvider({ children }: ProductProviderProps) {
  //eu crio o estado tipado com o tipo do dado que será consumido
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [optionFilter, setOptionFilter] = useState<OptionFilter>("none");
  const [selectedSize, setSelectedSize] = useState<Sizes>("none");
  //eu crio a função padrão que será utilizada pelos consumers que internamente atualiza meu estado;

  const searchProducts = async () => {
    await fetch("http://localhost:5000/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro na solicitação: " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        setAllProducts(data);
        setProducts(data);
      });
  };

  const updateProducts = (
    option: OptionFilter,
    colors: string[],
    size: Sizes
  ) => {
    let colorFilteredProducts: Product[] = [];
    let sizeFilteredProducts: Product[] = [];

    if (colors.length > 0) {
      colorFilteredProducts = filterByColors(colors, allProducts);
      sizeFilteredProducts = filterBySize(size, colorFilteredProducts);
      // console.log(
      //   colorFilteredProducts,
      //   "produtos filtrados",
      //   "filtros: cor ",
      //   colors,
      //   "tamanho",
      //   size
      // );
      setProducts(organizeProducts(option, sizeFilteredProducts) as Product[]);
    } else {
      sizeFilteredProducts = filterBySize(size, allProducts);
      // console.log(
      //   sizeFilteredProducts,
      //   "produtos filtrados, filtros: tamanho",
      //   size
      // );
      setProducts(organizeProducts(option, sizeFilteredProducts) as Product[]);
    }
  };

  const updateSelectedColors = (colors: string[]) => {
    setSelectedColors(colors);
  };

  const updateOptionFilter = (option: OptionFilter) => {
    setOptionFilter(option);
    updateProducts(option, selectedColors, selectedSize);
  };

  const updateSelectedSize = (size: Sizes) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    try {
      searchProducts();
    } catch (err) {
      console.log(err);
    }
    return () => {};
  }, []);

  return (
    <ProductContext.Provider
      value={{
        allProducts: allProducts,
        products: products,
        optionFilter: optionFilter,
        selectedColors: selectedColors,
        selectedSize: selectedSize,
        updateSelectedSize: updateSelectedSize,
        searchProducts: searchProducts,
        updateOptionFilter: updateOptionFilter,
        updateProducts: updateProducts,
        updateSelectedColors: updateSelectedColors,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductContext);
  return context;
};
