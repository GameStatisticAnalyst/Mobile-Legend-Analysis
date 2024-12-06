// components/FormCard.js
export default function FormCard({ title, description, children }) {
  return (
    <div className="relative bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-lg shadow-xl p-8 w-[90%] max-w-md">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      {children}
    </div>
  );
}
