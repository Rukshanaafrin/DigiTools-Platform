import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
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
        <button className="hover:bg-transparent px-2">
          <FiShoppingCart className="text-black text-2xl" />
        </button>

        <button className="hidden md:block font-medium text-black">
          Login
        </button>

        <button className="btn rounded-full bg-violet-500 text-white hover:bg-violet-600 border-none px-6">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;