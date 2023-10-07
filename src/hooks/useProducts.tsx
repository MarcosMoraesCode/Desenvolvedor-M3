import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../ts/Product";
import { organizeProducts } from "../utils/OptionFilters";

const ProductContext = createContext({} as ProductContextProps);

export type OptionFilter = "expensive" | "cheaper" | "recent" | "none";

type ProductContextProps = {
  products: Product[];
  updateProducts: (option: OptionFilter) => void;
  loading: boolean;
  isLoading: (loading: boolean) => void;
  searchProducts: () => void;
  optionFilter: OptionFilter;
  updateOptionFilter: (option: OptionFilter) => void;
};

type ProductProviderProps = {
  children: ReactNode;
};

export function ProductProvider({ children }: ProductProviderProps) {
  //eu crio o estado tipado com o tipo do dado que será consumido
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [optionFilter, setOptionFilter] = useState<OptionFilter>("none");
  //eu crio a função padrão que será utilizada pelos consumers que internamente atualiza meu estado;

  const updateProducts = (option: OptionFilter) => {
    setProducts(organizeProducts(option, products) as Product[]);
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
        setProducts(data);
        setLoading(false);
      });
  };

  const updateOptionFilter = (option: OptionFilter) => {
    setOptionFilter(option);
    updateProducts(option);
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
        products: products,
        updateProducts: updateProducts,
        loading: loading,
        isLoading: isLoading,
        searchProducts: searchProducts,
        optionFilter: optionFilter,
        updateOptionFilter: updateOptionFilter,
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
