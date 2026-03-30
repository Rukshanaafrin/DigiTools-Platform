const Stats = () => {
  const statsData = [
    {
      id: 1,
      number: "50K+",
      label: "Active Users",
    },
    {
      id: 2,
      number: "200+",
      label: "Premium Tools",
    },
    {
      id: 3,
      number: "4.9",
      label: "Average Rating",
    },
  ];

  return (
    <section className="px-4 md:px-8 lg:px-16 pt-4 pb-4">
      <div className="bg-gradient-to-r from-blue-600 to-violet-500 rounded-2xl py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`py-4 ${
                index !== statsData.length - 1
                  ? "border-b md:border-b-0 md:border-r border-white/20"
                  : ""
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {stat.number}
              </h2>
              <p className="text-white/80 text-lg mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;