const Challenge = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-violet-900 text-white py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-lg text-white/80 mb-8 leading-8">
          Join thousands of professionals who are already using DigiTools
          to work smarter.
          <br />
          Start your free trial today.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <button className="px-8 py-3 rounded-full bg-white text-blue-600 font-semibold">
            Explore Products
          </button>

          <button className="px-8 py-3 rounded-full border border-white text-white font-semibold">
            View Pricing
          </button>
        </div>

        <p className="text-sm text-white/70">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Challenge;