import { useState } from "react";
import Cart from "./components/Cart";
import Catagories from "./components/Catagories";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Steps from "./components/Steps";

function App() {

  const [activeTab, setActiveTab] = useState("active");
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Hero />
      <Stats />
      <Catagories cartItems={cartItems} setCartItems={setCartItems} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
export default App;
