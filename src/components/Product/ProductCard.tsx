import React from "react";

const ProductCard = () => {
  return (
    <div className="product-card">
      <img src="../img/img_2.png" />
      <div className="product-info">
        <h1 className="product-name">CAMISETA MESCLA</h1>
        <h1 className="product-price">R$ 28,00</h1>
        <span className="product-installments">até 3x de R$9,33</span>
      </div>
      <button onClick={() => {}}>COMPRAR</button>
    </div>
  );
};

export default ProductCard;
