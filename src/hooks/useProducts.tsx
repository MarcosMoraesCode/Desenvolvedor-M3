import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  filterByColors,
  filterByPrice,
  filterBySize,
  organizeProducts,
} from "../utils/OptionFilters";
import { Sizes, Prices, OptionFilter, Product } from "../ts/Typing";

const ProductContext = createContext({} as ProductContextProps);

type ProductContextProps = {
  allProducts: Product[];
  products: Product[];
  cartProducts: Product[];
  optionFilter: OptionFilter;
  selectedColors: string[];
  selectedSize: Sizes;
  selectedPrice: Prices;
  updateProducts: (
    option: OptionFilter,
    colors: string[],
    size: Sizes,
    price: Prices
  ) => void;
  searchProducts: () => void;
  updateOptionFilter: (option: OptionFilter) => void;
  updateSelectedColors: (colors: string[]) => void;
  updateSelectedSize: (size: Sizes) => void;
  updateSelectedPrice: (price: Prices) => void;
  addCartProduct: (product: Product) => void;
  updateCartProducts: (products: Product[]) => void;
};

type ProductProviderProps = {
  children: ReactNode;
};

export function ProductProvider({ children }: ProductProviderProps) {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [optionFilter, setOptionFilter] = useState<OptionFilter>("none");
  const [selectedSize, setSelectedSize] = useState<Sizes>("none");
  const [selectedPrice, setSelectedPrice] = useState<Prices>("none");

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
    size: Sizes,
    price: Prices
  ) => {
    let colorFilteredProducts: Product[] = [];
    let sizeFilteredProducts: Product[] = [];
    let priceFilteredProducts: Product[] = [];

    if (colors.length > 0) {
      colorFilteredProducts = filterByColors(colors, allProducts);
      sizeFilteredProducts = filterBySize(size, colorFilteredProducts);
      priceFilteredProducts = filterByPrice(price, sizeFilteredProducts);
      setProducts(organizeProducts(option, priceFilteredProducts) as Product[]);
    } else {
      sizeFilteredProducts = filterBySize(size, allProducts);
      priceFilteredProducts = filterByPrice(price, sizeFilteredProducts);
      setProducts(organizeProducts(option, priceFilteredProducts) as Product[]);
    }
  };

  const updateSelectedColors = (colors: string[]) => {
    setSelectedColors(colors);
  };

  const updateOptionFilter = (option: OptionFilter) => {
    setOptionFilter(option);
    updateProducts(option, selectedColors, selectedSize, selectedPrice);
  };

  const updateSelectedSize = (size: Sizes) => {
    setSelectedSize(size);
  };

  const updateSelectedPrice = (price: Prices) => {
    setSelectedPrice(price);
  };

  const addCartProduct = (product: Product) => {
    const newProducts = [...cartProducts];
    newProducts.push(product);
    setCartProducts(newProducts);
  };

  const updateCartProducts = (products: Product[]) => {
    setCartProducts(products);
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
        selectedPrice: selectedPrice,
        cartProducts: cartProducts,
        updateSelectedSize: updateSelectedSize,
        searchProducts: searchProducts,
        updateOptionFilter: updateOptionFilter,
        updateProducts: updateProducts,
        updateSelectedColors: updateSelectedColors,
        updateSelectedPrice: updateSelectedPrice,
        updateCartProducts: updateCartProducts,
        addCartProduct: addCartProduct,
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
