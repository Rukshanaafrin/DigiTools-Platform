const Cart = ({ cart, setCart, setShowCartPage }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setCart([]);
    setShowCartPage(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400 py-10">
          Your cart is empty
        </p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-400">${item.price}</p>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-pink-400"
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