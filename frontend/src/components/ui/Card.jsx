// src/components/ui/Card.jsx
export default function Card({ title, children, footer, className = "" }) {
  return (
    <article className={`bg-white shadow-sm rounded-lg p-6 ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
      <div className="text-sm text-gray-700">{children}</div>
      {footer && <div className="mt-4 text-right text-xs text-gray-500">{footer}</div>}
    </article>
  );
}
