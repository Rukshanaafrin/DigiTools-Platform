const pricingPlans = [
  {
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: 0,
    button: "Get Started Free",
    featured: false,
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
  },
  {
    name: "Pro",
    subtitle: "Best for professionals",
    price: 29,
    button: "Start Pro Trial",
    featured: true,
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: 99,
    button: "Contact Sales",
    featured: false,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl border p-8 relative ${
                plan.featured
                  ? "bg-gradient-to-b from-blue-500 to-violet-500 text-white scale-105"
                  : "bg-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-200 text-black text-xs px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p
                className={`mb-6 ${
                  plan.featured ? "text-white/80" : "text-gray-400"
                }`}
              >
                {plan.subtitle}
              </p>

              <h2 className="text-5xl font-bold mb-8">
                ${plan.price}
                <span className="text-lg font-normal">/Month</span>
              </h2>

              <ul className="space-y-3 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold ${
                  plan.featured
                    ? "bg-white text-blue-600"
                    : "bg-gradient-to-r from-blue-500 to-violet-500 text-white"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;