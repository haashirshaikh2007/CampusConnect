import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur
        bg-white/70 dark:bg-background/70
        border-b border-black/10 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-xl font-bold">
            Campus<span className="text-accent">Connect</span>
          </h1>

          {/* Links */}
          <div className="hidden md:flex gap-8 text-sm text-gray-700 dark:text-textMuted">
            <a className="cursor-pointer hover:text-black dark:hover:text-white">Home</a>
            <a className="cursor-pointer hover:text-black dark:hover:text-white">Events</a>
            <a className="cursor-pointer hover:text-black dark:hover:text-white">Colleges</a>
            <a className="cursor-pointer hover:text-black dark:hover:text-white">Community</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center
              bg-white dark:bg-surface
              border border-black/10 dark:border-white/10
              transition-transform duration-300 hover:rotate-12"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Sign In */}
            <button
              onClick={() => setShowLogin(true)}
              className="bg-accent text-black px-4 py-2 rounded-full font-semibold
              hover:bg-amber-400 transition"
            >
              Sign In
            </button>

          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </>
  );
}
