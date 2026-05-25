const plans = [
  {
    name: "Starter",
    price: "29",
    period: "/month",
    features: ["Gym access (6AM–10PM)", "Basic equipment access", "Locker room access", "Free fitness assessment", "Mobile app access"],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "59",
    period: "/month",
    features: ["24/7 gym access", "All equipment access", "Unlimited group classes", "1 personal training session/week", "Nutrition guidance", "Priority support"],
    highlighted: true,
    cta: "Go Pro",
  },
  {
    name: "Elite",
    price: "99",
    period: "/month",
    features: ["Everything in Pro", "4 personal training sessions/week", "Custom meal plans", "Sauna & spa access", "Guest passes (x2)", "Exclusive events access"],
    highlighted: false,
    cta: "Go Elite",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Plans That Fit Your <span className="text-primary">Goals</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Choose the membership that works best for you. No hidden fees, no surprises.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primary/10 border-primary scale-105 md:scale-110"
                  : "bg-dark-300 border-white/10 hover:border-white/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-gray-400 ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary-dark text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
