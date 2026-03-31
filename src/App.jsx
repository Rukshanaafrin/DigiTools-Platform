import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import Stats from "./component/Stats";
import Products from "./component/Products";
import Steps from "./component/Steps";
import Pricing from "./component/Pricing";
import Challenge from "./component/Challenge";
import Footer from "./component/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [showCartPage, setShowCartPage] = useState(false);

  return (
    <>
      <NavBar cartCount={cart.length} />
      <div className="pt-20">
        {!showCartPage && <Banner />}
      {!showCartPage && <Stats />}

      <Products
        cart={cart}
        setCart={setCart}
        showCartPage={showCartPage}
        setShowCartPage={setShowCartPage}
      />

      {!showCartPage && <Steps />}
      {!showCartPage && <Pricing />}
      {!showCartPage && <Challenge />}
      {!showCartPage && <Footer />}
      </div>
      

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
      />
    </>
  );
}

export default App;