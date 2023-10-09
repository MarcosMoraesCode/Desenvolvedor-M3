import React from "react";
import { useProducts } from "../../hooks/useProducts";

const Header = () => {
  const { cartProducts } = useProducts();

  let cartInformation;

  if (cartProducts.length > 0) {
    cartInformation = <div className="cart-info">{cartProducts.length}</div>;
  } else {
    cartInformation = null;
  }

  return (
    <header className="header-style">
      <img src="img/logo-m3.png" alt="Logo M3" className="logo-style" />
      <div className="icon-style">
        <img src="img/cart-icon.png" alt="Cart Icon" />
        {cartInformation}
      </div>
    </header>
  );
};

export default Header;
