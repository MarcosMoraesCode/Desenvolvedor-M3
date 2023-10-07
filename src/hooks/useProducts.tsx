import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../ts/Product";

const ProductContext = createContext({} as ProductContextProps);

type ProductContextProps = {
  products: Product[];
  updateProducts: (productsList: Product[]) => void;
  loading: boolean;
  isLoading: (loading: boolean) => void;
  searchProducts: () => void;
};

type ProductProviderProps = {
  children: ReactNode;
};

export function ProductProvider({ children }: ProductProviderProps) {
  //eu crio o estado tipado com o tipo do dado que será consumido
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  //eu crio a função padrão que será utilizada pelos consumers que internamente atualiza meu estado;
  const updateProducts = (value: Product[]) => {
    setProducts(value);
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
