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
  organizeProducts,
  updateColors,
} from "../utils/OptionFilters";

const ProductContext = createContext({} as ProductContextProps);

export type OptionFilter = "expensive" | "cheaper" | "recent" | "none";

type ProductContextProps = {
  allProducts: Product[];
  products: Product[];
  loading: boolean;
  optionFilter: OptionFilter;
  updateProducts: (option: OptionFilter, colors: string[]) => void;
  isLoading: (loading: boolean) => void;
  searchProducts: () => void;
  updateOptionFilter: (option: OptionFilter) => void;
  selectedColors: string[];
  updateSelectedColors: (colors: string[]) => void;
};

type ProductProviderProps = {
  children: ReactNode;
};

export function ProductProvider({ children }: ProductProviderProps) {
  //eu crio o estado tipado com o tipo do dado que será consumido
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [optionFilter, setOptionFilter] = useState<OptionFilter>("none");
  //eu crio a função padrão que será utilizada pelos consumers que internamente atualiza meu estado;

  const updateProducts = (option: OptionFilter, colors: string[]) => {
    let filteredProducts: Product[] = [];

    if (colors.length > 0) {
      filteredProducts = filterByColors(colors, allProducts);
      console.log(filteredProducts, "produtos filtrados");
      setProducts(organizeProducts(option, filteredProducts) as Product[]);
    } else {
      setProducts(organizeProducts(option, allProducts) as Product[]);
    }
  };

  const isLoading = (value: boolean) => {
    setLoading(value);
  };

  const searchProducts = async () => {
    await fetch("http://localhost:5000/products")
      .then((res) => {
        setLoading(true);
        if (!res.ok) {
          setLoading(false);
          throw new Error("Erro na solicitação: " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        setAllProducts(data);
        setProducts(data);
        setLoading(false);
      });
  };

  const updateSelectedColors = (colors: string[]) => {
    setSelectedColors(colors);
  };

  const updateOptionFilter = (option: OptionFilter) => {
    setOptionFilter(option);
    updateProducts(option, selectedColors);
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
        updateProducts: updateProducts,
        loading: loading,
        isLoading: isLoading,
        searchProducts: searchProducts,
        optionFilter: optionFilter,
        updateOptionFilter: updateOptionFilter,
        selectedColors: selectedColors,
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
