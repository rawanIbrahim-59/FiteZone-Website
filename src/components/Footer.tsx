export default function Footer() {
  return (
    <footer className="bg-dark-300 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-bold text-primary">
              Fit<span className="text-white">Zone</span>
            </a>
            <p className="text-gray-400 mt-3 max-w-sm text-sm">
              Transform your body, transform your life. Join the FitZone community
              and unlock your full potential.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Home", "Features", "Classes", "Trainers", "Pricing"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Instagram", "Facebook", "Twitter", "YouTube"].map((social) => (
                <li key={social}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} FitZone. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
