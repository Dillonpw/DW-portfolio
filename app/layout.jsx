import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Dillon Walsh - Web Developer",
  description:
    "Dillon Walsh- Professional Web Developer. Come see what I've been up to!",
  openGraph: {
    title: "Dillon Walsh - Web Developer",
  },
  keywords: [
    "Dillon",
    "Walsh",
    "portfolio",
    "web",
    "developer",
    "web developer",
    "first responder",
    "ios",
    "mobile",
    "react native",
    "expo",
    "tauri",
    "blog",
    "programming",
    "personal interests",
    "computer",
    "science",
    "computer science",
    "technology",
    "projects",
    "next.js",
    "first",
    "responder",
    "ReactJS",
    "Astro Framework",
    "Front-End Development",
    "CSS3",
    "JavaScript",
    "E-Commerce Development",
    "Responsive Design",
    "UI/UX Design",
    "Web Design",
    "HTML5",
    "SEO Optimization",
    "Modern Web Technologies",
    "Dynamic Websites",
    "Client-Side Routing",
    "Web Performance",
    "Cross-Browser Compatibility",
    "Web Accessibility",
    "Custom Web Solutions",
    "Interactive Websites",
    "Digital Portfolio",
  ],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
  referrer: "origin-when-cross-origin",
  authors: ["Dillon Walsh"],
  creator: "Dillon Walsh",
  publisher: "Dillon Walsh",
  metadataBase: new URL("https://www.dillonwalsh.com"),
  alternates: {
    canonical: "/",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative min-h-full bg-neutral-50 p-0 text-slate-900 transition-all dark:bg-neutral-950 dark:text-gray-200`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
