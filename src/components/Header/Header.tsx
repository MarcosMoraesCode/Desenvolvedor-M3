import React, { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import CartList from "./CartList/CartList";

const Header = () => {
  const { cartProducts } = useProducts();
  const [openCart, setOpenCart] = useState(false);

  let cartInformation;

  if (cartProducts.length > 0) {
    cartInformation = <div className="cart-info">{cartProducts.length}</div>;
  } else {
    cartInformation = null;
  }

  return (
    <header className="header-style">
      <img src="img/logo-m3.png" alt="Logo M3" className="logo-style" />
      <div className="icon-style" onClick={() => setOpenCart(true)}>
        <img src="img/cart_icon.png" alt="Cart Icon" />
        {cartInformation}
      </div>
      {openCart ? <CartList closeCart={() => setOpenCart(false)} /> : null}
    </header>
  );
};

export default Header;
