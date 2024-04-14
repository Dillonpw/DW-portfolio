'use client'
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="relative min-h-full bg-gradient-to-br from-gray-300 to-emerald-400 p-0 text-slate-900 dark:bg-gradient-to-br dark:from-sky-950 dark:to-slate-900 dark:text-cyan-200">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
