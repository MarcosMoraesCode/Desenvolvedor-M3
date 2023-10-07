import React from "react";
import Header from "../components/Header/Header";
import TopSection from "../components/TopSection/TopSection";
import ColorFilterComponent from "../components/AsideFilters/ColorFilterComponent";
import SizeFilterComponent from "../components/AsideFilters/SizeFilterComponent";
import PriceFilterComponent from "../components/AsideFilters/PriceFilterComponent";

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
        </section>
      </main>
    </React.Fragment>
  );
};

export default App;
