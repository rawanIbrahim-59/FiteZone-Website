const classes = [
  {
    name: "HIIT Blast",
    schedule: "Mon, Wed, Fri — 6:00 AM & 5:30 PM",
    description: "High-intensity interval training to burn maximum calories in minimum time.",
    level: "All Levels",
    duration: "45 min",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    name: "Power Yoga",
    schedule: "Tue, Thu, Sat — 7:00 AM & 6:00 PM",
    description: "Build strength and flexibility with dynamic yoga flows for all fitness levels.",
    level: "Beginner-Friendly",
    duration: "60 min",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "Strength Academy",
    schedule: "Mon–Fri — 8:00 AM & 4:00 PM",
    description: "Progressive strength training program focused on compound lifts and form.",
    level: "Intermediate+",
    duration: "60 min",
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "Cardio Kickboxing",
    schedule: "Mon, Wed, Fri — 7:00 AM & 6:30 PM",
    description: "Martial arts-inspired cardio workout that tones and torches fat.",
    level: "All Levels",
    duration: "45 min",
    color: "from-yellow-600 to-yellow-800",
  },
  {
    name: "Spin Revolution",
    schedule: "Tue, Thu — 6:00 AM & 5:00 PM",
    description: "High-energy indoor cycling with motivating music and immersive visuals.",
    level: "All Levels",
    duration: "45 min",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    name: "Mindful Flow",
    schedule: "Sat, Sun — 8:00 AM & 9:30 AM",
    description: "Restorative yoga and meditation to reset your mind and body.",
    level: "All Levels",
    duration: "60 min",
    color: "from-yellow-400 to-yellow-700",
  },
];

export default function Classes() {
  return (
    <section id="classes" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">Our Classes</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Find Your <span className="text-primary">Flow</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Diverse class offerings designed to challenge every muscle and keep you motivated.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div
              key={cls.name}
              className="group relative overflow-hidden rounded-xl bg-dark-300 border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${cls.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{cls.name}</h3>
                  <span className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                    {cls.duration}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{cls.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {cls.schedule}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    {cls.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
