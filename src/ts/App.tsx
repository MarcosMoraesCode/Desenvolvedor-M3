import React from "react";
import Header from "../components/Header/Header";
import TopSection from "../components/TopSection/TopSection";
import Footer from "../components/Footer/Footer";
import ProductSection from "../components/Productsection/ProductSection";
import AsideFilters from "../components/AsideFilters/AsideFilters";
import { useProducts } from "../hooks/useProducts";
import {
  filterByColors,
  filterBySize,
  updateColors,
} from "../utils/OptionFilters";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main-style">
        <TopSection />
        <section className="main-section">
          <AsideFilters />
          <ProductSection />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
