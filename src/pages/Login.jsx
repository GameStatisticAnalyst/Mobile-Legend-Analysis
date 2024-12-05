// pages/login.js
import FormCard from "../components/FormCard";

export default function LoginPage() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-transparent ">
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <svg
            key={i}
            className="absolute opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill={`hsl(${Math.random() * 360}, 70%, 70%)`}
          >
            <circle cx="12" cy="12" r="12" />
          </svg>
        ))}
      </div>

      {/* Form */}
      <FormCard
        title="Login to Your Account"
        description="Please login to continue to your dashboard."
      >
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md"
          >
            Login
          </button>
        </form>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </FormCard>
    </div>
  );
}
