import { toast } from "react-toastify";
import emptyCartImg from "../assets/products/shopping-cart.png";

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Product removed from cart");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.success("Checkout completed successfully");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <img
            src={emptyCartImg}
            alt="empty cart"
            className="w-16 h-16 mx-auto mb-4 opacity-40"
          />
          <p className="text-gray-400 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-50 rounded-2xl px-6 py-4 mb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-contain"
                  />

                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-pink-400 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-8 font-bold text-xl">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full mt-6 py-3 rounded-full text-white bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;