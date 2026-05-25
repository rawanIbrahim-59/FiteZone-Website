const trainers = [
  {
    name: "Marcus Johnson",
    role: "Head Coach & Founder",
    bio: "15+ years of experience. Certified strength and conditioning specialist.",
    specialties: ["Strength Training", "Athletic Performance", "Nutrition"],
    initials: "MJ",
  },
  {
    name: "Sarah Chen",
    role: "Yoga & Flexibility Lead",
    bio: "RYT-500 certified yoga instructor with a background in physical therapy.",
    specialties: ["Vinyasa Yoga", "Mobility", "Injury Prevention"],
    initials: "SC",
  },
  {
    name: "Alex Rodriguez",
    role: "HIIT & Cardio Specialist",
    bio: "Former collegiate athlete passionate about high-intensity functional training.",
    specialties: ["HIIT", "Cardio Conditioning", "Boxing"],
    initials: "AR",
  },
  {
    name: "Emily Watson",
    role: "Strength & Nutrition Coach",
    bio: "Certified nutritionist and strength coach helping clients transform their bodies.",
    specialties: ["Powerlifting", "Meal Planning", "Body Composition"],
    initials: "EW",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">Expert Trainers</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            World-class trainers dedicated to your success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group text-center"
            >
              <div className="w-40 h-40 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{trainer.initials}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
              <p className="text-primary text-sm font-semibold mb-3">{trainer.role}</p>
              <p className="text-gray-400 text-sm mb-4">{trainer.bio}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {trainer.specialties.map((s) => (
                  <span key={s} className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
