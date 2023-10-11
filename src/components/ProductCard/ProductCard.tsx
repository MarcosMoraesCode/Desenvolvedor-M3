import React from "react";
import { Product } from "../../ts/Product";
import { useProducts } from "../../hooks/useProducts";

const ProductCard = ({
  color,
  date,
  id,
  image,
  name,
  parcelamento,
  price,
  size,
}: Product) => {
  const { addCartProduct, cartProducts } = useProducts();

  const productName = name.toUpperCase();

  const productPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  const productInstallments = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(parcelamento[1]);

  const onClickHandler = ({
    color,
    date,
    id,
    image,
    name,
    parcelamento,
    price,
    size,
  }: Product) => {
    const newProduct = {
      color,
      date,
      id,
      image,
      name,
      parcelamento,
      price,
      size,
    };

    addCartProduct(newProduct);
  };

  return (
    <div className="product-card">
      <img src={image} />
      <div className="product-info">
        <h1 className="product-name">{productName}</h1>
        <h1 className="product-price">{productPrice}</h1>
        <span className="product-installments">
          até {parcelamento[0]}x de {productInstallments}
        </span>
      </div>
      <button
        onClick={() =>
          onClickHandler({
            color,
            date,
            id,
            image,
            name,
            parcelamento,
            price,
            size,
          })
        }
      >
        COMPRAR
      </button>
    </div>
  );
};

export default ProductCard;
