import React from "react";
import { useProducts } from "../../../hooks/useProducts";

interface CartProps {
  name: string;
  price: number;
  removeItem: () => void;
}

const Cart = ({ name, price, removeItem }: CartProps) => {
  const productPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <li className="cart-item">
      <span className="name">{name}</span>
      <span className="price">{productPrice}</span>
      <button className="remove-btn" onClick={removeItem}>
        <img src="../../../img/trash-icon.png" alt="trash-icon" />
      </button>
    </li>
  );
};

export default Cart;
