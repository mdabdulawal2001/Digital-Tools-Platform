import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import State_Section from "./components/Banner/State_Section/State_Section";
import Started_Section from "./components/Banner/State_Section/Started_Section/Started_Section";
import Pricing_Section from "./components/Pricing_Section/Pricing_Section";
import Ready_Section from "./components/Ready_Section/Ready_Section";
import Premium_Section from "./components/Premium_Section/Premium_Section";
import { useState } from "react";
import Cart from "./components/Premium_Section/Cart";
import Premium_Title from "./components/Premium_Section/Premium_Title";



// data fetching
const cardsData = async () => {
    const res = await fetch("/CardsData.json");
    return res.json();
  };

const dataPromise = cardsData();



  function App() {
    
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <div className="max-w-400 mx-auto">
        {/* navbar section */}
        <div className="lg:w-[85%] mx-auto">
          <Navbar carts={carts}></Navbar>
        </div>

        {/* banner section */}
        <div className="lg:w-[85%] mx-auto">
          <Banner></Banner>
        </div>

        {/* state section */}
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <State_Section></State_Section>
        </div>

        {/* Premium Section */}
        <div className="lg:w-[85%] mx-auto my-14 lg:my-24">
          <Premium_Title activeTab={activeTab} setActiveTab={setActiveTab} carts={carts}></Premium_Title>
          {
            activeTab === "products" ? <Premium_Section dataPromise={dataPromise} carts={carts} setCarts={setCarts}></Premium_Section>
            : <Cart carts={carts} setCarts={setCarts}></Cart>
          }
        </div>

        {/* started section */}
        <div className="lg:w-[85%] mx-auto">
          <Started_Section></Started_Section>
        </div>

        {/* pricing section */}
        <div className="lg:w-[85%] mx-auto">
          <Pricing_Section></Pricing_Section>
        </div>

        {/* ready section */}
        <div className="mt-7 lg:mt-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <Ready_Section></Ready_Section>
        </div>

        {/* footer section */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
