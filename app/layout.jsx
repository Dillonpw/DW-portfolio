import "./globals.css";
import Footer from "./components/Footer";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Dillon Walsh - Web Developer",
  openGraph: {
    title: "Dillon Walsh - Web Developer",
  },
  description:
    "Dillon Walsh- Professional Web Developer. Come see what I've been up to!",
    icons: {
        icon: "/logo.svg",
        shortcut: "/logo.svg",
    },
    referrer: "origin-when-cross-origin",
    authors: ["Dillon Walsh"],
    creator: "Dillon Walsh",
    publisher: "Dillon Walsh",
    robots: {
      index: true,
      nocache: true,
      follow: true,
      googleBot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
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
  metadataBase: new URL ("https://www.dillonwalsh.com"),
  alternates: {
      canonical: "/"
  },
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com", crossorigin: true },
    { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
    { rel: "preload", href: "/logo.svg", as: "image" },
    { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
  ],
  bookmarks: [
    { rel: "me", href: "https://github.com/Dillonpw" },
    { rel: "me", href: "https://www.linkedin.com/in/dillon-walsh-50673b290/" },
  ],
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
