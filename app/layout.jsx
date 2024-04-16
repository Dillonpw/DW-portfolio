import "./globals.css";
import Footer from "./components/Footer";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Dillon Walsh - Web Developer",
  description:
    "Dillon Walsh- Professional Web Developer. Come see what I've been up to!",
    icons: {
        icon: "/logo.svg"
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
  metadataBase: new URL ("httos://dillonwalsh.com"),
  alternates: {
      canonical: "/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-full bg-gradient-to-br from-gray-300 to-emerald-400 p-0 text-slate-900 dark:bg-gradient-to-br dark:from-sky-950 dark:to-slate-900 dark:text-cyan-200">
        {children}
        <Footer />
      </body>
    </html>
  );
}
