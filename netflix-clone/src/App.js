import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      {/* =================================
          HEADER
      ================================= */}

      <Header />


      {/* =================================
          MAIN
      ================================= */}

      <main className="main-content">

        <section className="phase-one-content">

          <span className="phase-label">
            PHASE 1
          </span>

          <h1>
            Netflix Clone
          </h1>

          <p>
            Header and Footer successfully connected.
          </p>

        </section>

      </main>


      {/* =================================
          FOOTER
      ================================= */}

      <Footer />

    </div>
  );
}

export default App;