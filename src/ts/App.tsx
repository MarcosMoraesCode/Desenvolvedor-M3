import React from "react";
import Header from "../components/Header/Header";
import TopSection from "../components/TopSection/TopSection";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="main-style">
        <TopSection />
      </main>
    </React.Fragment>
  );
};

export default App;
