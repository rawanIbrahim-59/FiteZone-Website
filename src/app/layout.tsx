import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitZone - Transform Your Body, Transform Your Life",
  description: "Premium gym and fitness center offering personal training, group classes, and state-of-the-art equipment.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
