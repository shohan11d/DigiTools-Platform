function Stats() {
  const cards = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <section className="my-20 text-white bg-secondary bg-linear-to-r from-secondary to-primary">
      <div className="custom-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {cards.map((card, index) => (
            <div
              key={card.label}
              className={`px-6   ${
                index < cards.length - 1
                  ? "md:border-r border-white/30"
                  : "border-white/30"
              }`}
            >
              <div className="text-[60px]  font-extrabold leading-none">
                {card.value}
              </div>
              <div className="text-[24px]  font-medium text-white/90 mt-2">
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
