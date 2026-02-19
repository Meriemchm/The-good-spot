// components/ServiceCard.jsx
export default function ServiceCard({
  icon,
  title,
  description,
  highlighted,
}) {
  return (
    <div
      className={`
        rounded-2xl p-6 transition-all duration-300
        ${
          highlighted
            ? "bg-yellow-400 text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }
      `}
    >
      <div
        className={`
          w-12 h-12 flex items-center justify-center
          rounded-full border mb-4
          ${highlighted ? "border-white" : "border-gray-400"}
        `}
      >
        {icon}
      </div>

      <h3 className="font-semibold text-lg mb-2">{title}</h3>

      <p className="text-sm opacity-90">{description}</p>
    </div>
  );
}
