import { FiShoppingCart } from "react-icons/fi";

const NavBar = ({cartCount}) => {
  const navItems = [
    "Products",
    "Features",
    "Pricing",
    "Testimonials",
    "FAQ",
  ];

  return (
    <div className="navbar bg-white px-4 md:px-8 lg:px-16 shadow-sm">
      {/* Left */}
      <div className="navbar-start">
        <h1 className="text-2xl font-bold text-violet-500">
          DigiTools
        </h1>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 text-base font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right */}
     <div className="navbar-end gap-4">
  <div className="relative">
    <button className="hover:bg-transparent px-2">
      <FiShoppingCart className="text-black text-2xl" />
    </button>

    {cartCount > 0 && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        {cartCount}
      </span>
    )}
  </div>

  <button className="hidden md:block font-medium text-black">
    Login
  </button>

  <button className="btn rounded-full bg-violet-500 text-white hover:bg-violet-600 border-none">
    Get Started
  </button>
</div>
    </div>
  );
};

export default NavBar;