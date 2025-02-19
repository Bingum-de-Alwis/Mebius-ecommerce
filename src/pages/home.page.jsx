import Hero from "./../Hero";
import Navigation from "./../Navigation";
import Products from "./../Products";
import { useState } from "react";
import { useSelector } from "react-redux";

function HomePage() {
  return (
    <main>
      <Hero />
      <Products />
    </main>
  );
}

export default HomePage;
