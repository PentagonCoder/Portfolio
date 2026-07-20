import React from "react";

/**
 * Reusable SVG spinner component
 * Props:
 *  - size: number (px) default 24
 *  - className: additional tailwind classes
 *  - label: accessible label (aria-label)
 */
export default function Spinner({ size = 24, className = "", label = "Loading" }) {
  const stroke = Math.max(2, Math.round(size / 12));
  return (
    <svg
      role="status"
      aria-label={label}
      className={`animate-spin text-blue-600 ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeOpacity="0.15"
      />
      <path
        d="M22 12a10 10 0 00-10-10"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
      />
    </svg>
  );
}
