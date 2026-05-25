export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-primary/20" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eab308' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
          No Pain, No Gain
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your{" "}
          <span className="text-primary">Body</span>
          <br />
          Transform Your{" "}
          <span className="text-primary">Life</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join FitZone and unlock your full potential with world-class trainers,
          cutting-edge equipment, and a community that pushes you to be your best.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded text-lg font-semibold transition-colors"
          >
            Start Your Journey
          </a>
          <a
            href="#classes"
            className="border border-white/30 hover:border-primary text-white px-8 py-4 rounded text-lg font-semibold transition-colors"
          >
            View Classes
          </a>
        </div>
      </div>
    </section>
  );
}
