import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Bicycle from "./pages/Bicycle/Bicycle";
import Cart from "./pages/Cart/Cart";
import ScrollToTop from "./componenets/ScrollToTop/ScrollToTop";
import Checkout from "./pages/Checkout/Checkout";
import { useContext } from "react";
import { ProductsContext } from "./context/ProductsContext";
import { commerce } from "./lib/commerce";

function App() {
  const { fetchProducts } = useContext(ProductsContext);
  // const [cart, setCart] = useState([]);

  // const createCart = async () => {
  //   try {
  //     const response = await commerce.cart.retrieve();
  //     setCart(response);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bicycle/:name" element={<Bicycle />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
