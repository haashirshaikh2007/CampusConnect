import { useTheme } from "../context/ThemeContext";
import darkBg from "../assets/backdrop-dark.jpg";   // 🌙 Dark
import lightBg from "../assets/backdrop-light.jpg"; // ☀️ Light

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">


     {/* Dark Background */}
<img
  src={darkBg}
  alt="Dark background"
  className={`absolute inset-0 w-full h-full object-cover
    transition-all duration-700 ease-in-out
    ${theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
/>


{/* Light Background */}
<img
  src={lightBg}
  alt="Light background"
  className={`absolute inset-0 w-full h-full object-cover
    transition-all duration-700 ease-in-out
    ${theme === "light" ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
/>


      {/* Overlay */}
       <div
    className="absolute inset-0
      bg-white/55 dark:bg-black/65
      transition-colors duration-500"
  />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">

        {/* Subtitle */}
        <p
          className="text-sm md:text-base max-w-2xl mb-6
          text-gray-700 dark:text-textMuted"
        >
          Discover and join thousands of events, fests, and workshops from universities all over Mumbai.
        </p>

        {/* Main Heading */}
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-8
          text-gray-900 dark:text-textPrimary"
        >
          Every Campus. <br />
          Every Event. <br />
          <span className="text-accent">One Connection.</span>
        </h1>

        {/* Search Bar */}
        <div
          className="flex items-center rounded-full px-5 py-3 w-full max-w-md mb-8
          bg-white/80 dark:bg-surface/90 backdrop-blur shadow"
        >
          <input
            type="text"
            placeholder="Search events, colleges..."
            className="bg-transparent outline-none text-sm flex-1
              text-gray-900 dark:text-textPrimary
              placeholder:text-gray-500 dark:placeholder:text-textMuted"
          />
        </div>

        {/* CTA Button */}
        <button
          className="bg-accent text-black px-8 py-3 rounded-full font-semibold
          hover:bg-amber-400 transition"
        >
          Explore by Category
        </button>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mt-12 justify-center">
          {["Tech", "Cultural", "Sports", "Hackathons", "Workshops", "Arts"].map(
            (cat) => (
              <span
                key={cat}
                className="px-4 py-1 rounded-full text-sm
                bg-white/70 text-gray-800
                dark:bg-surface/80 dark:text-textMuted
                hover:text-black dark:hover:text-white
                transition cursor-pointer"
              >
                {cat}
              </span>
            )
          )}
        </div>

      </div>
    </section>
  );
}
