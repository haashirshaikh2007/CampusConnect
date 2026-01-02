import { useState } from "react";

export default function LoginModal({ isOpen, onClose }) {
  const [mode, setMode] = useState("login"); // login | signup
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    // TEMP: just log data (Mongo backend later)
    console.log({ mode, role });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Glass Modal */}
      <div className="relative z-10 w-full max-w-md rounded-2xl
        bg-white/10 dark:bg-white/5 backdrop-blur-xl
        border border-white/20 shadow-2xl
        max-h-[90vh] flex flex-col">

        <div className="p-6 overflow-y-auto modal-scroll">

          {/* Header */}
          <h2 className="text-2xl font-bold text-white mb-1">
            {mode === "login" ? "Sign In" : "Create Account"}
          </h2>
          <p className="text-sm text-white/70 mb-6">
            {mode === "login"
              ? "Choose your role and enter your credentials"
              : "Sign up to start using CampusConnect"}
          </p>

          {/* Role Selector */}
          <div className="flex gap-2 mb-6">
            {[
              { label: "Student", value: "student" },
              { label: "Committee Admin", value: "committee" },
              ...(mode === "login"
                ? [{ label: "Organizer", value: "organizer" }]
                : []),
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setRole(item.value)}
                className={`flex-1 py-2 rounded-full text-sm font-medium transition
                  ${role === item.value
                    ? "bg-accent text-black"
                    : "bg-white/10 text-white/70 hover:bg-white/20"}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* SIGNUP COMMON */}
          {mode === "signup" && (
            <Input label="Full Name" />
          )}

          {/* EMAIL */}
          <Input label="Email" type="email" />

          {/* COMMITTEE ADMIN EXTRA */}
          {mode === "signup" && role === "committee" && (
            <>
              <Input label="Phone Number" />
              <Input label="College Name" />
              <Input label="Committee Name" />
            </>
          )}

          {/* STUDENT EXTRA */}
          {mode === "signup" && role === "student" && (
            <Input label="College Name" />
          )}

          {/* PASSWORD */}
          <div className="mb-4">
            <label className="text-sm text-white/70 mb-1 block">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 pr-12 rounded-lg
                bg-white/10 text-white border border-white/10
                outline-none focus:border-accent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2
                text-white/60 hover:text-white text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          {mode === "signup" && (
            <Input label="Confirm Password" type="password" />
          )}

          {/* ACTION */}
          <button
            onClick={handleSubmit}
            className="w-full bg-accent text-black py-3 rounded-full
            font-semibold hover:bg-amber-400 transition"
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </button>

          {/* TOGGLE */}
          <p className="text-xs text-center mt-4 text-white/60">
            {mode === "login" ? (
              <>
                New here?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-accent hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-accent hover:underline"
                >
                  Login
                </button>
              </>
            )}
          </p>

        </div>
      </div>
    </div>
  );
}

/* Reusable Input */
function Input({ label, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="text-sm text-white/70 mb-1 block">
        {label}
      </label>
      <input
        type={type}
        className="w-full px-4 py-3 rounded-lg
        bg-white/10 text-white border border-white/10
        outline-none focus:border-accent"
      />
    </div>
  );
}
