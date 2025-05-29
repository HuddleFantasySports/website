export default function CTAButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-700 text-white text-sm font-semibold hover:brightness-110 shadow-lg transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
