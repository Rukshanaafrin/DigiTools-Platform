const ProductCards = ({
  product,
  handleAddToCart,
  activeId,
}) => {
  const isAdded = activeId === product.id;

  const tagColors = {
    "Best Seller": "bg-orange-100 text-orange-500",
    Popular: "bg-blue-100 text-blue-500",
    New: "bg-green-100 text-green-500",
  };

  return (
    <div className="border rounded-3xl p-8 relative shadow-sm">
      {/* Badge */}
      <span
        className={`absolute top-4 right-4 px-4 py-1 rounded-full text-sm ${
          tagColors[product.tag] || "bg-gray-100"
        }`}
      >
        {product.tag}
      </span>

      {/* Product Image */}
      <img
        src={new URL(
          `../assets/products/${product.image}`,
          import.meta.url
        ).href}
        alt={product.name}
        className="w-16 h-16 object-contain mb-6"
      />

      {/* Product Name */}
      <h2 className="text-3xl font-bold mb-4">
        {product.name}
      </h2>

      {/* Description */}
      <p className="text-gray-400 mb-6 leading-relaxed">
        {product.description}
      </p>

      {/* Price */}
      <h3 className="text-4xl font-bold mb-6">
        ${product.price}
        <span className="text-lg text-gray-400">
          /{product.period}
        </span>
      </h3>

      {/* Features */}
      <div className="space-y-2 mb-8">
        {product.features.map((feature, index) => (
          <p key={index} className="text-gray-400">
            ✔ {feature}
          </p>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={() => handleAddToCart(product)}
        className={`w-full py-3 rounded-full text-white font-semibold ${
          isAdded
            ? "bg-green-500"
            : "bg-gradient-to-r from-cyan-400 to-blue-500"
        }`}
      >
        <span className="text-white">
          {isAdded ? "✔ Added to Cart" : "Buy Now"}
        </span>
      </button>
    </div>
  );
};

export default ProductCards;