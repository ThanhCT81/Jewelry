import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import { AppProvider } from "./AppContext";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import "./style.css";
import Cart from "./pages/Cart/Cart";
import ProductDetail from "./pages/PageSingleProduct/ProductDetail";
import Bracelets from "./pages/PageBracelets/Bracelets";
import Earings from "./pages/PageEarings/Earings";
import Necklaces from "./pages/PageNecklace/Necklaces";
import Rings from "./pages/PageRings/Rings";
import React from "react";
import Email from "./pages/Email/Email";
function App() {
  return (
    <AppProvider>
      <div>
        <Header />
        <ProductDetails />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/Bracelets" element={<Bracelets />}></Route>
          <Route path="/Earings" element={<Earings />}></Route>
          <Route path="/Necklaces" element={<Necklaces />}></Route>
          <Route path="/Rings" element={<Rings />}></Route>
          <Route path="/checkout" element={<Email />}></Route>
        </Routes>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
