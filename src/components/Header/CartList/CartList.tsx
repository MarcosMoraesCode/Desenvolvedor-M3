import React from "react";
import { useProducts } from "../../../hooks/useProducts";
import Cart from "./Cart";

interface CartListProps {
  closeCart: () => void;
}

const CartList = ({ closeCart }: CartListProps) => {
  const { cartProducts, updateCartProducts } = useProducts();

  let items;

  const removeItemFromCart = (itemId: number) => {
    const newArray = cartProducts.filter((_, id) => id !== itemId);
    updateCartProducts(newArray);
  };

  const clearCart = () => {
    updateCartProducts([]);
  };

  if (cartProducts.length > 0) {
    items = cartProducts.map((product, id) => {
      return (
        <Cart
          key={`cart-item-${id}`}
          name={product.name}
          price={product.price}
          removeItem={() => removeItemFromCart(id)}
        />
      );
    });
  }

  const handleCartClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <section className="cart-drawer" onClick={handleCartClick}>
      <header className="cart-header">
        <h2>CARRINHO</h2>{" "}
        <button className="close-btn" onClick={closeCart}>
          <img src="../../../img/close_btn.png" alt="close button" />
        </button>
      </header>
      {cartProducts.length > 0 ? (
        <>
          <ul>{items}</ul>
          <div className="cart-application">
            <button className="apply">FINALIZAR</button>
            <button className="reset" onClick={() => clearCart()}>
              LIMPAR
            </button>
          </div>
        </>
      ) : (
        <span className="no-cart-products">Não há produtos no carrinho.</span>
      )}

      <div className="cart-backdrop" onClick={closeCart} />
    </section>
  );
};

export default CartList;
