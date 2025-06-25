export default function CTAButton({
  children,
  email = "jack@meshleagues.com",
  className = "",
}) {
  return (
    <a
      href={`mailto:${email}`}
      className={`inline-block px-6 py-3 rounded-md shadow-md bg-gradient-to-r from-[#8A70F5] to-[#3DE29F] text-white text-sm font-bold hover:brightness-110 transition-all duration-200 ${className}`}
    >
      {children}
    </a>
  );
}
