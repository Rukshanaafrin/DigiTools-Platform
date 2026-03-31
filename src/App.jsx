
// import NavBar from "./component/NavBar"
// import Banner from "./component/Banner"
// import Stats from "./component/Stats"
// import Products from "./component/Products"

// function App() {

//   return (
//     <>
//     <NavBar/>
//     <Banner/>
//     <Stats/>
//     <Products/>
//     </>
//   )
// }

// export default App


import { useState } from "react";
import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import Stats from "./component/Stats";
import Products from "./component/Products";
import Steps from "./component/Steps";

function App() {
  const [cart, setCart] = useState([]);
  const [showCartPage, setShowCartPage] = useState(false);

  return (
    <>
      {!showCartPage && <NavBar cartCount={cart.length} />}
      {!showCartPage && <Banner />}
      {!showCartPage && <Stats />}

      <Products
        cart={cart}
        setCart={setCart}
        showCartPage={showCartPage}
        setShowCartPage={setShowCartPage}
      />
      <Steps/>
    </>
  );
}

export default App;