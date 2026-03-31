import userImg from "../assets/user.png";
import cartImg from "../assets/products/shopping-cart.png";
import rocketImg from "../assets/rocket.png";

const stepsData = [
  {
    id: "01",
    image: userImg,
    title: "Create Account",
    subtitle:
      "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    id: "02",
    image: cartImg,
    title: "Choose Products",
    subtitle:
      "Browse our catalog and select the tools that fit your needs.",
  },
  {
    id: "03",
    image: rocketImg,
    title: "Start Creating",
    subtitle:
      "Download and start using your premium tools immediately.",
  },
];

const Steps = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 bg-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">
          Get Started in 3 Steps
        </h2>
        <p className="text-gray-400">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 bg-white">
        {stepsData.map((step) => (
          <div
            key={step.id}
            className="relative border rounded-3xl p-10 text-center shadow-sm"
          >
            <span className="absolute top-4 right-4 bg-blue-500 text-white text-sm w-10 h-10 rounded-full flex items-center justify-center">
              {step.id}
            </span>

            <div className="w-20 h-20 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-8">
              <img
                src={step.image}
                alt={step.title}
                className="w-10 h-10 object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {step.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {step.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;