import { useState } from "react";
import productsData from "../assets/products.json";
import ProductCards from "./ProductCards";
import Cart from "./Cart";

const Products = ({
  cart,
  setCart,
  showCartPage,
  setShowCartPage,
}) => {
  const [activeId, setActiveId] = useState(null);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (!exists) {
      setCart([...cart, product]);
    }

    setActiveId(product.id);
  };

  return (
    <section className=" my-16 py-20 max-w-7xl mx-auto bg-slate-100 rounded-4xl px-6">
      {/* Header always visible */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">
          Premium Digital Tools
        </h2>

        <p className="text-gray-400">
         Choose from our curated collection of premium digital products designed
         <br />
         to boost your productivity and creativity.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setShowCartPage(false)}
            className={`px-8 py-3 rounded-full ${
              !showCartPage
                ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setShowCartPage(true)}
            className={`px-8 py-3 rounded-full ${
              showCartPage
                ? "bg-violet-500 text-white"
                : "bg-gray-100"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {/* Only this section changes */}
      {!showCartPage ? (
        <div className="grid md:grid-cols-3 gap-8 bg-white p-6 rounded-3xl">
          {productsData.map((product) => (
            <ProductCards
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      ) : (
        <Cart
          cart={cart}
          setCart={setCart}
          setShowCartPage={setShowCartPage}
        />
      )}
    </section>
  );
};

export default Products;