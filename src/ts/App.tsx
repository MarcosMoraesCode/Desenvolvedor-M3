import React from "react";
import Header from "../components/Header/Header";
import TopSection from "../components/TopSection/TopSection";
import ColorFilterComponent from "../components/AsideFilters/ColorFilterComponent";
import SizeFilterComponent from "../components/AsideFilters/SizeFilterComponent";
import PriceFilterComponent from "../components/AsideFilters/PriceFilterComponent";
import ProductCard from "../components/ProductCard/ProductCard";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main-style">
        <TopSection />
        <section className="main-section">
          <aside>
            <ColorFilterComponent />
            <SizeFilterComponent />
            <PriceFilterComponent />
          </aside>
          <section className="products-section">
            <div className="products-container">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>

            <div className="load-btn-wrapper">
              <button className="load-products-btn" type="button">
                CARREGAR MAIS
              </button>
            </div>
          </section>
        </section>
      </main>
    </React.Fragment>
  );
};

export default App;
