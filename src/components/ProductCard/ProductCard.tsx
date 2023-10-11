import React from "react";
import { Product } from "../../ts/Product";
import { useProducts } from "../../hooks/useProducts";
import { convertToBRL } from "../../utils/SimpleFunctions";

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
  const { addCartProduct } = useProducts();

  const productName = name.toUpperCase();

  const productPrice = convertToBRL(price);

  const productInstallments = convertToBRL(parcelamento[1]);

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
